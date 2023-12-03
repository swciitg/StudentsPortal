import React from "react";
import Navbar from "../Components/Navbar";
import MainContentRequest from "../Components/RequestPageComponents/MainContentRequest";

const RequestPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <MainContentRequest />
    </div>
  );
};

export default RequestPage;
