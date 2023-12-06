import React from "react";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";
import Admin_Navbar from "../../../Components/Admin_Navbar";
import PendingRequests from "./DashboardTilesadmin/PendingRequests";
import ForwardNotification from "./DashboardTilesadmin/ForwardNotification";
import NewRequests from "./DashboardTilesadmin/NewRequests";

function Home_admin() {
   const NewRequests_data=[
        {
            id:1,
            Title:'POR Request: E-Cell Design head request by Yash Chauhan ',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta n...',
            Date:'18/12/22',
        },
        {
            id:2,
            Title:'POR Request: E-Cell Design head request by Yash Chauhan ',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dolor dolor. Pellentesque eget est lectus. Donec in dui nunc. Nulla laoreet erat vitae ultricies eleifend. Ut purus felis, elementum a ornare sit amet, eleifend ut sapien. Duis tincidunt diam id mauris maximus porta n...',
            Date:'18/12/22',
        },
    ]
    const PendingRequests_data = [
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
  return (
    <div className=" relative h-screen w-[100%]">

      {/*Side Navbar */}

      <Admin_Navbar/>

      {/*Tiles Area*/}

      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
      
      {/*Corner Profile Option*/}
<CornerProfileLogoutSectionadmin/>
<NewRequests NewRequests={NewRequests_data}/>
<div className=" lg:flex lg:flex-row gap-7 flex flex-col">
    
<PendingRequests PendingRequests={PendingRequests_data}/>
<ForwardNotification Notification={Notification} />

</div>
      </div>
    </div>
  );
}

export default Home_admin;
