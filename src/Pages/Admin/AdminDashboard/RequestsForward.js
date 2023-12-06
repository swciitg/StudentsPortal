import React from "react";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";
import Admin_Navbar from "../../../Components/Admin_Navbar";

function RequestsForwardadmin() {
  const ForwardRequest = [
    {
      id: 1,
      Name: "POR Request : Forward by Gen. Sec E-Cell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta non nec felis...",
      Date: "18/12/22",
    },
    {
      id: 1,
      Name: "POR Request : Forward by Gen. Sec E-Cell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta non nec felis...",
      Date: "18/12/22",
    },
    {
      id: 1,
      Name: "POR Request : Forward by Gen. Sec E-Cell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta non nec felis...",
      Date: "18/12/22",
    },
    {
      id: 1,
      Name: "POR Request : Forward by Gen. Sec E-Cell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta non nec felis...",
      Date: "18/12/22",
    },
    {
      id: 1,
      Name: "POR Request : Forward by Gen. Sec E-Cell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta non nec felis...",
      Date: "18/12/22",
    },
  ];
  return (
    <div className=" relative h-screen w-[100%]">
      <Admin_Navbar/>
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSectionadmin />
        <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg font-semibold ">Request Forwards</div>
        </div>
        <div className="  mt-2 flex flex-col gap-2">
         { ForwardRequest.map((data,index)=><div key={index} className="bg-white flex justify-between  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] border-l-4 w-full px-5 pl-3 py-4 border-[#2164E8]">
            <div className="flex flex-col w-[82%]  ">
              <div className="text-lg font-medium">
                {data.Name}
              </div>
              <div className="text-xs text-[#494D57] ">
                {data.description}
              </div>
            </div>
            <div className=" flex flex-col items-center justify-between">
              <div  className=" text-xs">
          {data.Date}
              </div>
              <div className="text-[#2164E8] flex items-center text-xs gap-1">
          <div className=" whitespace-nowrap">View Details</div>
          <img src="/Arrow-right.svg" />
        </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default RequestsForwardadmin;
