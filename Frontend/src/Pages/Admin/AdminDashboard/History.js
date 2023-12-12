import { useLocation } from "react-router-dom";
import React from "react";
import Admin_Navbar from "../../../Components/Admin_Navbar";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";

function AdminHistory() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  return (
    <div className=" relative h-screen w-[100%]">
      <Admin_Navbar  encryptedEmail={encryptedEmail}/>
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSectionadmin  encryptedEmail={encryptedEmail}/>
        <div className="px-4 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg  font-semibold ">History</div>

        </div>
      <div className="flex justify-center py-10 text-xl font-extrabold text-[#7a7e87]">Coming Soon...</div>
       
      </div>
    </div>
  );
}

export default AdminHistory;
