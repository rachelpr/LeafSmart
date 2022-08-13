const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/AuthController');

// Auth Usage

// Register - POST
router.post('/register', register);

// Login - POST
router.post('/login', login);

module.exports = router;