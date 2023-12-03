import React from "react";
import Button from "../HomePageComponents/Button";
import { Link } from "react-router-dom";

const RequestList = (prop) => {
  return (
    <div className="text-sm flex items-center justify-around w-[75rem] px-4 py-4 mt-[0.2rem] shadow-md bg-white">
      <div>1</div>
      <div>{prop.req}</div>

      <div className="ml-[11rem]">{prop.name}</div>

      <div>{prop.date}</div>
      <div>Pending</div>

      <div>
        <Button value="Withdraw" />
      </div>

      <div className="text-real-blue ml-12 cursor-pointer hover:underline">
        <Link to={prop.link}>Details</Link>
      </div>
    </div>
  );
};

export default RequestList;
