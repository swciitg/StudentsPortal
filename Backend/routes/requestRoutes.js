const express = require('express');
const router = express.Router();
const createRequest = require('../controllers/requestsController');




router.post('/', createRequest);

module.exports = router;
