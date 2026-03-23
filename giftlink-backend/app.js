const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use(giftRoutes);
app.use(authRoutes);

// Route that serves /api/search
app.use(searchRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('GiftLink Backend API is running');
});

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
