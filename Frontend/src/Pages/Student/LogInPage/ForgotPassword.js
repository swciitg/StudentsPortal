import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import CryptoJS from "crypto-js";
import iitg_logo from "../../../assets/iitg_logo.png";
export default function ForgotPassword({ SERVER_URL }) {
  ForgotPassword.propTypes = {
    SERVER_URL: PropTypes.string.isRequired,
  };
  //   const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  //   const [Roll, setRoll] = useState("");
  const [error, seterror] = useState([{ status: false, message: "" }]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

  // Function to encrypt the email
  function encryptEmail(email) {
    const encryptedEmail = CryptoJS.AES.encrypt(
      email,
      ENCRYPTION_KEY
    ).toString();
    return encryptedEmail;
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    function parseJwt(token) {
      if (!token) {
        return;
      }
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    }

    // loggedin user
    const user = parseJwt(token);

    if (token) {
      navigate(
        `/StudentDashboard/Home?e=${encodeURIComponent(
          encryptEmail(user.email)
        )}`
      );
    }
  }, []);
  const handleSignUp = async () => {
    try {
      setLoading(true);
      seterror({ status: false });
      const response = await axios.post(`${SERVER_URL}/users/forgot-password`, {
        // name: Name,
        email: Email,
        // roll: Roll,
      });

      if (response.status === 200) {
        console.log("ok");

        navigate(`/Otp?e=${encodeURIComponent(encryptEmail(Email))}`);
      } else {
        console.error("Error creating user:", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          seterror({ status: true, message: "User not found" });
        } else if (error.response.status === 500) {
          seterror({ status: true, message: "Enter correct email!" });
        }
      }
      console.error("Error:", error.message);
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
          Reset Password
        </p>
        <div className="flex flex-col gap-7">
          <label className="flex flex-col gap-1">
            <span className="font-medium text-sm">
              Enter your IITG ERP id (without @iitg.ac.in)
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={`border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md  ${
                error.status
                  ? "border-[#ba3940] animate-shake"
                  : "border-[rgba(118,122,129,1)]"
              } pl-3`}
              type="text"
              placeholder="Enter ERP id"
            />
            {error.status && (
              <div className="text-sm font-semibold text-[#ba3940] -mb-7 animate-shake">
                {error.message}
              </div>
            )}
          </label>
        </div>
        {Email.length > 0 ? (
          <div className="flex justify-end mt-10">
            <div>
              <button
                disabled={loading}
                onClick={handleSignUp}
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
