from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from flask_cors import CORS
import time
import os
import re
import random
from otp_utils import generate_otp, verify_otp

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests
bcrypt = Bcrypt(app)

# MongoDB setup using environment variable for secure credentials
mongo_uri = os.getenv("MONGODB_URI", "mongodb://admin_sfc:admin_223344@localhost:27017/database?authSource=admin")  # Default URI if env variable not set
client = MongoClient(mongo_uri)
db = client.get_database()  # Use the specified database from the URI
collection = db.users
collection_iot = db.sensor_data

# Email validation function
def is_valid_email(email):
    email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(email_regex, email) is not None

# Password strength validation function
def is_strong_password(password):
    return (
        len(password) >= 8 and              # Minimum length
        re.search(r'[A-Z]', password) and   # At least one uppercase letter
        re.search(r'[a-z]', password) and   # At least one lowercase letter
        re.search(r'[0-9]', password) and   # At least one digit
        re.search(r'[^A-Za-z0-9]', password) # At least one special character
    )

def generateUserId():
    return random.randint(100000000000, 999999999999); # Ensures a 12-digit number

# Register route with email and password validation
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    if not is_strong_password(password):
        return jsonify({"error": "Password must be at least 8 characters, include uppercase and lowercase letters, a number, and a special character"}), 400

    if collection.find_one({"email": email}):
        return jsonify({"error": "Email already registered"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user_id = generateUserId();
    collection.insert_one({"email": email, "password": hashed_password, "userID": user_id, "isAdmin": False})
    
    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/register-admin', methods=['POST'])
def register_admin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    secret_key = data.get('secret_key')

    # Validate the secret key
    if secret_key != os.getenv("ADMIN_SECRET_KEY", "my_admin_secret_key"):
        return jsonify({"error": "Unauthorized to register as admin"}), 403

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    if not is_strong_password(password):
        return jsonify({"error": "Password must meet complexity requirements"}), 400

    if collection.find_one({"email": email}):
        return jsonify({"error": "Email already registered"}), 409

    # Hash the password and store the admin flag
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    collection.insert_one({"email": email, "password": hashed_password, "isAdmin": True})

    return jsonify({"message": "Admin registered successfully!"}), 201


# Update Admin route
@app.route('/update-admin', methods=['POST'])
def update_admin():
    data = request.get_json()
    requester_email = data.get('requester_email')  # The admin making the request
    target_email = data.get('target_email')       # The user whose role is being updated
    action = data.get('action')                  # 'promote' or 'demote'

    if not requester_email or not target_email or not action:
        return jsonify({"error": "Requester email, target email, and action are required"}), 400

    # Verify the requester is an admin
    requester = collection.find_one({"email": requester_email})
    if not requester or not requester.get("isAdmin"):
        return jsonify({"error": "Unauthorized. Only admins can perform this action."}), 403

    # Verify the target user exists
    target_user = collection.find_one({"email": target_email})
    if not target_user:
        return jsonify({"error": "Target user does not exist"}), 404

    # Promote or demote the user
    if action == "promote":
        collection.update_one({"email": target_email}, {"$set": {"isAdmin": True}})
        return jsonify({"message": f"{target_email} has been promoted to admin."}), 200
    elif action == "demote":
        collection.update_one({"email": target_email}, {"$unset": {"isAdmin": ""}})
        return jsonify({"message": f"{target_email} has been demoted from admin."}), 200
    else:
        return jsonify({"error": "Invalid action. Use 'promote' or 'demote'."}), 400

# Login route with email validation
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    user = collection.find_one({"email": email})
    if user and bcrypt.check_password_hash(user['password'], password):
        return jsonify({
            "message": "Login successful!",
            "userID": user['userID']  # Ensure userID is returned
        }), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401
    
@app.route('/is-admin', methods=['GET'])
def is_admin():
    user_id = request.args.get('userID')
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    user = collection.find_one({"userID": int(user_id)})
    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({"isAdmin": user.get("isAdmin", False)}), 200


@app.route('/forgot', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')
    if not email:
        return jsonify({"error": "Email is required"}), 400
    
    user = collection.find_one({"email": email})
    if not user:
        return jsonify({"error": "User with this email does not exist"}), 404

    try:
        otp = generate_otp(email)
        # Optionally store the secret key in the database for persistence
        collection.update_one({"email": email}, {"$set": {"otp": otp, "otp_timestamp": time.time()}})
        print(f"Generated OTP for {email}: {otp}")
        
        return jsonify({"message": "OTP generated successfully. Use it to reset your password."}), 200
    except Exception as e:
        print(f"Error generating OTP: {e}")
        return jsonify({"error": "Failed to generate OTP"}), 500

@app.route('/reset', methods=['POST'])
def reset_password():
    data = request.get_json()
    email = data.get('email')
    otp = data.get('otp')
    new_password = data.get('new_password')

    if not email or not otp or not new_password:
        return jsonify({"error": "Email, OTP, and new password are required"}), 400

    if not re.fullmatch(r'\d{6}', otp):
        return jsonify({"error": "OTP must be a six-digit number"}), 400

    if not is_strong_password(new_password):
        return jsonify({"error": "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character"}), 400

    try:
        print(f"Verifying OTP for {email} | Input OTP: {otp}")
        success, message = verify_otp(email, otp)
        if not success:
            print(f"OTP Verification Failed: {message}")
            return jsonify({"error": message}), 400

        hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
        collection.update_one({"email": email}, {"$set": {"password": hashed_password}, "$unset": {"otp": "", "otp_timestamp": ""}})
        
        return jsonify({"message": "Password has been reset successfully!"}), 200
    except Exception as e:
        print(f"Error resetting password: {e}")
        return jsonify({"error": "Failed to reset password"}), 500

# Generate OTP route
@app.route('/generate-otp', methods=['POST'])
def generate_otp_route():
    data = request.get_json()
    email = data.get('email')
    if not email:
        return jsonify({"error": "Email is required"}), 400

    otp = generate_otp(email)
    return jsonify({"message": "OTP generated successfully", "otp": otp}), 200

# Verify OTP route
@app.route('/verify-otp', methods=['POST'])
def verify_otp_route():
    data = request.get_json()
    email = data.get('email')
    otp_input = data.get('otp')

    if not email or not otp_input:
        return jsonify({"error": "Email and OTP are required"}), 400

    success, message = verify_otp(email, otp_input)
    if success:
        return jsonify({"message": message}), 200
    else:
        return jsonify({"error": message}), 400

@app.route('/iot/data', methods=['POST'])
def receive_iot_data():
    try:
        data = request.json  # Get JSON data
        if not data:
            return jsonify({"error": "No data received"}), 400

        # Ensure the data is a dictionary
        if isinstance(data, str):
            try:
                # Convert string to dictionary
                data = eval(data)  # Use `json.loads(data)` if it's a JSON string
            except Exception as e:
                return jsonify({"error": "Invalid data format"}), 400

        # Validate that data is now a dictionary
        if not isinstance(data, dict):
            return jsonify({"error": "Expected a dictionary"}), 400

        # Insert the dictionary into MongoDB
        collection_iot.insert_one(data)
        return jsonify({"message": "Sensor data stored successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)