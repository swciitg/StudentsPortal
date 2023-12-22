import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";
import Admin_Navbar from "../../../Components/Admin_Navbar";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";
import axios from "axios";
function AdminProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  // const user = {
  //   name: "General Secretary Ecell",
  //  'Official mail id': "Gsececell@iitg.ac.in",
  // };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token)
      navigate('/');
  }, []);
  const [user,setuser]=useState("")
  const ENCRYPTION_KEY = "HELLO_WoRLD";

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
            role:'admin'
          }
        );

        if (response.status === 200) {
          const user=response.data;
         setuser(user)
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
      navigate('/');
        console.error("Error:", error.message);
      }
    }
    UserDetails();
  }, []);
  return (
    <div className=" relative h-screen w-[100%]">
      <Admin_Navbar  encryptedEmail={encryptedEmail} />
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSectionadmin  encryptedEmail={encryptedEmail} />
        <div className="px-4 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg  font-semibold ">My Profile</div>
        </div>
        <div className="p-4 mt-1 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
          <div className="lg:flex lg:flex-row flex flex-col  gap-5">
            <div className="lg:w-[28%] w-full flex flex-col ">
              <div className="flex  flex-col items-left">
                <label className="text-[#353B47] text-sm">Name</label>

                <div>{user.name}</div>
              </div>
             
            </div>
            <div className="lg:w-[28%] w-full flex flex-col">
            <div className="flex  flex-col items-left">
                <label className="text-[#353B47] text-sm">Official mail id</label>
                <div>{user.email}@iitg.ac.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
