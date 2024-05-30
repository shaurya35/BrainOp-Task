// routes/auth.js

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// @route   POST /signup
// @desc    Register a new user
// @access  Public
router.post('/signup', async (req, res) => {
  const { username, email, password, name, profilePicture } = req.body;

  // Validate required fields
  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email format' });
  }

  try {
    // Check if the user already exists
    let user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
      return res.status(400).json({ msg: 'Username or email already exists' });
    }

    // Create a new user
    user = new User({ username, email, password, name, profilePicture });

    // Save the user to the database
    await user.save();

    // Generate a JWT token
    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ msg: 'User registered successfully', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
