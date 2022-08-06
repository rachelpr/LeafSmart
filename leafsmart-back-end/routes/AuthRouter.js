const express = require('express');
const router = express.router();
const { AuthController } = require('../controllers/AuthController');

// Auth Usage

// Register - POST
// router.post('/register', AuthController.register);

// Login - POST
router.post('/login', AuthController.login);

module.exports = router;