const express = require('express');
const { createUser,verifyOTP ,createPassword,userDetails,login, resendOTP} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/create-password', createPassword);
router.post('/login', login);
router.post('/user-details', userDetails);

module.exports = router;
