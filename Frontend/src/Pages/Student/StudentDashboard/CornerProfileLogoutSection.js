import React, { useEffect } from "react";
import { useState } from "react";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function CornerProfileLogoutSection({ encryptedEmail }) {
  CornerProfileLogoutSection.propTypes = {
    encryptedEmail: PropTypes.string.isRequired,
  };
  const [logout_toggle, setlogout_toggle] = useState(false);
  const navigate=useNavigate();
  // const user = {
  //   name: "Yash Chouhan"
  // };
  const handleLogout=()=>{
    
    localStorage.removeItem('token');
    console.log('Logout Successfully')
    navigate('/');
  }
  const [user, setuser] = useState("");
  const ENCRYPTION_KEY = "HELLO_WoRLD";

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
            role: "student",
            token:localStorage.getItem("token"),
          }
        );

        if (response.status === 200) {
          const user = response.data;
          setuser(user);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    UserDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="flex p-3 -mt-3 mb-2 justify-end gap-2 items-center">
        <img src="/profile-blue.svg" />
        <Link
          to={`/StudentDashboard/Profile?e=${encodeURIComponent(
            encryptedEmail
          )}`}
          className="text-[rgba(33,100,232,1)]"
        >
          {user.name}
        </Link>

        {logout_toggle === false ? (
          <img
            onClick={() => {
              logout_toggle === false
                ? setlogout_toggle(true)
                : setlogout_toggle(false);
            }}
            className=" cursor-pointer"
            src="/down-arrow.svg"
          />
        ) : (
          <img
            onClick={() => {
              logout_toggle === false
                ? setlogout_toggle(true)
                : setlogout_toggle(false);
            }}
            className=" cursor-pointer"
            src="/blue-arrow-up.svg"
          />
        )}
      </div>

      {/* Logout Toggle */}

      {logout_toggle && (
        <div className="absolute -mt-3 mb-2 w-[95%] flex justify-end">
          <div className="bg-white p-9 pl-12 pr-12 rounded-sm shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <button onClick={handleLogout} className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8] text-white rounded">
                Log Out
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CornerProfileLogoutSection;
