const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
