// Code  for mongoose config in backend
// Filename - backend/index.js

// Import necessary modules
const mongoose = require('mongoose');

// Connect to MongoDB using async/await
async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/THEArabicNokia', {
            connectTimeoutMS: 30000,  // Increase timeout to prevent connection issues
            socketTimeoutMS: 45000,
        });
        console.log('Connected to yourDB-name database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.listen(5000, () => {
    console.log('App listening at port 5000');
});

// Call the function to connect
connectDB();