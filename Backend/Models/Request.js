const mongoose = require('mongoose');

// Define the Request schema
const requestSchema = new mongoose.Schema({
  "Request Name": {
    type: String,
  },
  "Type of Request": {
    type: String,
  },
  Date: {
    type: String,
  },
  Status: {
    type: String,
  },
  "Seen Status": {
  
    type: Boolean,
    default: false,
  },
  "Sender Name": {
    type: String,
  },
  "Sender Roll no.": {
    type: String,
  },
  "Sender email": {
    type: String,
  },
  "Request sent to": {
    type: String,
  },
  "Year of Tenure": {
    type: String,
  },
  "Request Validator": {
    type: String,
  },
  organisation: {
    type: String,
  },
  "Parent Body": {
    type: String,
  },
  "Document requested": {
    type: String,
  },
  Supporting_Document_url: {
    type: String,
  },
  Request_sent_date: {
    type: String,
  },
  "POR Position": {
    type: String,
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
