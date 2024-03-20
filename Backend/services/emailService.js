import nodemailer from 'nodemailer';
import { EMAIL,PASSWORD } from '../config/nodemailerConfig.js';


const emailService = {
  sendOTP:
  async function sendOTP(email, otp) {
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', 
      port: 587, 
      secure: false, 
      auth: {
        user: EMAIL, // Your Outlook email address
        pass: PASSWORD, // Your Outlook password
      },
    });
  
    let mailOptions = {
      from: EMAIL,
      to: `${email}@iitg.ac.in`,
      subject: 'OTP Verification For POR Portal',
      text: `Your OTP for verification is: ${otp}`,
    };
  
    await transporter.sendMail(mailOptions);
  }
};



export default emailService;
