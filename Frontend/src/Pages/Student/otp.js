// import { useState } from "react";
import React, { useState } from "react";
import { Link,useLocation ,useNavigate} from "react-router-dom";
import CryptoJS from 'crypto-js';

import axios from "axios";
// import HomePage from "./HomePage";
export default function Otp() {
  const [Otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const ENCRYPTION_KEY = 'HELLO_WoRLD';

  
  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const handleOtpSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3002/api/users/verify-otp', {
        email: decryptEmail(encryptedEmail), 
        otp: Otp,
      });
  
      if (response.status === 200) {
        console.log('OTP verified successfully');
        navigate(`/CreatePass?e=${encodeURIComponent(encryptedEmail)}`)
      } else {
        console.error('Error verifying OTP:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }finally {
      setLoading(false);  
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center  flex-col gap-5">
      <div className="bg-white pl-10 pr-10 w-[90%] md:w-[60%] lg:w-[400px] pb-9 pt-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex justify-start  mb-2">
          <img className="" src="/iitg_logo.png" alt="iitg_logo" width="65px" />
        </div>
        <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-5">
          Sign Up
        </p>
        <p className="text-sm font-normal mb-4">
          We’ve sent an OTP to your registered mail id.
        </p>
        <div className="flex flex-col gap-7">
          <label className="flex flex-col gap-2 ">
            <span className="font-medium text-sm">OTP</span>
            <input
              onChange={(e) => {setOtp(e.target.value)}}
              min="0"
              max="999999"
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="number"
              placeholder="Enter OTP"

            />
          </label>
          {/*onKeyDown={(e)=> Otp.length===6&&e.preventDefault()}*/}
        </div>
        {Otp.length >= 6 ? (
          <div className="flex justify-between items-center mt-10">
            <Link to="/Otp" className=" text-[rgba(33,100,232,1)]">
              Resend OTP
            </Link>
            <Link>
              <button disabled={loading}  onClick={handleOtpSubmit} className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
              {loading ? 'Submiting...' : 'Submit'}
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-10">
            <Link to="/Otp" className="  text-[rgba(33,100,232,1)]">
              Resend OTP
            </Link>
            <Link>
              <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
                Submit
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="w-[90%] md:w-[60%] lg:w-[400px] p-4 pl-8 text-sm font-normal  items-center  bg-white shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)]">
        <p>
          {"Already have an account?\t"}
          <Link to="/StudentsLogIn" className="text-[rgba(33,100,232,1)]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
