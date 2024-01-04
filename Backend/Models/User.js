const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String, required: true, unique: true },
  roll: { type: String,default:"admin"},
  verified: { type: Boolean, default: false },
  otp: String,
  password: String,
  role: {
    type: String,
    enum: ["student", "admin"],
    required: true,
  },
  program: String,
  altEmail: String,
  department: String,
  profileCompletion: Number,
  profileUrl: String,
  token: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
