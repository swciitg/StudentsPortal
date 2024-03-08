import React from "react";

function BuildMyCV() {
  return (
    <div className=" col-span-3  p-7 h-[350px] lg:h-[100%] bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div className="flex gap-2 items-center">
        <img src="BuildCV.svg" />
        <div className=" text-base">Build my CV</div>
      </div>
      <div className="flex justify-center items-center h-full text-[#8D9096]">
        Coming soon...
      </div>
    </div>
  );
}

export default BuildMyCV;
