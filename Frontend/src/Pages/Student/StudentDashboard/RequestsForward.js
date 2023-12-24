import React, { useEffect } from "react";
import CryptoJS from "crypto-js";
import Student_Navbar from "../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function RequestsForward() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const navigate=useNavigate();
  const ENCRYPTION_KEY = 'HELLO_WoRLD';
  
  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  useEffect(() => {
    
     async function checkEmail()  {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
            role: "student",
            token:localStorage.getItem("token")
          }
        );
          if (response.status === 200) {
            console.log('OK')
          
        }
      } catch (error) {
        navigate(`/`);
      }
    }
    checkEmail();
  }, []);
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar  encryptedEmail={encryptedEmail}/>
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection  encryptedEmail={encryptedEmail}/>
        <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg font-semibold ">Request Forwards</div>
        </div>
      <div className="flex justify-center py-10 text-xl font-extrabold text-[#7a7e87]"> You have no any Forwarded Request</div>
      </div>
    </div>
  );
} 

export default RequestsForward;
