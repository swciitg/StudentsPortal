import React from "react";
import { Link } from "react-router-dom";
import Button from "../../HomePageComponents/Button";

const DenyPageContent = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-dark-white h-screen w-[78rem]">
      <div className="bg-white mt-6 w-[25rem] h-[26rem] shadow-md flex flex-col ">
        <div className="text-2xl font-semibold px-8 py-6">Request Denial</div>

        <div className="px-8 text-sm font-medium mt-8">
          Reason for denying the request
        </div>
        <div className="px-8">
          <textarea
            rows={4}
            cols={40}
            className="mt-4 rounded-md h-[10rem] w-[20rem] border-2 border-light-grey px-2"
          />
        </div>
        <div className="text-sm font-medium px-8 flex justify-between mt-6">
          <div>
            <Link to="/request/details">Go Back</Link>
          </div>
          <div>
            <Button value="Deny request" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenyPageContent;
