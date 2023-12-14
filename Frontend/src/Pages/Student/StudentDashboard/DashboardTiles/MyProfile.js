import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function MyProfile({user,encryptedEmail}) {
  MyProfile.propTypes = {
    user: PropTypes.arrayOf(
   PropTypes.shape({
      name: PropTypes.string,
      Program: PropTypes.string,
      Branch: PropTypes.string,
      Email: PropTypes.string,
      ProfileCompletion: PropTypes.number,
    })).isRequired,
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
            {user.ProfileCompletion !== 100 ? (
              <span className=" text-xs font-semibold text-[#D83B01]">
                ({user.ProfileCompletion}% complete)
              </span>
            ) : (
              <span className=" text-xs font-semibold text-[rgba(16,124,16,1)]">
                ({user.ProfileCompletion}% complete)
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 text-2xl font-semibold">{user.name}</div>
        <div className="mt-3">
          <div className="flex gap-2">
            <img src="/branch.svg" />
            <div>{user.Program}</div>
          </div>
          <div className="flex gap-2">
            <img src="/tag.svg" />
            <div>{user.Branch}</div>
          </div>
          <div className="flex gap-2">
            <img src="/email.svg" />
            <div>{user.Email}</div>
          </div>
        </div>
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
