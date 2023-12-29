const express = require('express');
const { createRequest, RequestDetails, WithdrawRequest, RequestDetailsadmin, DenyRequest, ApproveRequest } = require('../controllers/requestsController');
const router = express.Router();




router.post('/', createRequest);
router.post('/request-details', RequestDetails);
router.post('/request-details-admin', RequestDetailsadmin);
router.post('/deny-request', DenyRequest);
router.post('/approve-request', ApproveRequest);
router.post('/withdraw-request', WithdrawRequest);

module.exports = router;
