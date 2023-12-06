import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function CornerProfileLogoutSectionadmin() {
  const [logout_toggle, setlogout_toggle] = useState(false);
  const user = {
    name: "General Secretary Ecell"
  };
  return (<div>
    <div className="flex p-3 -mt-3 mb-2 justify-end gap-2 items-center">
    <img src="/profile-blue.svg" />
    <Link
      to="/AdminDashboard/Profile"
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
  </div>
  )
}

export default CornerProfileLogoutSectionadmin
