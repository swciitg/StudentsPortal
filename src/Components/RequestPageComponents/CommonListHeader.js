import React from "react";

const CommonListHeader = () => {
  return (
    <div className="font-medium text-sm flex justify-around w-[75rem] bg-dark-grey px-4 py-[0.8rem] shadow-md">
      <div>Sl. No.</div>
      <div>Request Name</div>

      <div>Request Sender</div>
      <div>Received on</div>
      <div>Status</div>
      <div>Approve/Withdraw</div>
    </div>
  );
};

export default CommonListHeader;
