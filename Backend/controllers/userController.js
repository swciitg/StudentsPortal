const User = require("../models/User");
const emailService = require("../services/emailService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
  const { name, email, roll, role } = req.body;

  try {
    const otp = generateOTP();

    const newUser = new User({
      name,
      email,
      roll: role === "student" ? roll : undefined,
      verified: false,
      otp,
      role,
    });

    await newUser.save();

    await emailService.sendOTP(email, otp);

    console.log("User Created Successfully");
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email, otp});

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid OTP" });
    }

    user.verified = true;
    await user.save();

    console.log("OTP Verified Successfully");
    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function resendOTP(req, res) {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    const otp = generateOTP();
    user.otp = otp;
    await user.save();
    await emailService.sendOTP(email, otp);
    console.log("OTP Re-sended Successfully");
    res.status(201).json({ message: "OTP Re-send successful" });
  } catch (error) {
    console.log("Error Re-sending OTP:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}
async function createPassword(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the salt rounds
    user.password = hashedPassword;
    await user.save();

    console.log("Password created successfully");
    res.status(200).json({ message: "Password created successfully" });
  } catch (error) {
    console.error("Error creating password:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function login(req, res) {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email, role,verified:true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    console.log(`${role} Login successfully`);

    // Assuming you have a secret key for JWT, replace 'your_secret_key' with your actual secret key
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function userDetails(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      roll: user.roll,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

module.exports = {
  createUser,
  verifyOTP,
  login,
  generateOTP,
  createPassword,
  userDetails,
  resendOTP,
};
