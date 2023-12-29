import React, { useState } from "react";
import Student_Navbar from "../../../../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "../../../CornerProfileLogoutSection";
import { Link, useLocation } from "react-router-dom";

function CreateInterIITStep1() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const [ParentBody, SetParentBody] = useState("");
  const [Organisation, SetOrganisation] = useState("");
  const [Event, SetEvent] = useState("");
  const ParentBodyOptions = [
    "Technical Board",
    "Sports Board",
    "Cultural Board",
  ];
  const OrganisationOptions = {
    "Technical Board": ["E-Cell", "SWC", "Coding Club", "FEC", "AI Club"],
    "Sports Board": [
      "Aquatics Club",
      "Basketball Club",
      "Cricket Club",
      "Table Tennis club",
      "Football Club",
      "Athletics Club",
      "Squash Club",
      "Badminton Club",
      "Weight Lifting Club",
    ],
    "Cultural Board": [
      "Octaves",
      "Fine Arts",
      "Expressions",
      "Cadence",
      "Anchoring Club",
    ],
  };
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar  encryptedEmail={encryptedEmail} />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection  encryptedEmail={encryptedEmail} />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
            <div className="flex flex-col gap-2  items-center">
              <p className="text-[rgb(27,33,45)] text-center font-semibold text-2xl mb-3">
                Create request in 3 steps
              </p>
              <img className="text-center" src="/progress-bar1.svg" />
            </div>
            <div>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">Parent Body</span>
                <select
                  className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                  onChange={(e) => {
                    SetParentBody(e.target.value);
                    SetOrganisation("");
                  }}
                >
                  <option hidden>Select Category</option>
                  {ParentBodyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">
                  Name of organisation
                </span>
                {ParentBody ? (
                  <select
                    className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3 "
                    onChange={(e) => {
                      SetOrganisation(e.target.value);
                    }}
                  >
                    <option hidden>Select Category</option>
                    {OrganisationOptions[ParentBody].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3 "
                    onChange={(e) => {
                      SetOrganisation(e.target.value);
                    }}
                  >
                    <option>Select Category</option>
                  </select>
                )}
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">Which event did you Participate in?</span>
                <input
                  onChange={(e) => {
                    SetEvent(e.target.value);
                  }}
                  className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                  type="text"
                  placeholder="Enter your Event name "
                />
              </label>
            </div>
            <div className="flex justify-end mt-10">
              {ParentBody.length > 0 &&
              Organisation.length > 0 &&
              Event.length > 0 ? (
                <Link
                  to={`/StudentDashboard/Request/InterIIT/2?e=${encodeURIComponent(encryptedEmail)}`}
                >
                  <button className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
                    Submit
                  </button>
                </Link>
              ) : (
                <Link>
                  <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
                    Submit
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInterIITStep1;
