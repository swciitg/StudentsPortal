import React, { useState } from "react";
import CornerProfileLogoutSection from "../CornerProfileLogoutSection";
import Student_Navbar from "../../../../Components/Student_Navbar";
import { Link } from "react-router-dom";

function SelectValidation() {
  const [SelectedOption, SetSelectedOption] = useState("ClubPOR");
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" absolute flex flex-col  h-screen w-[82%] ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
            <div className="flex justify-center  mb-5">
              <p className="text-[rgb(27,33,45)] font-semibold mb-3">
                Select Validation request
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  defaultChecked
                  onChange={() => {
                    SetSelectedOption("ClubPOR");
                  }}
                  className=" appearance-none p-1 border-[#494D57]  border rounded-[50%] grid place-content-center  before:w-[0.6rem] before:h-[0.6rem] before:shadow-[inset_1em_1em_#2164E8]  before:rounded-[50%] before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Club POR"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("Student Body POR");
                  }}
                  className="   appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Student Body POR"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("Gymkhana POR");
                  }}
                  className="   appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Gymkhana POR"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("ProjectValidation");
                  }}
                  className="   appearance-none border-[#494D57]  p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Project Validation"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("LOR");
                  }}
                  className="   appearance-none border-[#494D57]  p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"LOR"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("InterIIT");
                  }}
                  className="  appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Inter IIT Participation Proof"}
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="radioGroup"
                  onChange={() => {
                    SetSelectedOption("BR");
                  }}
                  className="  appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
                />
                {"Class/Branch Representative"}
              </label>
            </div>
            <div className="flex justify-end mt-10">
              <Link
                to={
                  `/StudentDashboard/Request/${SelectedOption}/1`
                }
              >
                <button className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectValidation;
