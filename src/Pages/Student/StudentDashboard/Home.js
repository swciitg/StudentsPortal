import React from "react";
import { Link } from "react-router-dom";
import Student_Navbar from "../../../Components/Student_Navbar";
import { useState } from "react";
import Registration from "./DashboardTiles/Registration";
import MyProfile from "./DashboardTiles/MyProfile";
import ForwardNotification from "./DashboardTiles/ForwardNotification";
import ApprovedRequests from "./DashboardTiles/ApprovedRequests";
import PendingRequests from "./DashboardTiles/PendingRequests";
import BuildMyCV from "./DashboardTiles/BuildMyCV";

function Home() {
  const user = {
    name: "Yash Chouhan",
    Program: "B.Des",
    Branch: "Design",
    Email: "y.chauhan@iitg.ac.in",
    ProfileCompletion: 100,
  };

  const [logout_toggle, setlogout_toggle] = useState(false);

  return (
    <div className=" relative h-screen w-[100%]">

      {/*Side Navbar */}

      <Student_Navbar />

      {/*Tiles Area*/}

      <div className=" absolute  h-screen w-[82%] ml-[18%] p-5 ">
      
      {/*Corner Profile Option*/}

        <div className="flex p-3 -mt-3 mb-2 justify-end gap-2 items-center">
          <img src="/profile-blue.svg" />
          <Link
            to="/StudentDashboard/Profile"
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
              <Link to="/">
                <button className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8] text-white rounded">
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className=" grid gap-5 grid-cols-10 ">

          {/* Tile 1*/}

          <Registration user={user} />

          {/* Tile 2*/}

          <MyProfile user={user} />

          {/* Tile 3*/}

          <ForwardNotification />

          {/* Tile 4*/}

          <ApprovedRequests />

          {/* Tile 5*/}

          <PendingRequests />

          {/* Tile 6*/}

          <BuildMyCV />

        </div>
      </div>
    </div>
  );
}

export default Home;
