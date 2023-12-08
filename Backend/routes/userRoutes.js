const express = require('express');
const { createUser,verifyOTP } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.post('/verify-otp', verifyOTP);

module.exports = router;
