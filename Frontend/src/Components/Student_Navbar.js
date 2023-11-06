import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Student_Navbar() {
  const location = useLocation();
  const isSelected = (path) => {
    return location.pathname === path;
  };
  return (
    <nav className=" flex flex-col  justify-between absolute bg-white w-[18%] h-screen shadow-[0px_3.2px_7.2px_0px_rgba(27,33,45,0.13),0px_0.6px_1.8px_0px_rgba(27,33,45,0.10)]">
      <div>
        <div className="flex items-center gap-2 pb-6 justify-center pt-6 ">
          <img src="/iitg_logo.png" alt="iitg_logo" width="45px" />
          <div className=" text-lg font-bold">Students Portal</div>
        </div>
        <ul>
          <Link to="/StudentDashboard/Home">
            <div
              className={
                isSelected("/StudentDashboard/Home")
                  ? "bg-[#E8E9EA] p-3"
                  : "p-3"
              }
            >
              <div className=" ml-6">Home</div>
            </div>
          </Link>
          <Link to="/StudentDashboard/Profile">
            <div
              className={
                isSelected("/StudentDashboard/Profile")
                  ? "bg-[#E8E9EA] p-3"
                  : "p-3"
              }
            >
              <div className=" ml-6">Profile</div>
            </div>
          </Link>
          <Link to="/StudentDashboard/Request">
            <div
              className={
                isSelected("/StudentDashboard/Request")
                  ? "bg-[#E8E9EA] p-3"
                  : "p-3"
              }
            >
              <div className=" ml-6">Request</div>
            </div>
          </Link>
          <Link to="/StudentDashboard/History">
            {" "}
            <div
              className={
                isSelected("/StudentDashboard/History")
                  ? "bg-[#E8E9EA] p-3"
                  : "p-3"
              }
            >
              <div className=" ml-6">History</div>
            </div>
          </Link>
          <Link to="/StudentDashboard/RequestsForward">
            {" "}
            <div
              className={
                isSelected("/StudentDashboard/RequestsForward")
                  ? "bg-[#E8E9EA] p-3"
                  : "p-3"
              }
            >
              <div className=" ml-6">Request Forwards</div>
            </div>
          </Link>
        </ul>
      </div>
      <div className="flex mb-12 items-center justify-center gap-2">
        <img src="/swcLogo.svg" width="35px" />
        <div className="text-[#BBBCC0] text-sm">Copyrights @SWC_2023</div>
      </div>
    </nav>
  );
}
