import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function StudentLogin() {

  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");

  return (
    <div className="h-screen w-screen flex justify-center items-center  flex-col gap-5">
      <div className="bg-white pl-10 pr-10 w-[90%] md:w-[60%] lg:w-[400px] pb-9 pt-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex justify-start  mb-2">
          <img className="" src="/iitg_logo.png" alt="iitg_logo" width="65px" />
        </div>
        <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-5">
          Log In
        </p>
        <div className="flex flex-col gap-7">
          <label className="flex flex-col gap-1">
            <span className="font-medium text-sm">
              Enter your IITG ERP id (without @iitg.ac.in)
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="text"
              placeholder="Enter ERP id"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium text-sm">Password</span>
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="text"
              placeholder="Enter your Password"
            />
          </label>
        </div>
        {Password.length > 0 && Email.length > 0 ? (
            <div className="flex justify-between items-center mt-10">
            <Link to="/" className=" text-[rgba(33,100,232,1)]">
            Forgot password?
            </Link>
            <Link to={"/StudentDashboard/Home"}>
              <button  className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
              {'Submit'}
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-10">
            <Link to="/" className="  text-[rgba(33,100,232,1)]">
            Forgot password?
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
          {"New User?\t"}
          <Link to="/StudentsSignUp" className="text-[rgba(33,100,232,1)]">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
