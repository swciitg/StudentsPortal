import React from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import Registration from "./DashboardTiles/Registration";
import MyProfile from "./DashboardTiles/MyProfile";
import ForwardNotification from "./DashboardTiles/ForwardNotification";
import ApprovedRequests from "./DashboardTiles/ApprovedRequests";
import PendingRequests from "./DashboardTiles/PendingRequests";
import BuildMyCV from "./DashboardTiles/BuildMyCV";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";

function Home() {
  const user = {
    name: "Yash Chouhan",
    Program: "B.Des",
    Branch: "Design",
    Email: "y.chauhan@iitg.ac.in",
    ProfileCompletion: 100,
  };
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
  const ApprovedRequests_data = [
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
  const PendingRequests_data = [
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

  return (
    <div className=" relative h-screen w-[100%]">

      {/*Side Navbar */}

      <Student_Navbar />

      {/*Tiles Area*/}

      <div className=" absolute  h-screen w-[82%] ml-[18%] p-5 ">
      
      {/*Corner Profile Option*/}
<CornerProfileLogoutSection/>
       
        <div className=" grid gap-5 grid-cols-10 ">

          {/* Tile 1*/}

          <Registration user={user} ManageRequests={ManageRequests}/>

          {/* Tile 2*/}

          <MyProfile user={user} />

          {/* Tile 3*/}

          <ForwardNotification Notification={Notification} />

          {/* Tile 4*/}

          <ApprovedRequests ApprovedRequests={ApprovedRequests_data} />

          {/* Tile 5*/}

          <PendingRequests PendingRequests={PendingRequests_data}/>

          {/* Tile 6*/}

          <BuildMyCV />

        </div>
      </div>
    </div>
  );
}

export default Home;
