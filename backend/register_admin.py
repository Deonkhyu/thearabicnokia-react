import os
from pymongo import MongoClient
from flask_bcrypt import Bcrypt

# MongoDB setup
mongo_uri = os.getenv("MONGODB_URI", "mongodb://admin_sfc:admin_223344@localhost:27017/database?authSource=admin")
client = MongoClient(mongo_uri)
db = client.get_database()
collection = db.users

# Initialize Bcrypt for password hashing
bcrypt = Bcrypt()

# Function to register an admin user
def register_admin():
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    secret_key = input("Enter admin secret key: ").strip()

    # Validate the secret key
    if secret_key != os.getenv("ADMIN_SECRET_KEY", "my_admin_secret_key"):
        print("Invalid secret key. Admin registration failed.")
        return

    # Check if the email already exists
    if collection.find_one({"email": email}):
        print("This email is already registered.")
        return

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Insert the admin user into the database
    collection.insert_one({
        "email": email,
        "password": hashed_password,
        "isAdmin": True
    })

    print(f"Admin user {email} registered successfully!")

if __name__ == "__main__":
    register_admin()
