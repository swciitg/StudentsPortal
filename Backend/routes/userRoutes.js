import { Router } from 'express';
import { createUser, verifyOTP, createPassword, userDetails, login, resendOTP, upload, handleFileUpload } from '../controllers/userController.js';
const router = Router();



router.post('/', createUser);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/create-password', createPassword);
router.post('/login', login);
router.post('/user-details', userDetails);
router.post('/upload', upload.single('file'), handleFileUpload);

export default router;
