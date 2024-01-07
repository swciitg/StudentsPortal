import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function MyProfile({user,encryptedEmail}) {
  MyProfile.propTypes = {
    user:(
   PropTypes.shape({
      name: PropTypes.string,
      program: PropTypes.string,
      department: PropTypes.string,
      email: PropTypes.string,
      profileCompletion: PropTypes.number,
    })),
    encryptedEmail: PropTypes.string.isRequired,
  };
 
  return (
    <div className=" col-span-3 flex flex-col justify-between p-7  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        {" "}
        <div className="flex gap-2 items-center">
          <img src="/Profile-grey.svg" />
          <div className=" text-base">
            My Profile
            {user&&(user.profileCompletion !== 100 ? (
              <span className=" text-xs font-semibold text-[#D83B01]">
                ({user.profileCompletion}% complete)
              </span>
            ) : (
              <span className=" text-xs font-semibold text-[rgba(16,124,16,1)]">
                ({user.profileCompletion}% complete)
              </span>
            ))}
          </div>
        </div>
       {!user? <div className="mt-6 text-2xl font-semibold">--</div>:
        <div className="mt-6 text-2xl font-semibold">{user.name}</div>}
       {!user?<div className="flex justify-center items-center h-full text-[#8D9096]">
        Loading...
      </div>:
         <div className="mt-3">
          <div className="flex gap-2">
            <img src="/branch.svg" />
           {user.program&& user.program.length>0?<div>{user.program}</div>:
            <div>--</div>}
          </div>
          <div className="flex gap-2">
            <img src="/tag.svg" />
           {user.department&&user.department.length>0? <div>{user.department}</div>:
            <div>--</div>}
          </div>
          <div className="flex gap-2">
            <img src="/email.svg" />
            <div>{user.email}@iitg.ac.in</div>
          </div>
        </div> }
      </div>
      <Link
        to={`/StudentDashboard/Profile?e=${encodeURIComponent(encryptedEmail)}`}
        className="text-[#2164E8] text-sm flex justify-end"
      >
        View profile
      </Link>
    </div>
  );
}

export default MyProfile;
