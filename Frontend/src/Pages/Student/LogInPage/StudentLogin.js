import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import axios from "axios";
export default function StudentLogin({ SERVER_URL}) {
  StudentLogin.propTypes = {  
    SERVER_URL: PropTypes.string.isRequired,
  };
  const [Email, setEmail] = useState("");
  const [error, seterror] = useState([
    { message: "", email: false, pass: false },
  ]);
  const [Password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;
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
  const handleLogin = async () => {
    try {
      seterror({ status: false });
      setLoading(true);
      const response = await axios.post(
        `${SERVER_URL}/studentsportal/api/users/login`,
        {
          email: Email,
          password: Password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.log("Login successful");
        navigate(
          `/StudentDashboard/Home?e=${encodeURIComponent(encryptEmail(Email))}`
        );
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          seterror({
            message: "User does not exist",
            email: true,
            pass: false,
          });
        }
        if (error.response.status === 401) {
          seterror({
            message:
              "Incorrect password. Click on ‘Forgot password’ to reset it.",
            email: false,
            pass: true,
          });
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
          <img className="" src="/studentsportal/iitg_logo.png" alt="iitg_logo" width="65px" />
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
              className={`border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md  ${
                error.email
                  ? "border-[#ba3940] animate-shake"
                  : "border-[rgba(118,122,129,1)]"
              } pl-3`}
              type="text"
              placeholder="Enter ERP id"
            />
            {error.email && (
              <div className="text-sm font-semibold text-[#ba3940] -mb-7 animate-shake">
                {error.message}
                {/* <span className=" text-[#2164E8]"></span> */}
              </div>
            )}
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium text-sm">Password</span>
            <input
              onChange={(e) => setpassword(e.target.value)}
              className={`border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md  ${
                error.pass
                  ? "border-[#ba3940] animate-shake"
                  : "border-[rgba(118,122,129,1)]"
              } pl-3`}
              type="password"
              placeholder="Enter your Password"
            />
            {error.pass && (
              <div className="text-sm font-semibold text-[#ba3940] -mb-7 animate-shake">
                {error.message}
              </div>
            )}
          </label>
        </div>
        {Password.length > 0 && Email.length > 0 ? (
          <div className="flex justify-between items-center mt-10">
            <Link
              to="/Student/ForgotPassword"
              className=" text-[rgba(33,100,232,1)]"
            >
              Forgot password?
            </Link>
            <Link>
              <button
                disabled={loading}
                onClick={handleLogin}
                className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
              >
                {loading ? "Submiting..." : "Submit"}
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-10">
            <Link
              to="/Student/ForgotPassword"
              className="  text-[rgba(33,100,232,1)]"
            >
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
