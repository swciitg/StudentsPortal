import React from "react";

const NotificationList = () => {
  return (
    <div className="flex items-end bg-white w-96 mt-2 px-2 py-4 shadow-3xl">
      <div>
        <div className="text-xs font-bold">Fr by You to Sahil Nizam: POR:</div>
        <div className="text-xs">
          Design Head E-Cell, Waiting for approval from General Secretary E-Cell
        </div>
      </div>
      <div>
        <div className="text-xxs text-regal-blue inline-block hover:underline cursor-pointer">
          View Details
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
