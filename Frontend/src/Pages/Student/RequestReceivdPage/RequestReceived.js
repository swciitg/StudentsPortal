import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CornerProfileLogoutSectionadmin from "../../../Components/CornerProfileLogoutSection";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import RequestDetailsModal from "./Modals/RequestReceived_CheckUpdates";
import axios from "axios";
import Student_Navbar from "../../../Components/Student_Navbar";

function RequestReceived({ SERVER_URL }) {
  RequestReceived.propTypes = {
    SERVER_URL: PropTypes.string.isRequired,
  };
  // const navigate = useNavigate();
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  // const [selectedTab, setSelectedTab] = useState("POR");
  const [History, setHistory] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 500;
  const ENCRYPTION_KEY =process.env.REACT_APP_ENCRYPTION_KEY;

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function checkEmail() {
      try {
        const response = await axios.post(
          `${SERVER_URL}/studentsportal/api/users/user-details`,
          {
            email: decryptEmail(encryptedEmail),
            token: localStorage.getItem("token"),
          }
        );
        if (response.status === 200) {
          console.log("OK");
        }
      } catch (error) {
        // navigate(`/`);
        console.log(error);
      }
    }
    checkEmail();
  }, []);

  useEffect(() => {
    async function Requests() {
      try {
        const response = await axios.post(
          `${SERVER_URL}/studentsportal/api/request/request-details-admin`,
          {
            "Request sent to": decryptEmail(encryptedEmail) + "@iitg.ac.in",
            "token": localStorage.getItem("token")
          }
        );
        if (response.status === 200) {
          setHistory(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Requests();
  }, [encryptedEmail, isModalOpen]);

  const updateTotalPages = () => {
    if (History !== null) {

      const totalItems = History.length;
      const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(calculatedTotalPages);
    }
  };
  const handleCheckUpdates = (requestData) => {
    setSelectedRequest(requestData);
    setIsModalOpen(true);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  //   setCurrentPage(1);
  // };
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const tabParam = urlParams.get("tab");
    // const defaultTab = "POR";
    // const initialTab = tabParam || defaultTab;

    // setSelectedTab(initialTab);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    updateTotalPages();
    // eslint-disable-next-line
  }, [History]);
  const RenderHistory = ({ onCheckUpdates }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const reversedHistory = History.reverse();
    const filteredAndSearchedHistory = reversedHistory.filter((data) =>
      data["Sender Name"].toLowerCase().includes(search.toLowerCase())
    );
    if (History !== null || !Array.isArray(History))
      return filteredAndSearchedHistory.slice(startIndex, endIndex).map((data, index) => {
        const sequenceNumber = index + 1 + (currentPage - 1) * itemsPerPage;
        let statusStyle;

        if (data.Status === "Pending") {
          statusStyle = "text-[#494D57]";
        } else if (data.Status === "Denied") {
          statusStyle = "text-[#D83B01]";
        } else if (data.Status === "Approved") {
          statusStyle = "text-[#107C10]";
        }

        return (
          <div
            key={index}
            className={`flex bg-white items-center  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]`}
          >
            <div className="text-xs text-[#494D57] w-[10%] text-center py-5">
              {sequenceNumber}
            </div>

            <div className="text-xs text-[#494D57] w-[25%] text-center py-5">
              {data["Sender Name"]}
            </div>
            <div className="text-xs text-[#494D57] w-[25%] text-center py-5">
              {data.Request_sent_date}
            </div>
            <div className={`text-xs text-center w-[20%] py-5 ${statusStyle}`}>
              {data.Status}
            </div>

            <div
              onClick={() => onCheckUpdates(data)}
              className="text-[#2164E8] flex cursor-pointer items-center text-sm gap-1"
            >
              <div>Details</div>
              <img src="/students_portal/Arrow-right.svg" />
            </div>
          </div>
        );
      });
  };
  console.log(search);
  return (
    <div className="relative h-screen w-[100%]">
      {/*Side Navbar */}

      {/* <Admin_Navbar encryptedEmail={encryptedEmail} /> */}
      <Student_Navbar encryptedEmail={encryptedEmail}  SERVER_URL={SERVER_URL} />

      <div className="lg:absolute h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        <CornerProfileLogoutSectionadmin encryptedEmail={encryptedEmail}  SERVER_URL={SERVER_URL} />
        {selectedRequest && isModalOpen  ? (
          <RequestDetailsModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            requestData={selectedRequest}
            SERVER_URL={SERVER_URL} 
          />
        ) : (
          <>
            <div className="flex flex-col py-2 pt-4 px-4  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="font-semibold text-xl">Request Received</div>
                {/* <h2 className="text-[#2164E8] text-xs">
                  {History.filter((item) => !item["Seen Status"]).length}
                  Updates
                </h2> */}
              </div>
            </div>

            <div className="bg-white">
              {/* <nav className="flex border-b-3 relative -z-1 ">
                <div
                  onClick={() => handleTabClick("POR")}
                  className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                    selectedTab === "POR"
                      ? "border-b-[#2164E8] relative "
                      : "border-b-[#E9E9EB] text-[#494D57]"
                  }`}
                >
                  POR
                </div> */}
              {/* <div
                  onClick={() => handleTabClick("Project Validation")}
                  className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                    selectedTab === "Project Validation"
                      ? "border-b-[#2164E8] relative "
                      : "border-b-[#E9E9EB] text-[#494D57]"
                  }`}
                >
                  Project Validation
                </div> */}
              {/* <div
                  onClick={() => handleTabClick("LOR")}
                  className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                    selectedTab === "LOR"
                      ? "border-b-[#2164E8] relative "
                      : "border-b-[#E9E9EB] text-[#494D57]"
                  }`}
                >
                  LOR
                </div> */}
              {/* <div
                  onClick={() => handleTabClick("Inter IIT Participation")}
                  className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                    selectedTab === "Inter IIT Participation"
                      ? "border-b-[#2164E8] relative "
                      : "border-b-[#E9E9EB] text-[#494D57]"
                  }`}
                >
                  Inter IIT Participation
                </div> */}
              {/* <div
                  onClick={() => handleTabClick("CR/BR POR")}
                  className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                    selectedTab === "CR/BR POR"
                      ? "border-b-[#2164E8] relative "
                      : "border-b-[#E9E9EB] text-[#494D57]"
                  }`}
                >
                  CR/BR POR
                </div> */}
              {/* </nav> */}
              <hr className=" absolute border-[2px] text-[#E9E9EB] -translate-y-[3px] w-full  lg:w-full -z-10 " />
            </div>
            <div className=" lg:flex w-full lg:flex-row flex flex-col  lg:items-center pr-4 lg:justify-between bg-white  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
              <div className="flex lg:w-[60%] w-full ">

                <div className=" relative flex items-center lg:w-[75%] w-full ">
                  <img className="translate-x-[26px]" src="/students_portal/search.svg" />
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="my-3 px-3 pl-8 py-[6px] w-full  border-[1px] rounded outline-none placeholder-[#113274] border-[#626670] "
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-4 flex-col lg:flex lg:flex-row ">
                <div className=" text-sm font-semibold text-[#1E2532] ">
                  Requests Approved by you :{" "}
                  {History == null || !Array.isArray(History)
                    ? ""
                    : History.filter((req) => req.Status === "Approved").length}
                </div>
                <div className=" text-xs font-semibold text-[#666b78]">
                  Total Requests received :
                  {History == null || !Array.isArray(History)
                    ? ""
                    : History.length}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-[3px] lg:w-full w-[720px] ">
              <div className="flex mt-4 bg-[#E8E9EA] items-center  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                <div className=" text-sm  w-[10%] text-center  py-3">
                  Sl. No.
                </div>
                <div className=" text-sm w-[25%] text-center   py-3">
                  Request Sender
                </div>
                <div className=" text-sm  w-[25%] justify-center  gap-[3px]   flex items-center py-3">
                  Date
                  <img src="/students_portal/Arrow Sort.svg" />
                </div>
                <div className=" text-sm w-[20%]  text-center  py-3">
                  Status
                </div>
              </div>

              <>
                {" "}
                {History == null || !Array.isArray(History) ? (
                  <div className="flex justify-center py-5 text-xl font-extrabold text-[#7a7e87]">
                    Nothing to Show!
                  </div>
                ) : (
                  <RenderHistory onCheckUpdates={handleCheckUpdates} SERVER_URL={SERVER_URL}  />
                )}
                <div className="flex justify-center items-center mt-4 mb-10">
                  <div
                    className={` px-4  select-none py-3 cursor-pointer flex items-center  bg-white  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] text-xs ${
                      currentPage === 1 ? "text-[#8D9096]" : "text-[#1E2532]"
                    }`}
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                  >
                    {currentPage > 1 ? (
                      <img src="/students_portal/b-arrow-left.svg" />
                    ) : (
                      <img src="/students_portal/grey-arrow-left.svg" />
                    )}
                    Previous
                  </div>
                  {[...Array(Math.ceil(totalPages)).keys()].map((page) => (
                    <div
                      key={page + 1}
                      onClick={() => handlePageChange(page + 1)}
                      className={`cursor-pointer select-none px-4 py-2  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ${
                        currentPage === page + 1
                          ? "bg-[#2164E8] text-white"
                          : "bg-white text-[#2164E8]"
                      }`}
                    >
                      {page + 1}
                    </div>
                  ))}
                  <div
                    className={` flex select-none items-center cursor-pointer  px-4 py-3  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] bg-white text-xs ${
                      currentPage === totalPages
                        ? "text-[#8D9096]"
                        : "text-[#1E2532]"
                    }`}
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    Next
                    {currentPage < totalPages ? (
                      <img src="/students_portal/b-arrow-right.svg" />
                    ) : (
                      <img src="/students_portal/grey-arrow-right.svg" />
                    )}
                  </div>
                </div>
              </>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RequestReceived;
