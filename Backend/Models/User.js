const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email:{ type: String, required: true, unique: true },
  roll: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false }, 
  otp: String, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;