import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function ForwardNotification({ Notification, encryptedEmail }) {
  ForwardNotification.propTypes = {
    Notification: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        status: PropTypes.string,
        Date: PropTypes.string,
      })
    ).isRequired, // Make sure Notification is required
    encryptedEmail: PropTypes.string.isRequired,
  };
  return (
    <div className="p-7 col-span-3 lg:w-[45%] w-full mb-10  flex flex-col gap-3 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        {" "}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="/Notification.svg" />
            <div>Notification</div>
          </div>
          <div className="text-xs text-[#D83B01]">2 Unread</div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {Notification.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]"
            >
              <div className="w-[80%] text-xs font-medium ">
                {item.description}
              </div>
              <div className=" items-center  flex flex-col gap-6 ">
                <img src="/Bookmark-Notification.svg" width="10px" />
                <div className="text-[0.60rem] text-[#494D57] ">
                  {item.Date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to={`/AdminDashboard/ForwardRequest?e=${encodeURIComponent(encryptedEmail)}`}
        className="text-[#2164E8] text-sm flex justify-end "
      >
        View all Request Forwards
      </Link>
    </div>
  );
}

export default ForwardNotification;
