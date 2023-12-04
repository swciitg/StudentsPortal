import React from "react";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";
import Admin_Navbar from "../../../Components/Admin_Navbar";

function Home_admin() {
 

  return (
    <div className=" relative h-screen w-[100%]">

      {/*Side Navbar */}

      <Admin_Navbar/>

      {/*Tiles Area*/}

      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
      
      {/*Corner Profile Option*/}
<CornerProfileLogoutSectionadmin/>
      </div>
    </div>
  );
}

export default Home_admin;
