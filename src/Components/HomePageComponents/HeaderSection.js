import React from "react";
import Button from "./Button";
import HeaderSectionList from "./HeaderSectionList";

const HeaderSection = () => {
  return (
    <div className="border-4 border-l-indigo-500 bg-white mt-6 flex flex-col px-4 py-4">
      <div className="mt-4 mb-4 flex justify-between">
        <div className="text-3xl font-semibold">New Requests Received</div>
        <div className="text-sm font-normal text-regal-red cursor-pointer hover:underline">
          2 Unread
        </div>
      </div>

      <HeaderSectionList />

      <HeaderSectionList />
      <div className="mt-2">
        <Button value="View All Request" />
      </div>
    </div>
  );
};
export default HeaderSection;
