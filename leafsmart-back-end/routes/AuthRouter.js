const express = require('express');
const router = express.Router();
const { login } = require('../controllers/AuthController');

// Auth Usage

// Register - POST
// router.post('/register', AuthController.register);

// Login - POST
router.post("/", login);

module.exports = router;