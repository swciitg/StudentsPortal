import React, { useEffect, useState } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import Registration from "./DashboardTiles/Registration";
import MyProfile from "./DashboardTiles/MyProfile";
import ApprovedRequests from "./DashboardTiles/ApprovedRequests";
import PendingRequests from "./DashboardTiles/PendingRequests";
import BuildMyCV from "./DashboardTiles/BuildMyCV";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";
import CryptoJS from "crypto-js";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const ENCRYPTION_KEY = "HELLO_WoRLD";
  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }
  const [user, setuser] = useState();
  const [data,setData]=useState('')
  useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users/user-details",
          {
            email: decryptEmail(encryptedEmail),
            token: localStorage.getItem("token"),
          }
        );

        if (response.status === 200) {
          const user = response.data;
          setuser(user);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error.message);
        navigate("/");
      }
    }
    UserDetails();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    async function Requests() {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/request/request-details",
          {
            "Sender email": decryptEmail(encryptedEmail) + "@iitg.ac.in",
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Requests();
  }, [encryptedEmail]);
  // const ManageRequests = [
  //   {
  //     id: 1,
  //     status: "New POR Request uploaded: Designer SWC",
  //     Date: "18/12/22",
  //   },
  //   {
  //     id: 2,
  //     status: "New POR Request uploaded: E-Cell Core De...",
  //     Date: "18/12/22",
  //   },
  // ];
  // const ApprovedRequests_data = [
  //   {
  //     id: 1,
  //     status: "POR: Designer SWC",
  //     Date: "18/12/22",
  //   },
  //   {
  //     id: 2,
  //     status: "LOR: By Prof. Pankaj Upa....",
  //     Date: "18/12/22",
  //   },
  //   {
  //     id: 3,
  //     status: "LOR: By Prof. Pankaj Upa....",
  //     Date: "18/12/22",
  //   },
  //   {
  //     id: 4,
  //     status: "LOR: By Prof. Pankaj Upa....",
  //     Date: "18/12/22",
  //   },
  // ];

  // const PendingRequests_data = [
  //   {
  //     id: 1,
  //     POR: "POR: Design Head E-Cell",
  //     description: "Waiting for approval from General Secretary E-Cell",
  //     status: "Pending",
  //     Date: "18/12/22",
  //   },
  //   {
  //     id: 2,
  //     POR: "POR: Design Head E-Cell",
  //     description:
  //       "Your Request has been Forwaded to Sahil Nizam By General Secretary of E-Cell for Confirmation",
  //     status: "Pending",
  //     Date: "18/12/22",
  //   },
  // ];

  return (
    <div className=" relative h-screen w-[100%]">
      {/*Side Navbar */}

      <Student_Navbar encryptedEmail={encryptedEmail} />

      {/*Tiles Area*/}

      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection encryptedEmail={encryptedEmail} />

        <div className="flex flex-col gap-10 lg:gap-5 lg:grid lg:grid-cols-10 pb-10 lg:pb-0 ">
          {/* Tile 1*/}

          <Registration
            user={user}
            ManageRequests={data}
            encryptedEmail={encryptedEmail}
          />

          {/* Tile 2*/}

          <MyProfile user={user} encryptedEmail={encryptedEmail} />
      

          {/* Tile 4*/}

          <ApprovedRequests
            ApprovedRequest={data}
            encryptedEmail={encryptedEmail}
          />

          {/* Tile 5*/}

          <PendingRequests
            PendingRequest={data}
            encryptedEmail={encryptedEmail}
          />

          {/* Tile 6*/}

          <BuildMyCV encryptedEmail={encryptedEmail} />
        </div>
      </div>
    </div>
  );
}

export default Home;
