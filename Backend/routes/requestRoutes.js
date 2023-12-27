const express = require('express');
const { createRequest, RequestDetails, WithdrawRequest } = require('../controllers/requestsController');
const router = express.Router();




router.post('/', createRequest);
router.post('/request-details', RequestDetails);
router.post('/withdraw-request', WithdrawRequest);

module.exports = router;
