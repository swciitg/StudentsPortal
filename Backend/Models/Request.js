import mongoose from "mongoose";

// const validRequest = [
//   "Club POR",
//   "Student Body POR",
//   "Gymkhana POR",
//   "Project validation",
//   "LOR",
//   "Inter IIT participation",
//   "CR/BR POR",
//   null,
// ];

// const validParentBody = [
//   "Technical Board",
//   "Sports Board",
//   "Cultural Board",
//   "Professor",
//   null,
// ];

// const validOrganisation = [
//   "E-Cell",
//   "SWC",
//   "Coding Club",
//   "FEC",
//   "AI Club",
//   "Aquatics Club",
//   "Basketball Club",
//   "Cricket Club",
//   "Table Tennis Club",
//   "Football Club",
//   "Athletics Club",
//   "Squash Club",
//   "Badminton Club",
//   "Weight Lifting Club",
//   "Octaves",
//   "Fine Arts",
//   "Expressions",
//   "Cadence",
//   "Anchoring Club",
//   "Udgam",
//   "Spirit",
//   "Spardha",
//   "Alcheringa",
//   "Manthan",
//   "Kriti",
//   null,
// ];

// const validAuthority = [
//   "Professor",
//   "Board Director",
//   "Director",
//   "Dean",
//   null,
// ];

// const validationrequest = ["Branch Rep", "Class Rep", null];


// const validyear = ["2023-24","2022-23","2021-22", "2020-21", "2019-20", "2018-19", "2017-18", null];

const validStatus = ["Pending", "Approved", "Denied","Withdrawn"];

// Define the Request schema
const requestSchema = new mongoose.Schema({
  // "Request Name": {
  //   type: String,
  // },
  // "Type of Request": {
  //   type: String,
  // },
  // Date: {
  //   type: String,
  // },
  Status: {
    type: String,
  },
  // "Seen Status": {
  
  //   type: Boolean,
  //   default: false,
  // },
  subject:{
    type: String,
    required:true
  },
  body:{
    type: String,
    required:true
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
  // "Year of Tenure": {
  //   type: String,
  // },
  // "Request Validator": {
  //   type: String,
  // },
  // organisation: {
  //   type: String,
  // },
  // "Parent Body": {
  //   type: String,
  // },
  // "Document requested": {
  //   type: String,
  // },
  // Supporting_Document_url: {
  //   type: String,
  // },
  Request_sent_date: {
    type: String,
  },
  // "POR Position": {
  //   type: String,
  // },
  token: String, 
});

export const Request = mongoose.model('Request', requestSchema);


