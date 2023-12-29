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
        token
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
        token
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
async function RequestDetails(req, res) {
  try {
    const {"Sender email": senderEmail}=req.body
    const request = await Request.find({"Sender email": senderEmail});

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    return res.status(200).json({ message: 'Request details fetched successfully', data: request });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function RequestDetailsadmin(req, res) {
  try {
    const {"Request sent to": Requestsentto,Status:Status}=req.body
    const request = await Request.find({"Request sent to": Requestsentto,Status:Status});

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    return res.status(200).json({ message: 'Request details fetched successfully', data: request });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function ApproveRequest(req,res){
  try {
    const {"Request sent to": Requestsentto,_id:id}=req.body
    const request = await Request.findOne({"Request sent to": Requestsentto,_id:id});

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    request.Status="Approved";
    await request.save();
    return res.status(200).json({ message: 'Request Withdrawn successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function DenyRequest(req,res){
  try {
    const {"Request sent to": Requestsentto,_id:id}=req.body
    const request = await Request.findOne({"Request sent to": Requestsentto,_id:id});

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    request.Status="Denied";
    await request.save();
    return res.status(200).json({ message: 'Request Withdrawn successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function WithdrawRequest(req,res){
  try {
    const {"Sender email": senderEmail,_id:id}=req.body
    const request = await Request.findOne({"Sender email": senderEmail,_id:id});

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    request.Status="Withdrawn";
    await request.save();
    return res.status(200).json({ message: 'Request Withdrawn successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {createRequest,RequestDetails,WithdrawRequest,RequestDetailsadmin,DenyRequest,ApproveRequest};
