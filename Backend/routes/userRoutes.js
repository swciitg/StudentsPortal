const express = require('express');
const { createUser,verifyOTP ,createPassword,userDetails} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.post('/verify-otp', verifyOTP);
router.post('/create-password', createPassword);
router.post('/user-details', userDetails);

module.exports = router;
