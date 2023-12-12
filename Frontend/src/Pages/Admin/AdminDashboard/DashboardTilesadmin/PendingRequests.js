import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
function PendingRequestsadmin({ PendingRequests, encryptedEmail }) {
  // propTypes definition
  PendingRequestsadmin.propTypes = {
    PendingRequests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        status: PropTypes.string,
        Date: PropTypes.string,
      })
    ).isRequired, // Make sure PendingRequests is required
    encryptedEmail: PropTypes.string.isRequired,
  };
  return (
    <div className=" col-span-3 p-7 lg:w-[35%] w-full lg:mb-10 flex flex-col gap-4 pb-4 bg-white h-[100%] shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        {" "}
        <div className="flex gap-2 items-center">
          <img src="/requests-approved.svg" />
          <div className=" text-base">Pending Requests</div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          {PendingRequests.map((item) => (
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
        to={`/AdminDashboard/Request?e=${encodeURIComponent(encryptedEmail)}`}
        className="text-[#2164E8] text-sm flex justify-end "
      >
        View all
      </Link>
    </div>
  );
}

export default PendingRequestsadmin;
