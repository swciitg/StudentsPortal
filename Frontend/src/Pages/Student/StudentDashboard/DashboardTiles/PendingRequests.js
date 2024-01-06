import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function PendingRequests({PendingRequest,encryptedEmail}) {
    PendingRequests.propTypes = {
        PendingRequest: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            POR: PropTypes.string,
            description: PropTypes.string,
            status: PropTypes.string,
            Date: PropTypes.string,
          })
        ),
    encryptedEmail: PropTypes.string.isRequired,
      };
      
  return (
    <div className=" col-span-4 p-7 h-full flex flex-col  justify-between pb-4  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div className="h-full w-full">
        {" "}
        <div className="flex gap-2 items-center">
          <img src="/requests-pending.svg" />
          <div className=" text-base">Pending Requests</div>
        </div>
     {(PendingRequest&&PendingRequest.filter(item => item.Status === "Pending").length>0)?   <div className="mt-2 lg:mb-0 mb-3 flex flex-col gap-2">
          {PendingRequest.filter(item => item.Status === "Pending").slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="p-2 flex justify-center shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]"
            >
              <div className="w-11/12 text-sm h-full">
                {item.subject}
              </div>
              <div className=" items-center  flex flex-col gap-4 ">
                <div className="text-[0.60rem] text-[#494D57] ">
                  {item.Status}
                </div>
                <div className="text-[0.60rem] text-[#494D57] ">
                  {item.Request_sent_date}
                </div>
              </div>
            </div>
          ))}
        </div>:<div className="flex justify-center py-16 items-center h-full text-[#8D9096]">
        Nothing To Show!!!
      </div>}
      </div>
      <Link
        to={`/StudentDashboard/History?e=${encodeURIComponent(encryptedEmail)}`}
        className="text-[#2164E8] text-sm flex justify-end my-2 "
      >
        View all Pending Requests
      </Link>
    </div>
  );
}

export default PendingRequests;
