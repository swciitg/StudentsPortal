import nodemailer from 'nodemailer';
import { EMAIL,PASSWORD } from '../config/nodemailerConfig.js';


const emailService = {
  sendOTP:
  async function sendOTP(email, otp) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });
  
    let mailOptions = {
      from: EMAIL,
      to: `${email}@iitg.ac.in`,
      subject: 'OTP Verification For Students Portal',
      text: `Your OTP for verification is: ${otp}`,
    };
  
    await transporter.sendMail(mailOptions);
  }
};



export default emailService;
