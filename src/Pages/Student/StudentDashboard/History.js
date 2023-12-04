import React, { useEffect, useState } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";

function History() {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;
  const History = [
    {
      "Sl.no": 1,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": false,
    },
    {
      "Sl.no": 2,
      "Request Name": "Website design",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 3,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status":true,
    },
    {
      "Sl.no": 4,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 5,
      "Request Name": "Website design",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 6,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Denied",
      "Seen Status": true,
    },
    {
      "Sl.no": 7,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 8,
      "Request Name": "Website design",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Approved",
      "Seen Status": false,
    },
    {
      "Sl.no": 9,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Denied",
      "Seen Status":true,
    },
    {
      "Sl.no": 10,
      "Request Name": "E-Cell design head",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 11,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": false,
    },
    {
      "Sl.no": 12,
      "Request Name": "E-Cell design head",
      "Type of Request": "Project validation",
      Date: "12/02/2023",
      Status: "Approved",
      "Seen Status": true,
    },
    {
      "Sl.no": 13,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 14,
      "Request Name": "E-Cell design head",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 15,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Approved",
      "Seen Status": true,
    },
    {
      "Sl.no": 16,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "Project validation",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": true,
    },
    {
      "Sl.no": 17,
      "Request Name": "E-Cell design head",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Approved",
      "Seen Status": true,
    },
    {
      "Sl.no": 18,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "Project validation",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status":true,
    },
    {
      "Sl.no": 19,
      "Request Name": "E-Cell design head",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status":true,
    },
    {
      "Sl.no": 20,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "Project validation",
      Date: "12/02/2023",
      Status: "Denied",
      "Seen Status": true,
    },
    {
      "Sl.no": 21,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status":true,
    },
    {
      "Sl.no": 22,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Denied",
      "Seen Status": true,
    },
    {
      "Sl.no": 23,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "Project validation",
      Date: "12/02/2023",
      Status: "Denied",
      "Seen Status": true,
    },
    {
      "Sl.no": 24,
      "Request Name": "LOR for Vedprakash",
      "Type of Request": "LOR",
      Date: "12/02/2023",
      Status: "Pending",
      "Seen Status": false,
    },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1)
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const updateTotalPages = () => {
    const filteredHistory = History.filter((data) => data.Status === selectedTab);
    const totalItems = filteredHistory.length;
    const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(calculatedTotalPages);
  };

  useEffect(() => {
    updateTotalPages();
    // eslint-disable-next-line
  }, [selectedTab, History]);
  const RenderHistory = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredHistory = History.filter((data) => data.Status === selectedTab);

    const filteredAndSearchedHistory = filteredHistory.filter((data) =>
      data["Request Name"].toLowerCase().includes(search.toLowerCase())
    );
  
    return filteredAndSearchedHistory
      .slice(startIndex, endIndex)
      .map((data, index) => {
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
          {data["Request Name"]}
        </div>
        <div className="text-xs text-[#494D57] w-[20%] text-center py-5">
          {data["Type of Request"]}
        </div>
        <div className="text-xs text-[#494D57] w-[15%] text-center py-5">
          {data.Date}
        </div>
        <div className={`text-xs text-center w-[15%] py-5 ${statusStyle}`}>
          {data.Status}
        </div>
        <div className="text-[#2164E8] flex items-center text-sm gap-1">
          <div>Check Updates</div>
          <img src="/Arrow-right.svg" />
        </div>
      </div>
    );
  });
  };
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />
        <div className="flex flex-col py-2 pt-4 px-4 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className="flex  items-center  gap-3 mb-3">
            <div className="   font-semibold text-xl">Request History</div>
            <h2 className="text-[#2164E8] text-xs">{History.filter(item => !item["Seen Status"]).length} Updates</h2>
          </div>
        </div>
        <div  className="bg-white relative ">
          <nav className="flex border-b-3 relative z-10">
            <div
              onClick={() => handleTabClick("Pending")}
              className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform  border-b-[3px] ${
                selectedTab === "Pending"
                  ? "border-b-[#2164E8] relative "
                  : "border-b-[#E9E9EB] text-[#494D57]"
              }`}
            >
              Pending
            </div>
            <div
              onClick={() => handleTabClick("Approved")}
              className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                selectedTab === "Approved"
                  ? "border-b-[#2164E8] relative "
                  : "border-b-[#E9E9EB] text-[#494D57]"
              }`}
            >
              Approved
            </div>
            <div
              onClick={() => handleTabClick("Denied")}
              className={`pb-[9px] text-sm cursor-pointer px-8 transition-transform border-b-[3px] ${
                selectedTab === "Denied"
                  ? "border-b-[#2164E8] relative "
                  : "border-b-[#E9E9EB] text-[#494D57]"
              }`}
            >
              Denied
            </div>
          </nav>
          <hr className=" absolute border-[2px] text-[#E9E9EB] -translate-y-[3px]  w-full z-0 " />
        </div>
        <div className=" flex -gap-2 bg-white  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" px-4 my-3 flex gap-[6px] items-center ">
            <img src="/filter.svg" />
            <div>Filter</div>
          </div>

          <div   className=" relative flex items-center  w-full">
            <img className="translate-x-[26px]" src="/search.svg" />
            <input
              onChange={(e)=>setSearch(e.target.value)}
              className="my-3 lg:w-[50%] w-[90%] px-3 pl-8 py-[6px] border-[1px] rounded outline-none placeholder-[#113274] border-[#626670] "
              placeholder="Search"
            />

          </div>
        </div>
        <div className=" flex flex-col gap-[3px] ">
          <div className=" flex mt-4 bg-[#E8E9EA] items-center    shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div className=" text-sm lg:w-[10%] w-[5%] text-center  py-3">Sl. No.</div>
            <div className=" text-sm lg:w-[25%]  justify-center  gap-[3px] flex items-center py-3">
              Request Name
              <img src="/sort.svg" />
            </div>
            <div className=" text-sm  lg:w-[20%] text-center   py-3">
              Type of Request.
            </div>
            <div className=" text-sm  lg:w-[15%] justify-center  gap-[3px]   flex items-center py-3">
              Date
              <img src="/Arrow Sort.svg" />
            </div>
            <div className=" text-sm  lg:w-[15%]  text-center  py-3">Status</div>
          </div>
         <RenderHistory />
          <div className="flex justify-center items-center mt-4 ">
            <div
              className={` px-4  select-none py-3 cursor-pointer flex items-center  bg-white  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] text-xs ${
                currentPage === 1 ? "text-[#8D9096]" : "text-[#1E2532]"
              }`}
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
            >
              {currentPage > 1 ? (
                <img src="/b-arrow-left.svg" />
              ) : (
                <img src="/grey-arrow-left.svg" />
              )}
              Previous
            </div>
            {[...Array(Math.ceil(totalPages)).keys()].map(
              (page) => (
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
              )
            )}
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
                <img src="/b-arrow-right.svg" />
              ) : (
                <img src="/grey-arrow-right.svg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
