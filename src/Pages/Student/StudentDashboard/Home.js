import React from "react";
import { Link } from "react-router-dom";
import Student_Navbar from "../../../Components/Student_Navbar";
import { useState } from "react";

function Home() {
  const user = {
    name: "Yash Chouhan",
    Program: "B.Des",
    Branch: "Design",
    Email: "y.chauhan@iitg.ac.in",
    ProfileCompletion: "100",
  };
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const Notification = [
    {
      id: 1,
      description:
        "Fr: Request For Design Head POR by Yash Chauhan, Forwaded by General Secretary SWC for C...",
      status: "Pending",
      Date: "18/12/22",
    },
    {
      id: 2,
      description:
        "Fr: Request For Design Head POR by Yash Chauhan, Forwaded by General Secretary SWC for C...",
      status: "Pending",
      Date: "18/12/22",
    },
  ];
  const PendingRequests = [
    {
      id: 1,
      POR: "POR: Design Head E-Cell",
      description: "Waiting for approval from General Secretary E-Cell",
      status: "Pending",
      Date: "18/12/22",
    },
    {
      id: 2,
      POR: "POR: Design Head E-Cell",
      description:
        "Your Request has been Forwaded to Sahil Nizam By General Secretary of E-Cell for Confirmation",
      status: "Pending",
      Date: "18/12/22",
    },
  ];
  const ManageRequests = [
    {
      id: 1,
      status: "New POR Request uploaded: Designer SWC",
      Date: "18/12/22",
    },
    {
      id: 2,
      status: "New POR Request uploaded: E-Cell Core De...",
      Date: "18/12/22",
    },
  ];
  const ApprovedRequests = [
    {
      id: 1,
      status: "POR: Designer SWC",
      Date: "18/12/22",
    },
    {
      id: 2,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
    {
      id: 3,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
    {
      id: 4,
      status: "LOR: By Prof. Pankaj Upa....",
      Date: "18/12/22",
    },
  ];
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" absolute  h-screen w-[82%] ml-[18%] p-5 ">
        <div className="flex p-3 -mt-3 mb-2 justify-end gap-2 items-center">
          <img src="/profile-blue.svg" />
          <Link
            to="/StudentDashboard/Profile"
            className="text-[rgba(33,100,232,1)]"
          >
            {user.name}
          </Link>
          <img src="/down-arrow.svg" />
        </div>
        <div className=" grid gap-5 grid-cols-10 ">
          {/* Tile 1*/}
          <div className="h-[100%] flex flex-col gap-1 col-span-4  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            {toggle1 === false ? (
              <div className="bg-white h-[20%]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
                <div className="flex gap-1 items-center">
                  <div>Registration</div>
                  <img src="/Checkmark.svg" width="20px " />
                </div>
                <img
                  className="cursor-pointer "
                  onClick={() => {
                    setToggle1(true);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                  src="/down-arrow-grey.svg"
                />
              </div>
            ) : (
              <div className="bg-white border-l-[6px] p-3 pb-0 border-[#2164E8] h-[60%]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
                <div className=" flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img src="/registration.svg" />
                    <div className="text-xl font-semibold">Registration</div>
                  </div>
                  <div className="text-sm text-[#107C10]">
                    Your Profile is complete!!
                  </div>
                  <p className="text-xs text-[#5F646C]">
                    Complete the Registration process by updating your Profile
                    in order to make Requests through this Portal.
                  </p>
                  <div className="flex justify-end ">
                    <Link to="/StudentDashboard/Profile">
                      <button className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8] text-white rounded">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {toggle2 === false ? (
              <div className="bg-white h-[20%]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
                <div>Request</div>
                <img
                  className="cursor-pointer "
                  onClick={() => {
                    toggle2 === false ? setToggle2(true) : setToggle2(false);
                    setToggle1(false);
                    setToggle3(false);
                  }}
                  src="/down-arrow-grey.svg"
                />
              </div>
            ) : (
              <div className="bg-white border-l-[6px] p-3 pb-0 border-[#2164E8] h-[60%]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
                <div className="flex gap-2">
                  <img src="/list.svg" />
                  <div className="text-xl font-semibold">Request</div>
                </div>
                <div className=" pr-5">
                  {" "}
                  <p className="text-sm mt-3">
                    Can put some text here explaining what requests are and what
                    kinda request we can put like POR, LOR, etc.
                  </p>
                </div>
                <div className=" flex justify-end ">
                  <Link to="/StudentDashboard/Request">
                    <button className="text-sm p-[5px] pl-3 mt-4 pr-3 bg-[#2164E8] text-white rounded">
                      Make a Request
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {toggle3 === false ? (
              <div className="bg-white h-[20%]    shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
                <div>Manage requests</div>
                <img
                  className="cursor-pointer "
                  onClick={() => {
                    toggle3 === false ? setToggle3(true) : setToggle3(false);
                    setToggle1(false);
                    setToggle2(false);
                  }}
                  src="/down-arrow-grey.svg"
                />
              </div>
            ) : (
              <div className="bg-white border-l-[6px] p-3 pb-0 border-[#2164E8] h-[60%]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
                <div className="flex gap-2">
                  <img src="/registration.svg" />
                  <div className="text-xl font-semibold">Manage Requests</div>
                </div>
                <div className="flex gap-1 flex-col">
                  {ManageRequests.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#EFF6FC] p-2 flex justify-between items-center"
                    >
                      <p className=" text-sm">{item.status}</p>
                      <p className="text-xs text-[#494D57]">{item.Date}</p>
                    </div>
                  ))}
                </div>
                <div className=" flex justify-end ">
                  <Link to="/StudentDashboard/History">
                    <button className="text-sm p-[5px] pl-3 pr-3 bg-[#2164E8] text-white rounded">
                      Check my History
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Tile 2*/}
          <div className=" col-span-3 flex flex-col justify-between p-7  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div>
              {" "}
              <div className="flex gap-2 items-center">
                <img src="/Profile-grey.svg" />
                <div className=" text-base">
                  My Profile
                  <span className=" text-xs font-semibold text-[rgba(16,124,16,1)]">
                    ({user.ProfileCompletion}% complete)
                  </span>
                </div>
              </div>
              <div className="mt-6 text-2xl font-semibold">{user.name}</div>
              <div className="mt-3">
                <div className="flex gap-2">
                  <img src="/branch.svg" />
                  <div>{user.Program}</div>
                </div>
                <div className="flex gap-2">
                  <img src="/tag.svg" />
                  <div>{user.Branch}</div>
                </div>
                <div className="flex gap-2">
                  <img src="/email.svg" />
                  <div>{user.Email}</div>
                </div>
              </div>
            </div>
            <Link
              to="/StudentDashboard/Profile"
              className="text-[#2164E8] text-sm flex justify-end"
            >
              View profile
            </Link>
          </div>
          {/* Tile 3*/}
          <div className="p-7 col-span-3 flex flex-col gap-3 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div>
              {" "}
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img src="/Notification.svg" />
                  <div>Forward Notification</div>
                </div>
                <div className="text-xs text-[#D83B01]">2 Unread</div>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                {Notification.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]"
                  >
                    <div className="w-[80%] text-xs font-medium ">
                      {item.description}
                    </div>
                    <div className=" items-center  flex flex-col gap-6 ">
                      <img src="/Bookmark-Notification.svg" width="10px" />
                      <div className="text-[0.60rem] text-[#494D57] ">
                        {item.Date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/StudentDashboard/RequestsForward"
              className="text-[#2164E8] text-sm flex justify-end "
            >
              View all Request Forwards
            </Link>
          </div>
          {/* Tile 4*/}
          <div className=" col-span-3 p-7 flex flex-col gap-4 pb-4 bg-white h-[100%] shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div>
              {" "}
              <div className="flex gap-2 items-center">
                <img src="/requests-approved.svg" />
                <div className=" text-base">Approved Requests</div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                {ApprovedRequests.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#EFF6FC] flex justify-between items-center p-2"
                  >
                    <p className=" text-sm">{item.status}</p>
                    <p className="text-sm text-[#494D57]">{item.Date}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/StudentDashboard/RequestsForward"
              className="text-[#2164E8] text-sm flex justify-end "
            >
              View all
            </Link>
          </div>
          {/* Tile 5*/}
          <div className=" col-span-4 p-7 flex flex-col justify-between pb-4  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div>
              {" "}
              <div className="flex gap-2 items-center">
                <img src="/requests-pending.svg" />
                <div className=" text-base">Pending Requests</div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                {PendingRequests.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 flex justify-center shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]"
                  >
                    <div className="w-11/12 text-sm">
                      {item.POR}, {item.description}
                    </div>
                    <div className=" items-center  flex flex-col gap-4 ">
                      <div className="text-[0.60rem] text-[#494D57] ">
                        {item.status}
                      </div>
                      <div className="text-[0.60rem] text-[#494D57] ">
                        {item.Date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/StudentDashboard/RequestsForward"
              className="text-[#2164E8] text-sm flex justify-end "
            >
              View all Pending Forwards
            </Link>
          </div>
          {/* Tile 6*/}
          <div className=" col-span-3 p-7 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
            <div className="flex gap-2 items-center">
              <img src="/BuildCV.svg" />
              <div className=" text-base">Build my CV</div>
            </div>
            <div className="flex justify-center items-center h-full text-[#8D9096]">
              Coming soon...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
