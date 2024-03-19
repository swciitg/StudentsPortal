import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import axios from "axios";
import iitg_logo from "../assets/iitg_logo.png";
import swcLogo from "../assets/swcLogo.svg";
export default function Student_Navbar({ encryptedEmail,SERVER_URL }) {

  Student_Navbar.propTypes = {
    encryptedEmail: PropTypes.string.isRequired,
    SERVER_URL: PropTypes.string.isRequired,
  };
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [CurrentWidth, SetCurrentWidth] = useState(window.innerWidth);
  const navbarRef = useRef();
  const [isAdmin,setisAdmin]=useState(false)
  const isSelected = (path) => {
    return location.pathname.startsWith(path);
  };
  const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const handleToggleNav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    SetCurrentWidth(window.innerWidth);
  }, []);
  const closeNavIfClickedOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  useEffect(()=>{
    async function CheckAdmin() {
      try {
        const response = await axios.post(
          `${SERVER_URL}/users/check-admin`,
          {
            email: decryptEmail(encryptedEmail),
          }
        );
        if (response.status === 201) {
          if(response.data.role==='admin'){setisAdmin(true)}
        }
      } catch (error) {
        // console.log(error);
      }
    }
    CheckAdmin();
  },[])

  useEffect(() => {
    document.addEventListener("click", closeNavIfClickedOutside);

    return () => {
      document.removeEventListener("click", closeNavIfClickedOutside);
    };
  }, []);
  return (
    <div>
      {CurrentWidth < 1024 && (
        <div ref={navbarRef} className="absolute ml-8 mt-4">
          <button className="text-2xl" onClick={handleToggleNav}>
            ☰
          </button>
        </div>
      )}

      {
        <nav
          style={{ zIndex: 10 }}
          className={`flex flex-col justify-between fixed  bg-white w-[50%] lg:w-[18%] h-screen shadow-[0px 3.2px 7.2px 0px rgba(27,33,45,0.13),0px 0.6px 1.8px 0px rgba(27,33,45,0.10)]  transition-all duration-300 ${
            window.innerWidth < 1024 && (showNav ? "left-0" : "-left-full")
          }`}
        >
          <div>
            <div className="flex items-center gap-2 pb-6 justify-center pt-6">
              <img src={iitg_logo} alt="iitg_logo" width="45px" />
              <div className="text-lg font-bold">POR Portal</div>
            </div>
            <ul>
              <Link
                to={`/studentdashboard/home?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <div
                  className={
                    isSelected("/studentdashboard/home")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Home</div>
                </div>
              </Link>
              <Link
                to={`/studentdashboard/profile?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <div
                  className={
                    isSelected("/studentdashboard/profile")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Profile</div>
                </div>
              </Link>
              <Link
                to={`/studentdashboard/createrequest?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <div
                  className={
                    isSelected("/studentdashboard/createrequest")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Create New Request</div>
                </div>
              </Link>
              {isAdmin && (
                <Link
                  to={`/studentdashboard/receivedrequest?e=${encodeURIComponent(
                    encryptedEmail
                  )}`}
                >
                  <div
                    className={
                      isSelected("/studentdashboard/receivedrequest")
                        ? "bg-[#E8E9EA] p-3"
                        : "p-3"
                    }
                  >
                    <div className="ml-6">Request Received</div>
                  </div>
                </Link>
              )}

              <Link
                to={`/studentdashboard/sentrequest?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <div
                  className={
                    isSelected("/studentdashboard/sentrequest")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Request Sent</div>
                </div>
              </Link>

              <Link
                to={`/studentdashboard/history?e=${encodeURIComponent(
                  encryptedEmail
                )}`}
              >
                <div
                  className={
                    isSelected("/studentdashboard/history")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">History</div>
                </div>
              </Link>
            </ul>
          </div>
          <div className="flex mb-12 items-center justify-center gap-2">
            <img src={swcLogo} width="35px" />
            <div className="text-[#BBBCC0] text-sm">Copyrights @SWC_2023</div>
          </div>
        </nav>
      }
    </div>
  );
}
