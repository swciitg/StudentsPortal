import React from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import Registration from "./DashboardTiles/Registration";
import MyProfile from "./DashboardTiles/MyProfile";
import ForwardNotification from "./DashboardTiles/ForwardNotification";
import ApprovedRequests from "./DashboardTiles/ApprovedRequests";
import PendingRequests from "./DashboardTiles/PendingRequests";
import BuildMyCV from "./DashboardTiles/BuildMyCV";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";
import { useLocation } from "react-router-dom";


function Home() {
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
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

      <Student_Navbar  encryptedEmail={encryptedEmail}/>

      {/*Tiles Area*/}

      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
      
      {/*Corner Profile Option*/}
<CornerProfileLogoutSection  encryptedEmail={encryptedEmail}/>
       
        <div className="flex flex-col gap-10 lg:gap-5 lg:grid lg:grid-cols-10 pb-10 lg:pb-0 ">

          {/* Tile 1*/}

          <Registration user={user} ManageRequests={ManageRequests}  encryptedEmail={encryptedEmail}/>

          {/* Tile 2*/}

          <MyProfile user={user}  encryptedEmail={encryptedEmail}/>

          {/* Tile 3*/}

          <ForwardNotification Notification={Notification} encryptedEmail={encryptedEmail} />

          {/* Tile 4*/}

          <ApprovedRequests ApprovedRequest={ApprovedRequests_data} encryptedEmail={encryptedEmail} />

          {/* Tile 5*/}

          <PendingRequests PendingRequest={PendingRequests_data} encryptedEmail={encryptedEmail}/>

          {/* Tile 6*/}

          <BuildMyCV  encryptedEmail={encryptedEmail}/>

        </div>
      </div>
    </div>
  );
}

export default Home;
