const Request = require("../Models/Request");

async function createRequest(req, res) {
  try {
    const {
        "Request Name": RequestName,
        "Type of Request":TypeofRequest,
        Status: Status,
        "Seen Status": SeenStatus,
          "Sender Name": senderName,
          "Sender Roll no.": senderRollNo,
          "Sender email": senderEmail,
        "Request sent to":RequestsentTo,
        "Year of Tenure":YearofTenure ,
        "Request Validator": Validator,
        organisation: organisation,
        "Parent Body": ParentBody,
        "Document requested": Documentrequested,
        Supporting_Document_url:Supporting_Document_url,
        Request_sent_date: Request_sent_date,
        "POR Position": PORPosition,
    } = req.body;

    const newRequest = new Request({
        "Request Name": RequestName,
        "Type of Request":TypeofRequest,
        Status: Status,
        "Seen Status": SeenStatus,
          "Sender Name": senderName,
          "Sender Roll no.": senderRollNo,
          "Sender email": senderEmail,
        "Request sent to":RequestsentTo,
        "Year of Tenure":YearofTenure ,
        "Request Validator":Validator,
        organisation: organisation,
        "Parent Body": ParentBody,
        "Document requested": Documentrequested,
        Supporting_Document_url:Supporting_Document_url,
        Request_sent_date: Request_sent_date,
        "POR Position": PORPosition,
    });
  

    await newRequest.save();

    return res
      .status(201)
      .json({ message: "Request created successfully", data: newRequest });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function UpdateRequest(req, res) {
    try {
      const {
          "Request Name": RequestName,
          "Type of Request":TypeofRequest,
          Status: Status,
          "Seen Status": SeenStatus,
            "Sender Name": senderName,
            "Sender Roll no.": senderRollNo,
            "Sender email": senderEmail,
          "Request sent to":RequestsentTo,
          "Year of Tenure":YearofTenure ,
          "Request Validator": RandomValidator,
          organisation: organisation,
          "Parent Body": ParentBody,
          "Document requested": Documentrequested,
          Supporting_Document_url:Supporting_Document_url,
          Request_sent_date: Request_sent_date,
          "POR Position": PORPosition,
      } = req.body;
  
      const request=await Request.findOne({"Sender email": senderEmail,})
      await request.save();
  
      return res
        .status(201)
        .json({ message: "Request udated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

module.exports = createRequest;
