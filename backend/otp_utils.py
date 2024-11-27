import pyotp
import time

# Temporary storage for OTPs, typically would be stored in a database in production
otp_storage = {}

# Function to generate a time-based OTP using PyOTP
def generate_otp(email):
    try:
        # Use a unique key for each email
        secret_key = pyotp.random_base32()
        totp = pyotp.TOTP(secret_key)
        otp = totp.now()

        expiration_time = time.time() + 300  # Set OTP to expire in 5 minutes
        otp_storage[email] = {'otp': otp, 'expires_at': expiration_time, 'secret_key': secret_key}

        print(f"Generated OTP for {email}: {otp} with key {secret_key}")
        return otp
    except Exception as e:
        print(f"Error generating OTP: {e}")
        return None

# Function to verify OTP
def verify_otp(email, otp_input):
    try:
        if email not in otp_storage:
            return False, "OTP not found for this email."

        otp_data = otp_storage[email]

        # Verify OTP expiration
        if time.time() > otp_data['expires_at']:
            del otp_storage[email]  # Remove expired OTP
            return False, "OTP expired."

        # Initialize TOTP and verify
        totp = pyotp.TOTP(otp_data['secret_key'])
        if totp.verify(otp_input, valid_window=1):  # Allow a small time drift
            del otp_storage[email]  # Remove OTP after successful verification
            return True, "OTP verified successfully."
        else:
            return False, "Invalid OTP."
    except Exception as e:
        print(f"Error verifying OTP: {e}")
        return False, "OTP verification failed."
