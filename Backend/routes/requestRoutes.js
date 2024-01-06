import express from 'express';
import { createRequest, RequestDetails, WithdrawRequest, RequestDetailsadmin, DenyRequest, ApproveRequest } from '../controllers/requestsController.js';
import { middleware } from '../middleware/updateToken.js';
const router = express.Router();




router.post('/', createRequest);
router.post('/request-details', RequestDetails);
router.post('/request-details-admin',middleware.checkAdminToken, RequestDetailsadmin);
router.post('/deny-request',middleware.checkAdminToken, DenyRequest);
router.post('/approve-request',middleware.checkAdminToken, ApproveRequest);
router.post('/withdraw-request', WithdrawRequest);

export default router;
