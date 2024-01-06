// import { useState } from "react";
import React, { useEffect, useState } from "react";
import { Link,useLocation ,useNavigate} from "react-router-dom";
import CryptoJS from 'crypto-js';

import axios from "axios";
// import HomePage from "./HomePage";
export default function Otp() {
  const [Otp, setOtp] = useState("");
  const location = useLocation();
  const [error, seterror] = useState([{status:false,message:""}]);
  const navigate = useNavigate();
  const [resending, setresending] = useState(false);   
  const [resent, setresent] = useState(false);   
  const [loading, setLoading] = useState(false);  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(false);

  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const ENCRYPTION_KEY = 'HELLO_WoRLD';

  
  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const handleOtpSubmit = async () => {
    try {
      seterror({error:false})
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
      if (error.response) {
        if (error.response.status === 400) {
        seterror({ status: true, message:'Invalid OTP!'  });}}
      console.error('Error:', error.message);
    }finally {
      setLoading(false);  
    }
  };
  const handleResendOtp = async () => {
    try {
      setresent(false)
      setresending(true)
      const response = await axios.post('http://localhost:3002/api/users/resend-otp', {
        email: decryptEmail(encryptedEmail)
      });
      
      if (response.status === 201) {
        console.log('OTP resend successfully');
        setresending(false)
        setresent(true);
        setDisabled(true);
        setTimer(true);
        setSeconds(30);
      } else {
        console.error('Error re-sending OTP:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer && seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          setTimer(false);
          setDisabled(false);
          setresent(false);
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [timer, seconds, minutes]);
  
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
              className={`border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md  ${error.status?"border-[#ba3940] animate-shake":'border-[rgba(118,122,129,1)]'} pl-3`}
              type="number"
              placeholder="Enter OTP"

            />
          {error.status&&<div className="text-sm font-semibold text-[#ba3940] -mb-7 animate-shake">{error.message}</div>}
          </label>
          {/*onKeyDown={(e)=> Otp.length===6&&e.preventDefault()}*/}
        </div>
        {Otp.length >= 6 ? (
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={handleResendOtp}
              disabled={disabled}
              className={`flex flex-col text-${
                disabled ? "[rgba(141,144,150,1)]" : "[rgba(33,100,232,1)]"
              }`}
            >
              <div
                className={`hover:text-${
                  disabled ? "[rgba(141,144,150,1)]" : "[#315191]"
                }`}
              >
                {" "}
                Resend OTP{" "}
              </div>
              {resending ? (
                <div className="text-black text-xs">Sending...</div>
              ) : (
                ""
              )}
              {resent ? (
                <div className="text-[#107C10] text-xs">OTP Sent!</div>
              ) : (
                ""
              )}
              {disabled && (
                <div className="text-gray-500 text-xs">{`Re-enable in ${seconds}s`}</div>
              )}
            </button>
            <div>
              <button
                disabled={loading}
                onClick={handleOtpSubmit}
                className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
              >
                {loading ? "Submiting..." : "Submit"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={handleResendOtp}
              disabled={disabled}
              className={`flex flex-col text-${
                disabled ? "[rgba(141,144,150,1)]" : "[rgba(33,100,232,1)]"
              }`}
            >
              <div
                className={`hover:text-${
                  disabled ? "[rgba(141,144,150,1)]" : "[#315191]"
                }`}
              >
                {" "}
                Resend OTP{" "}
              </div>
              {resending ? (
                <div className="text-black text-xs">Sending...</div>
              ) : (
                ""
              )}
              {resent ? (
                <div className="text-[#107C10] text-xs">OTP Sent!</div>
              ) : (
                ""
              )}
              {disabled && (
                <div className="text-gray-500 text-xs">{`Re-enable in ${seconds}s`}</div>
              )}
            </button>

            <div>
              <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
                Submit
              </button>
            </div>
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
