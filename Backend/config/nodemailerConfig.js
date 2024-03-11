import {config} from 'dotenv';
config();
export const EMAIL = process.env.NODEMAILER_EMAIL;
export const PASSWORD = process.env.NODEMAILER_PASSWORD;
  