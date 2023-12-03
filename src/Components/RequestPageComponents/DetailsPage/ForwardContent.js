import React from "react";
import { Link } from "react-router-dom";
import Button from "../../HomePageComponents/Button";

const ForwardContent = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-dark-white h-screen w-[78rem]">
      <div className="bg-white mt-6 w-[25rem] h-[30rem] shadow-md flex flex-col ">
        <div className="text-2xl font-semibold px-8 py-6">Forward Request</div>
        <div className="px-8 text-sm font-medium mt-4">Name of the Person</div>
        <div className="px-8 text-sm">
          <input
            type="text"
            className="border-2 border-light-grey px-2 mt-4 rounded-md w-[20rem]"
          />
        </div>
        <div className="px-8 text-sm font-medium mt-4">Mail ID</div>
        <div className="px-8 text-sm">
          <input
            type="text"
            className="border-2 border-light-grey px-2 mt-4 rounded-md w-[20rem]"
          />
        </div>
        <div className="px-8 text-sm font-medium mt-4">
          Any message for the person
        </div>
        <div className="px-8">
          <textarea
            rows={4}
            cols={40}
            className="mt-4 rounded-md h-[5rem] w-[20rem] border-2 border-light-grey px-2"
          />
        </div>
        <div className="text-sm font-medium px-8 flex justify-between mt-6">
          <div>
            <Link to="/request/details">Go Back</Link>
          </div>
          <div>
            <Button value="Forward" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardContent;
