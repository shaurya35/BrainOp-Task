
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const cors = require('cors');

//environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// app.use(cors());
const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));


// Middleware
app.use(express.json());

//MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes);
app.use('/api', postRoutes);

// Basic route to ensure server is running
app.get('/', (req, res) => {
  res.send('MelodyVerse API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
