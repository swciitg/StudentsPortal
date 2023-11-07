import React from "react";
import { Link } from "react-router-dom";

function ApprovedRequests() {
  const ApprovedRequests = [
    {
      id: 1,
      status: "POR: Designer SWC",
      Date: "18/12/22",
    },
    {
      id: 2,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
    {
      id: 3,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
    {
      id: 4,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
  ];
  return (
    <div className=" col-span-3 p-7 flex flex-col gap-4 pb-4 bg-white h-[100%] shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        {" "}
        <div className="flex gap-2 items-center">
          <img src="/requests-approved.svg" />
          <div className=" text-base">Approved Requests</div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          {ApprovedRequests.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFF6FC] flex justify-between items-center p-2"
            >
              <p className=" text-sm">{item.status}</p>
              <p className="text-sm text-[#494D57]">{item.Date}</p>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/StudentDashboard/RequestsForward"
        className="text-[#2164E8] text-sm flex justify-end "
      >
        View all
      </Link>
    </div>
  );
}

export default ApprovedRequests;
