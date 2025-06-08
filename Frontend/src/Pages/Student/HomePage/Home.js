import React, { useEffect, useState } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import Registration from "./DashboardTiles/Registration";
import MyProfile from "./DashboardTiles/MyProfile";
import ApprovedRequests from "./DashboardTiles/ApprovedRequests";
import PropTypes from "prop-types";
import PendingRequests from "./DashboardTiles/PendingRequests";
import BuildMyCV from "./DashboardTiles/BuildMyCV";
import CornerProfileLogoutSection from "../../../Components/CornerProfileLogoutSection";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ SERVER_URL }) {
  Home.propTypes = {
    SERVER_URL: PropTypes.string.isRequired,
  };
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const [user, setuser] = useState();
  const [data, setData] = useState("");
  useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          `${SERVER_URL}/users/user-details`,
          {
            email: email,
            token: localStorage.getItem("token"),
          }
        );

        if (response.status === 200) {
          const user = response.data;
          setuser(user);
        } else {
          // console.error(response.data.message);
        }
      } catch (error) {
        // console.error("Error:", error.message);
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
          `${SERVER_URL}/request/request-details`,
          {
            "Sender email": email + "@iitg.ac.in",
          }
        );
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        // console.log(error);
      }
    }
    Requests();
  }, [email]);
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

      <Student_Navbar SERVER_URL={SERVER_URL} />

      {/*Tiles Area*/}

      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection SERVER_URL={SERVER_URL} />

        <div className="flex flex-col gap-10 lg:gap-5 lg:grid lg:grid-cols-10 pb-10 lg:pb-0 ">
          {/* Tile 1*/}

          <Registration
            user={user}
            ManageRequests={data}
          />

          {/* Tile 2*/}

          <MyProfile user={user} />

          {/* Tile 4*/}

          <ApprovedRequests
            ApprovedRequest={data}
          />

          {/* Tile 5*/}

          <PendingRequests
            PendingRequest={data}
          />

          {/* Tile 6*/}

          <BuildMyCV />
        </div>
      </div>
    </div>
  );
}

export default Home;
