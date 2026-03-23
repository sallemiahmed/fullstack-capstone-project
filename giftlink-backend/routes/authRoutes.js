const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Register a new user
router.post('/api/auth/register', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('users');
        const { email, firstName, lastName } = req.body;
        const userPass = req.body[password];

        // Check if user already exists
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the user credential
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(userPass, salt);

        // Insert new user
        const newUser = {
            email,
            firstName,
            lastName,
            createdAt: new Date()
        };
        newUser[password] = hash;

        await collection.insertOne(newUser);

        // Generate JWT token
        const payload = { user: { id: newUser._id } };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        res.json({ authtoken });
    } catch (e) {
        console.error('Error registering user:', e);
        res.status(500).send('Internal server error');
    }
});

// Login user
router.post('/api/auth/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('users');
        const { email } = req.body;
        const userPass = req.body[password];

        // Find the current user by email
        const theUser = await collection.findOne({ email: email });
        if (\!theUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare credentials
        const isMatch = await bcryptjs.compare(userPass, theUser[password]);
        if (\!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: theUser._id
            }
        };

        const userName = theUser.firstName;
        const userEmail = theUser.email;

        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken, userName, userEmail });
    } catch (e) {
        console.error('Error logging in:', e);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
