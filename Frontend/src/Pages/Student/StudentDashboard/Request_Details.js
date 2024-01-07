<<<<<<< HEAD
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Modal from "react-modal";
// import axios from "axios";
// function RequestDetailsModal({ isOpen, requestData }) {
//   RequestDetailsModal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onRequestClose: PropTypes.func.isRequired,
//     requestData: PropTypes.shape({
//       "Request Name": PropTypes.string.isRequired,
//       "Type of Request": PropTypes.string.isRequired,
//       Date: PropTypes.string.isRequired,
//       Status: PropTypes.string.isRequired,
//       "Seen Status": PropTypes.bool.isRequired,
//       "Sender Name": PropTypes.string.isRequired,
//       "Sender Roll no.": PropTypes.string.isRequired,
//       "Request sent to": PropTypes.string.isRequired,
//       "Year of Tenure": PropTypes.string.isRequired,
//       "Request Validator": PropTypes.string.isRequired,
//       organisation: PropTypes.string.isRequired,
//       "Parent Body": PropTypes.string.isRequired,
//       "Document requested": PropTypes.string.isRequired,
//       Supporting_Document_url: PropTypes.string.isRequired,
//       Request_sent_date: PropTypes.string.isRequired,
//       "POR Position": PropTypes.string.isRequired,
//       _id: PropTypes.string.isRequired,
//     }).isRequired,
//   };
//   const [isApproveModalOpen, setApproveModalOpen] = useState(false);
//   const [isDenyModalOpen, setDenyModalOpen] = useState(false);
//   const [isForwardModalOpen, setForwardModalOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [Status, setStatus] = useState(requestData.Status);
//   const [forwardname, setForwardname] = useState("");
//   const [forwardemail, setforwardemail] = useState("");
//   const [message, setmessage] = useState("");
//   if (!isOpen) {
//     return null;
//   }
//   const openApproveModal = () => setApproveModalOpen(true);
//   const closeApproveModal = () => setApproveModalOpen(false);
=======
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import axios from "axios";
function RequestDetailsModal({ isOpen, requestData }) {
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
      "Sender Roll no": PropTypes.string.isRequired,
      "Request sent to": PropTypes.string.isRequired,
      "Year of Tenure": PropTypes.string.isRequired,
      "Request Validator": PropTypes.string.isRequired,
      organisation: PropTypes.string.isRequired,
      "Parent Body": PropTypes.string.isRequired,
      "Document requested": PropTypes.string.isRequired,
      Supporting_Document_url: PropTypes.string.isRequired,
      Request_sent_date: PropTypes.string.isRequired,
      "POR Position": PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  };
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const [isDenyModalOpen, setDenyModalOpen] = useState(false);
  const [isForwardModalOpen, setForwardModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [Status, setStatus] = useState(requestData.Status);
  const [forwardname, setForwardname] = useState("");
  const [forwardemail, setforwardemail] = useState("");
  const [message, setmessage] = useState("");
  if (!isOpen) {
    return null;
  }
  const openApproveModal = () => setApproveModalOpen(true);
  const closeApproveModal = () => setApproveModalOpen(false);
>>>>>>> 6b2f7e311dfdaf105b33e77b5e55d5d46782c6b5

//   const openDenyModal = () => setDenyModalOpen(true);
//   const closeDenyModal = () => setDenyModalOpen(false);

//   const openForwardModal = () => setForwardModalOpen(true);
//   const closeForwardModal = () => setForwardModalOpen(false);

//   const handleApprove = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "http://localhost:3002/api/request/approve-request",
//         {
//           "Request sent to": requestData["Request sent to"],
//           _id: requestData._id,
//         }
//       );
//       if (response.status === 200) {
//         console.log("Approval Successfull!!");
//         setStatus("Approved");
//         closeApproveModal();
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleDeny = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "http://localhost:3002/api/request/deny-request",
//         {
//           "Request sent to": requestData["Request sent to"],
//           _id: requestData._id,
//         }
//       );
//       if (response.status === 200) {
//         console.log("Denied Successfull!!");
//         setStatus("Denied");
//         closeDenyModal();
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
//         <div className=" text-lg font-semibold ">
//           {requestData["Type of Request"]} Request -{" "}
//           {requestData["Request Name"]}
//         </div>
//       </div>
//       <div className="flex w-full mt-1 gap-1">
//         <div className=" w-[100%] flex p-6 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
//           <div className="w-[50%] flex flex-col gap-6">
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Status</label>
//               <div>{requestData.Status}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Sender name</label>
//               <div>{requestData["Sender Name"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">POR Position</label>
//               <div>{requestData["POR Position"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Year of Tenure</label>
//               <div>{requestData["Year of Tenure"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">
//                 Name of organisation
//               </label>
//               <div>{requestData.organisation}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Parent Body</label>
//               <div>{requestData["Parent Body"]}</div>
//             </div>
//             <div className=" flex gap-4 lg:mt-0 mt-16">
//               <Modal
//                 isOpen={isApproveModalOpen}
//                 onRequestClose={closeApproveModal}
//                 className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
//                 overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
//               >
//                 <div className="bg-white p-4 rounded-md opacity-100">
//                   <h2 className="text-xl font-bold mb-4">Request Approval</h2>
//                   <div className="flex flex-col gap-3">
//                     <div>
//                       <label className="text-sm">
//                         Upload document requested
//                       </label>
//                       <input
//                         onChange={(e) => {
//                           setSelectedFile(e.target.value);
//                         }}
//                         className="border w-full p-1 py-[4px] text-black outline-none rounded-md border-gray-400 "
//                         type="file"
//                         accept=".pdf"
//                         placeholder="Select a file"
//                       />
//                     </div>
//                     <div className="mb-5">
//                       <label className="text-sm">
//                         Any personalized message you would like to send
//                       </label>
//                       <input
//                         onChange={(e) => setmessage(e.target.value)}
//                         className="border pl-3 w-full pb-32 text-black outline-none rounded-md border-gray-400"
//                         placeholder="Write a message"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div
//                       onClick={closeApproveModal}
//                       className="text-[#2164E8] cursor-pointer"
//                     >
//                       Go Back
//                     </div>
//                     {selectedFile.length > 0 ? (
//                       <button
//                         onClick={handleApprove}
//                         disabled={loading}
//                         className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
//                       >
//                         {loading ? "Approving..." : "Send Approval"}
//                       </button>
//                     ) : (
//                       <button className="inline-flex items-center p-1 bg-gray-300 text-gray-600 rounded-sm px-4">
//                         Send Approval
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </Modal>
//               {Status === "Pending" && (
//                 <button
//                   onClick={openApproveModal}
//                   className="text-sm p-[5px] px-4 bg-[#2164E8] text-white rounded"
//                 >
//                   Approve
//                 </button>
//               )}
//               {Status === "Pending" && (
//                 <button
//                   onClick={openDenyModal}
//                   className="text-sm  p-[5px] px-4 border border-[#767A81] rounded"
//                 >
//                   Deny
//                 </button>
//               )}
//               {Status === "Pending" && (
//                 <button
//                   onClick={openForwardModal}
//                   className="text-sm  p-[5px]  px-4 border border-[#767A81] rounded"
//                 >
//                   Forward
//                 </button>
//               )}
//               <Modal
//                 isOpen={isDenyModalOpen}
//                 onRequestClose={closeDenyModal}
//                 className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
//                 overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
//               >
//                 <div className="bg-white p-4 rounded-md opacity-100">
//                   <h2 className="text-xl font-bold mb-4">Request Denial</h2>
//                   <div className="flex flex-col gap-3">
//                     <div className="mb-5">
//                       <label className="text-sm">
//                         Reason for denying the request
//                       </label>
//                       <input
//                         onChange={(e) => setmessage(e.target.value)}
//                         className="border pl-3 w-full pb-32 text-black outline-none rounded-md border-gray-400"
//                         placeholder="Write a message"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div
//                       onClick={closeDenyModal}
//                       className="text-[#2164E8] cursor-pointer"
//                     >
//                       Go Back
//                     </div>
//                     {message.length > 0 ? (
//                       <button
//                         onClick={handleDeny}
//                         disabled={loading}
//                         className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
//                       >
//                         {loading ? "Denying..." : "Deny Request"}
//                       </button>
//                     ) : (
//                       <button className="inline-flex items-center p-1 bg-gray-300 text-gray-600 rounded-sm px-4">
//                         Deny Request
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </Modal>

//               <Modal
//                 isOpen={isForwardModalOpen}
//                 onRequestClose={closeForwardModal}
//                 className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
//                 overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
//               >
//                 <div className="bg-white p-4 rounded-md opacity-100">
//                   <h2 className="text-xl font-bold mb-4">Forward request</h2>
//                   <div className="flex flex-col gap-3">
//                     <div className="">
//                       <label className="text-sm">Name of the person</label>
//                       <input
//                         onChange={(e) => setForwardname(e.target.value)}
//                         className="border pl-3 py-1 w-full text-black outline-none rounded-md border-gray-400"
//                         placeholder="Name"
//                       />
//                     </div>
//                     <div className="">
//                       <label className="text-sm">Mail Id of the person</label>
//                       <input
//                         onChange={(e) => setforwardemail(e.target.value)}
//                         className="border pl-3 w-full py-1 text-black outline-none rounded-md border-gray-400"
//                         placeholder="Mail Id"
//                       />
//                     </div>
//                     <div className="">
//                       <label className="text-sm">
//                         Any message for the person?
//                       </label>
//                       <input
//                         onChange={(e) => setmessage(e.target.value)}
//                         className="border pl-3 w-full pb-10 text-black outline-none rounded-md border-gray-400"
//                         placeholder="Write a message"
//                       />
//                     </div>
//                     <div className="mb-5">
//                       <label className="text-sm">Note-</label>
//                       <ul className=" text-xs text-[#494D57] flex flex-col gap-1">
//                         <li className=" list-disc">
//                           This Person does not get access to Approve or Deny the
//                           request.
//                         </li>
//                         <li className=" list-disc">
//                           Forward feature is introduced so that you can receive
//                           a confirmation from this person to help you in making
//                           an informed decision.
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div
//                       onClick={closeForwardModal}
//                       className="text-[#2164E8] cursor-pointer"
//                     >
//                       Go Back
//                     </div>
//                     {forwardname.length > 0 && forwardemail.length > 0 ? (
//                       <button
//                         onClick={closeForwardModal}
//                         className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
//                       >
//                         Forward Request
//                       </button>
//                     ) : (
//                       <button className="inline-flex items-center p-1 bg-gray-300 text-gray-600 rounded-sm px-4">
//                         Forward Request
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </Modal>
//             </div>{" "}
//           </div>

<<<<<<< HEAD
//           <div className=" w-[50%] flex flex-col gap-6">
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Request type</label>
//               <div>{requestData["Type of Request"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Sender Roll no.</label>
//               <div>{requestData["Sender Roll no."]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">Sender Mail Id</label>
//               <div>{requestData["Request sent to"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">
//                 Request Validation required from
//               </label>
//               <div>{requestData["Request Validator"]}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">
//                 Document supporting claim
//               </label>
//               <div>{"n/a"}</div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-[#353B47] text-sm">
//                 Document requested by sender
//               </label>
//               <div>{requestData["Document requested"]}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
=======
          <div className=" w-[50%] flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Request type</label>
              <div>{requestData["Type of Request"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Roll no</label>
              <div>{requestData["Sender Roll no"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Mail Id</label>
              <div>{requestData["Request sent to"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">
                Request Validation required from
              </label>
              <div>{requestData["Request Validator"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">
                Document supporting claim
              </label>
              <div>{"n/a"}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">
                Document requested by sender
              </label>
              <div>{requestData["Document requested"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 6b2f7e311dfdaf105b33e77b5e55d5d46782c6b5

// export default RequestDetailsModal;
