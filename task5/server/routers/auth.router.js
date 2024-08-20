const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// POST request for registering a user
router.post('/register', authController.register);

// POST request for logging in a user
router.post('/login', authController.login);

module.exports = router;
