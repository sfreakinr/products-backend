const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Dummy credentials
const validEmail = "test11@gmail.com";
const validPassword = "pass123";

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (email === validEmail && password === validPassword) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
});

module.exports = router;
