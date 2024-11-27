// passport-config.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import db from './server/db/connection.js'; // Database connection

// Serialize user (store user ID in the session)
passport.serializeUser((user, done) => {
  done(null, user._id); // Store user ID in the session
});

// Deserialize user (retrieve full user object using ID from session)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
    if (!user) {
      return done(null, false, { message: 'User not found.' });
    }
    done(null, user);
  } catch (error) {
    console.error('Error during deserialization:', error);
    done(error);
  }
});

// LocalStrategy for login
passport.use(new LocalStrategy(
  {
    usernameField: 'email', // Field for email
    passwordField: 'password', // Field for password
  },
  async (email, password, done) => {
    try {
      // Normalize email
      email = email.toLowerCase().trim();

      // Find user in database
      const user = await db.collection('users').findOne({ email });
      if (!user) {
        console.error(`Login failed for email: ${email} - User not found.`);
        return done(null, false, { message: 'Invalid credentials.' });
      }

      // Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.error(`Login failed for email: ${email} - Incorrect password.`);
        return done(null, false, { message: 'Invalid credentials.' });
      }

      // Success
      console.log(`User ${email} authenticated successfully.`);
      return done(null, user);
    } catch (error) {
      console.error('Error during authentication:', error);
      return done(error);
    }
  }
));

export default passport;