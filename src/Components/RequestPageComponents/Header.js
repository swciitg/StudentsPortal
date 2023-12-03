import React from "react";
import ReqNavbar from "./ReqNavbar";

const Header = () => {
  return (
    <div className="bg-white mt-6 flex flex-col">
      <div className="text-3xl font-semibold px-6 py-4">
        Validation Request List
      </div>
      <ReqNavbar />
    </div>
  );
};

export default Header;
