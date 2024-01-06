import { User } from "../Models/User.js";
import emailService from "../services/emailService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";

async function createUser(req, res) {
  const { name, email, roll } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.verified&&existingUser.password){
        return res.status(400).json({ message: 'User already exists and is verified' });
      }
      // If the user exists but is not verified,update the existing user
      const otp = generateOTP();

      existingUser.name = name;
      existingUser.roll = role==='student'?roll:undefined;
      existingUser.verified = false;
      existingUser.otp = otp;
      existingUser.role = role;

      await existingUser.save();

      await emailService.sendOTP(email, otp);

      return res.status(201).json({ message: 'User updated with new OTP' });
    }
    const otp = generateOTP();

    const newUser = new User({
      name,
      email,
      roll:  roll ,
      verified: false,
      otp,
      profileCompletion:0
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
    const user = await User.findOne({ email, otp });

    if (!user) {
      return res.status(400).json({ message: "Invalid OTP" });
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
    const hashedPassword = await bcrypt.hash(password, 10); 
    
    const token = jwt.sign({ email: user.email,role:user.role }, "your_secret_key", {
      expiresIn: "1h",
    });
    user.password = hashedPassword;
    user.token=token;
    await user.save();
    res.status(200).json({ token });
    console.log("Password created successfully");
  } catch (error) {
    console.error("Error creating pass:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function login(req, res) {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email, role, verified: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
  

    const token = jwt.sign({ email: user.email,role:user.role }, "your_secret_key", {
      expiresIn: "1h",
    });
    user.token=token;
    await user.save();
    // res.cookie('Login', token, { httpOnly: true,sameSite: 'None', secure: true , maxAge: 3600000 });

    console.log(`${role}  Login successfully`);


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
    const {
      email,
      program,
      altEmail,
      department,
      profileCompletion,
      profileUrl,
      role,
      token
    } = req.body;
    const user = await User.findOne({ email,role,token });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (program && program.length > 0) user.program = program;
    if (altEmail && altEmail.length > 0) user.altEmail = altEmail;
    if (department && department.length > 0) user.department = department; 
    if (profileUrl && profileUrl.length > 0) user.profileUrl = profileUrl;
    if (profileCompletion) {
      user.profileCompletion = profileCompletion;
    }
    await user.save();
    res.status(200).json({
      name: user.name,
      email: user.email,
      roll: user.roll,
      program: user.program,
      altEmail: user.altEmail,
      department: user.department,
      profileCompletion: user.profileCompletion,
      profileUrl: user.profileUrl,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

async function handleFileUpload(req, res) {
  try {
    const filePath = req.file.path;
    const serverURL =
      "http://localhost:3002/uploads/" + path.basename(filePath); // Assuming your uploads are in the 'uploads' folder
    res.json({ url: serverURL });
  } catch (error) {
    console.error("Error uploading file:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export {
  upload,
  handleFileUpload,
  createUser,
  verifyOTP,
  login,
  generateOTP,
  createPassword,
  userDetails,
  resendOTP
};
