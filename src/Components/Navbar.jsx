import React from "react";
import imageLogo from "../Images/iitg.png";
import swcLogo from "../Images/Path 18.png";

export default function Navbar() {
  const Menus = [
    { title: "Home" },
    { title: "Profile" },
    { title: "Request" },
    { title: "History" },
    { title: "Request Forwards" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className={`w-72 h-5/6`}>
        <div className="flex items-center justify-center mt-8">
          <img src={imageLogo} className="w-12 h-12 " />
          <h1 className={`text-black origin-left font-medium text-xl`}>
            Students Portal
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-black-300 text-base flex justify-start px-14 py-3 gap-x-8 cursor-pointer p-2 hover:bg-dark-grey"
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <img src={swcLogo} />
        <div className="text-xs font-semibold text-[#BBBCC0] ml-1">
          Copyrights @SWC_2022
        </div>
      </div>
    </div>
  );
}
