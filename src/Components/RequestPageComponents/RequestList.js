import React from "react";
import Button from "../HomePageComponents/Button";
import { Link } from "react-router-dom";

const RequestList = (prop) => {
  return (
    <div className="text-sm flex items-center justify-start w-[75rem] px-4 py-4 mt-[0.2rem] shadow-md bg-white">
      <div className="ml-6">1</div>
      <div className="ml-16 w-[16rem]">{prop.req}</div>

      <div className="ml-4 w-[17.5rem]">{prop.name}</div>

      <div className="ml-6">{prop.date}</div>
      <div className="ml-16">Pending</div>

      <div className="ml-16">
        <Button value="Withdraw" />
      </div>

      <div className="text-real-blue ml-12 cursor-pointer hover:underline">
        <Link to={prop.link}>Details</Link>
      </div>
    </div>
  );
};

export default RequestList;
