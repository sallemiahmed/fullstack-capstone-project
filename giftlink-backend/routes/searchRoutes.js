const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db');

// Route to search gifts with filters
router.get('/api/search', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        let query = {};

        // Filter results based on category
        if (req.query.category) {
            query.category = req.query.category;
        }

        // Filter by name (case-insensitive partial match)
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: 'i' };
        }

        // Filter by condition
        if (req.query.condition) {
            query.condition = req.query.condition;
        }

        // Filter by age range
        if (req.query.age_years) {
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        console.error('Error searching gifts:', e);
        res.status(500).send('Error searching gifts');
    }
});

module.exports = router;
