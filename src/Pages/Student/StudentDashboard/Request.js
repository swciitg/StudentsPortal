import React from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
// import { useState } from "react";
import { Link } from "react-router-dom";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";
function Request() {


  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" flex flex-col lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />

        <div className=" flex justify-center items-center h-screen">
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 items-center text-[#2164E8]">
              <Link to="/StudentDashboard/Request/SelectValidation"><button  className="lg:p-20 lg:px-24 p-10 px-12 cursor-pointer text-[rgba(33,100,232,1)] text-6xl font-medium bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                +
              </button></Link>
              <div className="">Add New Request</div>{" "}
            </div>
            <div className="flex flex-col gap-4 items-center text-[#2164E8]">
              <Link> <button className="lg:p-20 lg:px-24 p-10 px-12 cursor-pointer text-[rgba(33,100,232,1)] text-6xl font-medium bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                -
              </button></Link>
              <div className="">Manage Request</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
