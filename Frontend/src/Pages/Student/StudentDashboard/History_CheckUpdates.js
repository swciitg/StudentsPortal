import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function RequestDetailsModal({ isOpen, requestData, encryptedEmail}) {
  if (!isOpen) {    
    return null;
  }
  
  RequestDetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    requestData: PropTypes.shape({
      "Request Name": PropTypes.string.isRequired,
      "Type of Request": PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
      "Seen Status": PropTypes.bool.isRequired,
      "Sender Name": PropTypes.string.isRequired,
      "Sender Roll no.": PropTypes.string.isRequired,
      "Request sent to": PropTypes.string.isRequired,
      "Year of Tenure": PropTypes.string.isRequired,
      "Request Validator": PropTypes.string.isRequired,
      organisation: PropTypes.string.isRequired,
      "Parent Body": PropTypes.string.isRequired,
      "Document requested": PropTypes.string.isRequired,
      Supporting_Document_url: PropTypes.string.isRequired,
      Request_sent_date: PropTypes.string.isRequired,
      "POR Position":PropTypes.string.isRequired,
    }).isRequired,
    encryptedEmail: PropTypes.string.isRequired,

  };
  
  return (
    <div>
         <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg font-semibold ">{requestData['Type of Request']} Request - {requestData["Request Name"]}</div>
        </div>
        <div className="flex w-full mt-1 gap-1">
            <div className=" w-[100%] flex p-6 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                <div className="w-[50%] flex flex-col gap-6">
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Status
                      </label>
                      <div>{requestData.Status}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Sender name
                      </label>
                      <div>{requestData["Sender Name"]}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      POR Position
                      </label>
                      <div>{requestData['POR Position']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Year of Tenure
                      </label>
                      <div>{requestData['Year of Tenure']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Name of organisation
                      </label>
                      <div>{requestData.organisation}</div>
                    </div>
                  
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Parent Body
                      </label>
                      <div>{requestData['Parent Body']}</div>
                    </div>
               <div className=" flex gap-6">
                <Link to={`/StudentDashboard/Profile?e=${encodeURIComponent(encryptedEmail)}`}>
                <button className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8] text-white rounded">
                  View Profile
                </button>
              </Link>
              <Link to={`/StudentDashboard/History?e=${encodeURIComponent(encryptedEmail)}`}>
              <button className="text-sm  p-[5px] pl-3 pr-3 border border-[#767A81] rounded">
                Go Back
              </button></Link>
                </div> </div>
                
                <div className=" w-[50%] flex flex-col gap-6">
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Request type
                      </label>
                      <div>{requestData['Type of Request']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Sender Roll no. 
                      </label>
                      <div>{requestData['Sender Roll no.']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Sender Mail Id
                      </label>
                      <div>{requestData['Request sent to']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Request Validation required from
                      </label>
                      <div>{requestData['Request Validator']}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Document supporting claim
                      </label>
                      <div>{'n/a'}</div>
                    </div>
                <div className="flex flex-col">
                      <label className="text-[#353B47] text-sm">
                      Document requested by sender
                      </label>
                      <div>{requestData['Document requested']}</div>
                    </div>
                </div>
              

            
        </div>
          {/* <div className=" w-[20%] p-2 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                        <div>
                            
                        </div>
            </div> */}
                 </div> 
             
    </div>
  );
}

export default RequestDetailsModal;

