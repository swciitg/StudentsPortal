import mongoose from "mongoose";

const validRequest = [
    "Club POR",
    "Student Body POR",
    "Gymkhana POR",
    "Project validation POR",
    "LOR",
    "Inter IIT participation Proof",
    "Class/Branch representative",
    null
];

const validParentBody = [
    "Technical Board",
    "Sports Board",
    "Cultural Board",
    "Professor",
    null
];

const validOrganisation = [
    "E-Cell",
    "SWC",
    "Coding Club",
    "FEC",
    "AI Club",
    "Aquatics Club",
    "Basketball Club",
    "Cricket Club",
    "Table Tennis Club",
    "Football Club",
    "Athletics Club",
    "Squash Club",
    "Badminton Club",
    "Weight Lifting Club",
    "Octaves",
    "Fine Arts",
    "Expressions",
    "Cadence",
    "Anchoring Club",
    "Udgam",
    "Spirit",
    "Spardha",
    "Alcheringa",
    "Manthan",
    "Kriti",
    null
];

const validAuthority = [
    "Professor",
    "Board Director",
    "Director",
    "Dean",
    null
];

const validationrequest = [
    "Branch Rep",
    "Class Rep",
    null
]

const validator = [
    "General Secretary",
    "Vice President",
    null
]

const validyear = [
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    null
]

const validStatus = [
    "Pending",
    "Approved",
    "Denied"
]

export const requestSchemma = new mongoose.Schema({
    "Request Name":{
        type:String
    },
    "Type of Request":{
        type:String,
        enum:validRequest,
        default:null 
    },
    "Parent Body":{
        type:String,
        enum:validParentBody,
        default:null
    },
    organisation:{
        type:String,
        enum:validOrganisation,
        default:null
    },
    position:{
        type:String,
        default:null
    },
    project:{
        type:String,
        default:null
    },
    projectRole:{
        type:String,
        default:null
    },
    authority:{
        type:String,
        enum:validAuthority,
        default:null
    },
    interIITEvent:{
        type:String,
        default:null
    },
    department:{
        type:String,
        default:null
    },
    validationrequestType:{
        type:String,
        enum:validationrequest,
        default:null
    },
    "Year of Tenure":{
        type:String,
        enum:validyear,
        default:null
    },
    "Request Validator":{
        type:String,
        enum:validator,
        default:null
    },
    mentor:{
        type:String,
        default:null
    },
    validatorMail:{
        type:String,
        default:null
    },
    validatorOfficialMail:{
        type:String,
        default:null
    },
    "Document Requested":{
        type:String,
        default:null
    },
    Supporting_Document:{
      type:String,
      default:null
    },
    Supporting_Document_url:{
        type:String,
        default:null
    },
    "Sender Name":{
        type:String,
        required:true
    },
    Status:{
        type:String,
        enum:validStatus,
        default:"Pending"
    },
    "Seen Status":{
        type:Boolean,
        default:false
    },
    Date:{
        type:String
    },
    "Sender Roll no.":{
        type:String
    },
    "Sender email":{
        type:String
    },
    Request_sent_date:{
        type:String
    },
    "POR Position":{
        type:String
    },

}) 

export const Request = mongoose.model("Request",requestSchemma);