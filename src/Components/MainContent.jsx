import React from "react";
import HeaderSection from "./HeaderSection";
import Pending from "./Pending";
import Notification from "./Notification";

const MainContent = () => {
  return (
    <div className="p-5 bg-dark-white">
      <HeaderSection />
      <div className="flex">
        <Pending />
        <Notification />
      </div>
    </div>
  );
};

export default MainContent;
