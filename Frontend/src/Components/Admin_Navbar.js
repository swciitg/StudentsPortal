import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Admin_Navbar() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [CurrentWidth, SetCurrentWidth] = useState(window.innerWidth);
  const navbarRef = useRef();
  const isSelected = (path) => {
    return location.pathname.startsWith(path);
  };

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

  useEffect(() => {
    document.addEventListener("click", closeNavIfClickedOutside);

    return () => {
      document.removeEventListener("click", closeNavIfClickedOutside);
    };
  }, []);
  return (
    <div  >
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
              <img src="/iitg_logo.png" alt="iitg_logo" width="45px" />
              <div className="text-lg font-bold">Students Portal</div>
            </div>
            <ul>
              <Link to="/AdminDashboard/Home">
                <div
                  className={
                    
                    isSelected("/AdminDashboard/Home")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Home</div>
                </div>
              </Link>
              <Link to="/AdminDashboard/Profile">
                <div
                  className={
                    isSelected("/AdminDashboard/Profile")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Profile</div>
                </div>
              </Link>
              <Link to="/AdminDashboard/Request">
                <div
                  className={
                    isSelected("/AdminDashboard/Request")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Request</div>
                </div>
              </Link>
              <Link to="/AdminDashboard/History">
                <div
                  className={
                    isSelected("/AdminDashboard/History")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">History</div>
                </div>
              </Link>
              <Link to="/AdminDashboard/ForwardRequest">
                <div
                  className={
                    isSelected("/AdminDashboard/ForwardRequest")
                      ? "bg-[#E8E9EA] p-3"
                      : "p-3"
                  }
                >
                  <div className="ml-6">Request Forwards</div>
                </div>
              </Link>
            </ul>
          </div>
          <div className="flex mb-12 items-center justify-center gap-2">
            <img src="/swcLogo.svg" width="35px" />
            <div className="text-[#BBBCC0] text-sm">Copyrights @SWC_2023</div>
          </div>
        </nav>
      }
    </div>
  );
}
