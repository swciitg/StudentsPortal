import React from "react";

const CommonListHeader = () => {
  return (
    <div className="font-medium text-sm flex justify-start w-[75rem] bg-dark-grey px-4 py-[0.8rem] shadow-md">
      <div className="ml-6">Sl. No.</div>
      <div className="ml-8">Request Name</div>

      <div className="ml-48">Request Sender</div>
      <div className="ml-48">Received on</div>
      <div className="ml-16">Status</div>
      <div className="ml-16">Approve/Withdraw</div>
    </div>
  );
};

export default CommonListHeader;
