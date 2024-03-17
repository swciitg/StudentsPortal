import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import axios from "axios";
function RequestDetailsModal({ isOpen,onRequestClose, requestData, SERVER_URL }) {
  RequestDetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    SERVER_URL: PropTypes.string.isRequired,
    requestData: PropTypes.shape({
      Date: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      "Sender Name": PropTypes.string.isRequired,
      "Sender Roll no": PropTypes.string.isRequired,
      "Sender email": PropTypes.string.isRequired,
      "Request sent to": PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  };
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const [isDenyModalOpen, setDenyModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Status, setStatus] = useState(requestData.Status);
  if (!isOpen) {
    return null;
  }
  const openApproveModal = () => setApproveModalOpen(true);
  const closeApproveModal = () => setApproveModalOpen(false);

  const openDenyModal = () => setDenyModalOpen(true);
  const closeDenyModal = () => setDenyModalOpen(false);

  const handleApprove = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${SERVER_URL}/request/approve-request`,
        {
          "Request sent to": requestData["Request sent to"],
          _id: requestData._id,
          token: localStorage.getItem("token"),
        }
      );
      if (response.status === 200) {
        // console.log("Approval Successfull!!");
        setStatus("Approved");
        closeApproveModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeny = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
       `${SERVER_URL}/request/deny-request`,
        {
          "Request sent to": requestData["Request sent to"],
          _id: requestData._id,
          token: localStorage.getItem("token"),

        }
      );
      if (response.status === 200) {
        // console.log("Denied Successfull!!");
        setStatus("Denied");
        closeDenyModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
        <div className=" text-lg font-semibold ">{requestData["Sender Name"]}{"'s request recieved"}</div>
      </div>
      <div className="flex w-full mt-1 gap-1">
        <div className=" w-[100%] flex p-6 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className="w-[50%] flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Status</label>
              <div>{requestData.Status}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender name</label>
              <div>{requestData["Sender Name"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Subject</label>
              <div>{requestData["subject"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Body</label>
              <div>{requestData["body"]}</div>
            </div>
            <div className=" flex gap-4 lg:mt-0 mt-16">
              <Modal
                isOpen={isApproveModalOpen}
                onRequestClose={closeApproveModal}
                className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
                overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
              >
                <div className="bg-white p-4 rounded-md opacity-100">
                  <h2 className="text-xl font-bold mb-16">Confirm The Request Approval</h2>
              
                  <div className="flex items-center justify-between">
                    <div
                      onClick={closeApproveModal}
                      className="text-[#2164E8] cursor-pointer"
                    >
                      Go Back
                    </div>

                      <button
                        onClick={handleApprove}
                        disabled={loading}
                        className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
                      >
                        {loading ? "Approving..." : "Send Approval"}
                      </button>
                  </div>
                </div>
              </Modal>
              {Status === "Pending" && (
                <button
                  onClick={openApproveModal}
                  className="text-sm p-[5px] px-4 bg-[#2164E8] text-white rounded"
                >
                  Approve
                </button>
              )}
              {Status === "Pending" && (
                <button
                  onClick={openDenyModal}
                  className="text-sm  p-[5px] px-4 border border-[#767A81] rounded"
                >
                  Deny
                </button>
              )}
                <div>
                <button
                  onClick={onRequestClose}
                  className="text-sm  p-[5px] pl-3 pr-3 border border-[#767A81] rounded"
                >
                  Go Back
                </button>
              </div>

              <Modal
                isOpen={isDenyModalOpen}
                onRequestClose={closeDenyModal}
                className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
                overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
              >
                <div className="bg-white p-4 rounded-md opacity-100">
                  <h2 className="text-xl font-bold mb-16">Confirm The Request Denial</h2>
                  
                  <div className="flex items-center justify-between">
                    <div
                      onClick={closeDenyModal}
                      className="text-[#2164E8] cursor-pointer"
                    >
                      Go Back
                    </div>
                    
                      <button
                        onClick={handleDeny}
                        disabled={loading}
                        className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
                      >
                        {loading ? "Denying..." : "Deny Request"}
                      </button>
                    
                  </div>
                </div>
              </Modal>
            </div>
          </div>

          <div className=" w-[50%] flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Roll no</label>
              <div>{requestData["Sender Roll no"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Mail Id</label>
              <div>{requestData["Sender email"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">
                Request sent to
              </label>
              <div>{requestData["Request sent to"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDetailsModal;
