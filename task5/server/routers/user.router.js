const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware'); 
const User = require('../models/user.model'); 

// GET request to fetch the logged-in user's profile (protected route)
router.get('/me', authMiddleware, async (req, res) => {
    try {
        // Find user by ID and exclude the password from the response
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
