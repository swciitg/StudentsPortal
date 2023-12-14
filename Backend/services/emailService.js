const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = require('../config/nodemailerConfig');

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

module.exports = { sendOTP };
