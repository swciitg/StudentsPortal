import React from "react";
import NotiLogo from "../Images/Calendar Clock.png";
import NotificationList from "./NotificationList";

const Notification = () => {
  return (
    <div className="bg-white p-6 mt-4 w-108">
      <div className="flex justify-between px-3">
        <div className="flex">
          <img src={NotiLogo} className="mr-1.5" />
          <span className="font-semibold">Pending Requests</span>
        </div>
        <div className="text-sm font-normal text-regal-red cursor-pointer hover:underline">
          2 Unread
        </div>
      </div>
      <div className="flex flex-col mt-4 items-center">
        <NotificationList />
        <NotificationList />
      </div>
      <div className="text-sm flex justify-end mt-4 py-1 w-96">
        <span className="text-real-blue hover:underline cursor-pointer">
          View All Forwards
        </span>
      </div>
    </div>
  );
};

export default Notification;
