// import { useState } from "react";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import CryptoJS from "crypto-js";
import iitg_logo from "../../../assets/iitg_logo.png";
export default function CreatePass({ SERVER_URL }) {
  CreatePass.propTypes = {
    SERVER_URL: PropTypes.string.isRequired,
  };
  const [paas, setpass] = useState("");
  const [confpass, setconfpaas] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const handleCreatePass = async () => {
    const password = paas;
    try {
      setLoading(true);
      const response = await axios.post(
        `${SERVER_URL}/users/create-password`,
        {
          email: decryptEmail(encryptedEmail),
          password: password,
        }
      );

      if (response.status === 200) {
        // console.log(response)
        localStorage.setItem("token", response.data.token);
        console.log("Password created successfully");

        // Redirect to the dashboard
        navigate(
          `/StudentDashboard/Home?e=${encodeURIComponent(encryptedEmail)}`
        );
      } else {
        console.log("error while creating password");
      }
    } catch (error) {
      console.error("Error creating password:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center  flex-col gap-5">
      <div className="bg-white pl-10 pr-10 w-[90%] md:w-[60%] lg:w-[400px] pb-9 pt-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex justify-start  mb-2">
          <img className="" src={iitg_logo} alt="iitg_logo" width="65px" />
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
              title="Characters must be 6 or more"
            />
          </label>
          <label className="flex flex-col gap-2 ">
            <span className="font-medium text-sm">Confirm Password</span>
            <input
              onChange={(e) => setconfpaas(e.target.value)}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="password"
              placeholder="Rewrite Password "
              title="Rewrite the above password"

            />
          </label>
        </div>
        {paas === confpass && paas.length > 6 ? (
          <div className="flex justify-end mt-10">
            <div>
              <button
                disabled={loading}
                onClick={handleCreatePass}
                className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
              >
                {loading ? "Submiting..." : "Submit"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end mt-10">
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
