import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import axios from "axios";
function RequestDetailsModal({ isOpen, requestData, onRequestClose }) {
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
      "Sender email": PropTypes.string.isRequired,
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
    encryptedEmail: PropTypes.string.isRequired,
  };

  const [loading, setLoading] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [Status, setStatus] = useState(requestData.Status);
  if (!isOpen) {
    return null;
  }

  const openWithdrawModal = () => setWithdrawModalOpen(true);
  const closeWithdrawModal = () => setWithdrawModalOpen(false);

  const reasonOptions = [
    "Mind has changed",
    "Created request to the wrong person",
    "Request is no longer necessary",
  ];
  const handleWithdraw = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3002/api/request/withdraw-request",
        {
          "Sender email": requestData["Sender email"],
          _id: requestData._id,
        }
      );
      if (response.status === 200) {
        console.log("Withdrawn Successfull!!");
        setStatus("Withdrawn");
        closeWithdrawModal();
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
        <div className=" text-lg font-semibold ">
          {requestData["Type of Request"]} Request -{" "}
          {requestData["Request Name"]}
        </div>
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
            {requestData["Type of Request"] === "LOR" && (
              <div className="flex flex-col">
                <label className="text-[#353B47] text-sm">POR Position</label>
                <div>{requestData["POR Position"]}</div>
              </div>
            )}
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Year of Tenure</label>
              <div>{requestData["Year of Tenure"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">
                Name of organisation
              </label>
              <div>{requestData.organisation}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Parent Body</label>
              <div>{requestData["Parent Body"]}</div>
            </div>
            <div className=" flex gap-6">
              <div>
                <Modal
                  isOpen={isWithdrawModalOpen}
                  onRequestClose={closeWithdrawModal}
                  className="absolute top-1/2 lg:left-[60%] left-[10%] right-[10%] lg:transform lg:-translate-x-1/2 -translate-y-1/2 bg-white p-4"
                  overlayClassName="fixed inset-0 flex items-center justify-center bg-[#E8E9EA] inset-y-12"
                >
                  <div className="bg-white p-4 rounded-md opacity-100">
                    <h2 className="text-xl font-bold mb-4">Request Denial</h2>
                    <div className="flex flex-col gap-3">
                      <div className="mb-5">
                        <label className="text-sm">
                          Reason for Withdrawing the request
                        </label>
                        <select
                          className="border px-2 w-full py-2 text-black outline-none rounded-md border-gray-400"
                          onChange={(e) => {
                            setReason(e.target.value);
                          }}
                        >
                          <option hidden>Select Category</option>
                          {reasonOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div
                        onClick={closeWithdrawModal}
                        className="text-[#2164E8] cursor-pointer"
                      >
                        Go Back
                      </div>
                      {reason.length > 0 ? (
                        <button
                          onClick={handleWithdraw}
                          disabled={loading}
                          className="inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
                        >
                          {loading ? "Withdrawing..." : "Withdraw Request"}
                        </button>
                      ) : (
                        <button className="inline-flex items-center p-1 bg-gray-300 text-gray-600 rounded-sm px-4">
                          Withdraw Request
                        </button>
                      )}
                    </div>
                  </div>
                </Modal>
                {Status === "Pending" && (
                  <button
                    onClick={openWithdrawModal}
                    className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8] text-white rounded"
                  >
                    Withdraw
                  </button>
                )}
              </div>
              <div>
                <button
                  onClick={onRequestClose}
                  className="text-sm  p-[5px] pl-3 pr-3 border border-[#767A81] rounded"
                >
                  Go Back
                </button>
              </div>
            </div>{" "}
          </div>

          <div className=" w-[50%] flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Request type</label>
              <div>{requestData["Type of Request"]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Roll no.</label>
              <div>{requestData["Sender Roll no."]}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-[#353B47] text-sm">Sender Mail Id</label>
              <div>{requestData["Sender email"]}</div>
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
        {/* <div className=" w-[20%] p-2 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                        <div>
                            
                        </div>
            </div> */}
      </div>
    </div>
  );
}

export default RequestDetailsModal;
