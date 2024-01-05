import express from 'express';
import { createRequest, RequestDetails, WithdrawRequest, RequestDetailsadmin, DenyRequest, ApproveRequest } from '../controllers/requestsController.js';
const router = express.Router();




router.post('/', createRequest);
router.post('/request-details', RequestDetails);
router.post('/request-details-admin', RequestDetailsadmin);
router.post('/deny-request', DenyRequest);
router.post('/approve-request', ApproveRequest);
router.post('/withdraw-request', WithdrawRequest);

export default router;
