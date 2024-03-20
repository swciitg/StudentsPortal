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
      html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #212121;
            color: #ffffff;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #555;
            background-color: #000;
              text-align: center;
          }
          h2 {
            color: #fff;
          }
          .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: #2164E8;
          }
 
        </style>
      </head>
      <body>
        <div class="container">
          <h2>OTP Verification</h2>
          <p class='otp-line'>Your OTP for verification is: <span class="otp-code">${otp}</span></p>
        </div>
      </body>
    </html>
      `
    };
    
  
    await transporter.sendMail(mailOptions);
  }
};



export default emailService;
