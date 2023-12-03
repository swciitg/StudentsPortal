import React from "react";
import imageLogo from "../Components/HomePageComponents/Images/iitg.png";
import swcLogo from "../Components/HomePageComponents/Images/Path 18.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const styles = {
    className:
      "text-black-300 text-base flex justify-start px-14 py-3 gap-x-8 cursor-pointer p-2 hover:bg-dark-grey",
    activeClassName:
      "bg-dark-grey text-black-300 text-base flex justify-start px-14 py-3 gap-x-8 cursor-pointer p-2",
  };
  const links = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/",
      name: "Home",
      key: 1,
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/profile",
      name: "Profile",
      key: 2,
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/request",
      name: "Request",
      key: 3,
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/history",
      name: "History",
      key: 4,
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/requestForwards",
      name: "Request Forwards",
      key: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className={`w-72 h-[42rem]`}>
        <div className="flex items-center justify-center mt-8">
          <img src={imageLogo} className="w-12 h-12 " />
          <h1 className={`text-black origin-left font-medium text-xl`}>
            Students Portal
          </h1>
        </div>
        <ul className="pt-6">
          {links.map((link) => (
            <NavLink
              className={link.className}
              activeClassName={link.activeClassName}
              to={link.to}
              key={link.key}
            >
              {link.name}
            </NavLink>
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
