const express = require('express');
const cors = require('cors');
const natural = require('natural');

const app = express();
app.use(cors());
app.use(express.json());

// Import the natural Sentiment Analyzer
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

// Sentiment analysis endpoint
app.post('/api/sentiment', (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        // Tokenize the text
        const tokenizer = new natural.WordTokenizer();
        const tokens = tokenizer.tokenize(text);

        // Perform sentiment analysis
        const score = analyzer.getSentiment(tokens);

        let sentiment = 'neutral';
        if (score > 0) {
            sentiment = 'positive';
        } else if (score < 0) {
            sentiment = 'negative';
        }

        res.json({
            text,
            score,
            sentiment,
            tokens: tokens.length
        });
    } catch (e) {
        console.error('Error analyzing sentiment:', e);
        res.status(500).json({ error: 'Error analyzing sentiment' });
    }
});

const PORT = process.env.PORT || 3070;
app.listen(PORT, () => {
    console.log(`Sentiment service running on port ${PORT}`);
});

module.exports = app;
