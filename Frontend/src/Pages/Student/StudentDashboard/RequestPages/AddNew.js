import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Student_Navbar from "../../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "../CornerProfileLogoutSection";

function AddNewRequest() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const [document, SetDocument] = useState("");
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail} />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection encryptedEmail={encryptedEmail} />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
            <div className="flex flex-col gap-2 items-center ">
              <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-3">
                Add New Request
              </p>
            </div>
            <div>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">
                  Any necessary document supporting claim
                </span>
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">Upload Document</span>
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">
                  Request of any document from authority
                </span>
                <input
                  onChange={(e) => {
                    SetDocument(e.target.value);
                  }}
                  className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                  type="text"
                  placeholder="Document name"
                />
                <p className="text-xs mt-1 text-[#939393]">
                  Enter NA if no document is needed
                </p>
              </label>
            </div>
            <div className="flex justify-end mt-10">
              {document.length > 0 ? (
                <Link
                  to={`/StudentDashboard/CreateRequest/success?e=${encodeURIComponent(
                    encryptedEmail
                  )}`}
                >
                  <button className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
                    Submit
                  </button>
                </Link>
              ) : (
                <div>
                  <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewRequest;
