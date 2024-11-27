// Debug statement to confirm server.js is being loaded
console.log('server.js loaded successfully!');

// server.js
import express from 'express';
import session from 'express-session';
import passport from '../passport-config.js'; // Import Passport config
import userRoutes from './routes/user.js';  // Import your routes
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();

// MongoDB connection setup
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/database";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'your-secret-key', // Replace with a strong secret in production
  resave: false, 
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware to check if a user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect to login if not authenticated
};

// Middleware to check if a user is an admin
const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }
  res.status(403).send("Access denied. Admins only.");
};

// Authentication routes
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}));

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

// Protected dashboard route
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send('Welcome to the dashboard');
});

// Routes
app.use('/users', userRoutes); // User routes (includes admin-only and protected routes)

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the application! Please log in to access the dashboard.');
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
