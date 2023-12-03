import React from "react";

const CommonHeader = () => {
  return (
    <div className="mt-4 px-8 py-4 flex justify-between w-[75rem] border-t-2 border-b-4">
      <div className="flex justify-between w-[30rem]">
        <div>Filter</div>
        <div className="border-2 border-dark-grey rounded-md flex justify-center">
          <input
            type="text"
            className="px-4 py-[0.1rem] w-[26rem] rounded-md"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-between w-[28rem]">
        <div className="flex justify-center">
          <span className="font-bold text-sm">
            Requests Approved by you: 12
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-sm">Total Requests Recieved: 25</span>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
