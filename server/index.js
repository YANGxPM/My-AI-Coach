// Load .env FIRST before any other requires
const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath });

// Verify API key is loaded
console.log('ANTHROPIC_API_KEY loaded:', process.env.ANTHROPIC_API_KEY ? 'YES' : 'NO');
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ERROR: ANTHROPIC_API_KEY is not set! Please check your .env file.');
}

// Now require other modules AFTER env is loaded
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');
const curriculumRoutes = require('./routes/curriculum');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/curriculum', curriculumRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI PM Coach API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 AI PM Coach server running on port ${PORT}`);
});
