import React, { useEffect } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import CryptoJS from "crypto-js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";
import axios from "axios";
function CreateRequest() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const navigate = useNavigate();
  const ENCRYPTION_KEY = "HELLO_WoRLD";

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  useEffect(() => {
    async function checkEmail() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
            token: localStorage.getItem("token"),
          }
        );
        if (response.status === 200) {
          console.log("OK");
        }
      } catch (error) {
        navigate(`/`);
      }
    }
    checkEmail();
  }, []);
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail} />
      <div className=" flex flex-col lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        <CornerProfileLogoutSection encryptedEmail={encryptedEmail} />

        <div className=" flex justify-center items-center h-screen">
          <div className="flex gap-10">
            <div className="flex flex-col gap-4 items-center text-[#2164E8]">
              <Link
                to={`/StudentDashboard/CreateRequest/add?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <button className="lg:p-20 lg:px-24 p-10 px-12 cursor-pointer text-[rgba(33,100,232,1)] text-6xl font-medium bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                  +
                </button>
              </Link>
              <div className="">Add New Request</div>{" "}
            </div>
            <div className="flex flex-col gap-4 items-center text-[#2164E8]">
              <div>
                {" "}
                <button className="lg:p-20 lg:px-24 p-10 px-12 cursor-pointer text-[rgba(33,100,232,1)] text-6xl font-medium bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
                  -
                </button>
              </div>
              <div className="">Manage Request</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRequest;
