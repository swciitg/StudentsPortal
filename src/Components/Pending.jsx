import React from "react";
import Listlogo from "../Images/List.png";
import PendingList from "./PendingList";

const Pending = () => {
  return (
    <div className="bg-white p-6 mt-4 w-96 mr-4">
      <div className="flex px-3">
        <img src={Listlogo} className="mr-1.5" />
        <span className="font-semibold">Pending Requests</span>
      </div>
      <div className="flex flex-col mt-4 items-center">
        <PendingList value="POR:Requests" />
        <PendingList value="POR:Requests" />
        <PendingList value="POR:Requests" />
        <PendingList value="POR:Requests" />
      </div>
      <div className="text-sm flex justify-end mt-8 py-1 w-80">
        <span className="text-real-blue hover:underline cursor-pointer">
          View All
        </span>
      </div>
    </div>
  );
};

export default Pending;
