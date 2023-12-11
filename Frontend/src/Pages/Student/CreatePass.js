// import { useState } from "react";
import React, { useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
// import HomePage from "./HomePage";
export default function CreatePass() {
  const [paas, setpass] = useState("");
  const [confpass, setconfpaas] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate=useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");
  const handleCreatePass = async () => {
    try {
setLoading(true)
      const newPassword = paas;
  
      await axios.post('http://localhost:3002/api/users/create-password', {
        email: email, 
        password: newPassword,
      });

      console.log('Password created successfully');
      navigate(`/StudentDashboard/Home?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error('Error creating password:', error.message);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center  flex-col gap-5">
      <div className="bg-white pl-10 pr-10 w-[90%] md:w-[60%] lg:w-[400px] pb-9 pt-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex justify-start  mb-2">
          <img className="" src="/iitg_logo.png" alt="iitg_logo" width="65px" />
        </div>
        <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-5">
          Sign up
        </p>
        <div className="flex flex-col gap-7">
          <label className="flex flex-col gap-2 ">
            <span className="font-medium text-sm">Password</span>
            <input
              onChange={(e) => setpass(e.target.value)}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="password"
              placeholder="Enter Password"
            />
          </label>
          <label className="flex flex-col gap-2 ">
            <span className="font-medium text-sm">Confirm Password</span>
            <input
              onChange={(e) => setconfpaas(e.target.value)}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="password"
              placeholder="Rewrite Password "
            />
          </label>
        </div>
        {paas === confpass && paas.length > 0 ? (
          <div className="flex justify-end mt-10">
            <Link>
              <button disabled={loading} onClick={handleCreatePass} className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
              {loading ? 'Submiting...' : 'Submit'}
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-end mt-10">
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
