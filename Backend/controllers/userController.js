const User = require('../models/User');
const emailService = require('../services/emailService');

async function createUser(req, res) {
  const { name, email, roll } = req.body;

  try {
    

    const otp = generateOTP();
    
    const newUser = new User({ name, email, roll, verified: false, otp });
    await newUser.save();

    await emailService.sendOTP(email, otp);

    console.log('User Created Successfully');
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
async function verifyOTP(req, res) {
    const { email, otp } = req.body;
  
    try {
      const user = await User.findOne({ email, otp, verified: false });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid OTP or user already verified' });
      }
  
      user.verified = true;
      await user.save();
  
      console.log('OTP Verified Successfully');
      res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

module.exports = { createUser,verifyOTP, generateOTP };
