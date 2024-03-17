import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Checkmark from "../../../../assets/Checkmark.svg";
import registration from "../../../../assets/registration.svg";
import list from "../../../../assets/List.svg";
import down_arrow_grey from "../../../../assets/down-arrow-grey.svg";

function Registration({user,ManageRequests,encryptedEmail}) {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
 
  Registration.propTypes = {
    user: (
    PropTypes.shape({
      profileCompletion: PropTypes.number,
    })),
    ManageRequests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        status: PropTypes.string,
        Date: PropTypes.string,
      })
    ).isRequired,
    encryptedEmail: PropTypes.string.isRequired,
  };
  
  

  return (
    <div className="h-[100%] lg:mt-0 mt-10 flex flex-col gap-1 col-span-4  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      {toggle1 === false ? (
        <div className="bg-white  h-[60px]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
          <div className="flex gap-1 items-center">
            <div>Registration</div>
            <img src={Checkmark} width="20px " />
          </div>
          <img
            className="cursor-pointer "
            onClick={() => {
              setToggle1(true);
              setToggle2(false);
              setToggle3(false);
            }}
            src={down_arrow_grey}
          />
        </div>
      ) : (
        <div className="bg-white border-l-[6px] p-3 lg:pb-0 pb-4 border-[#2164E8]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2">
              <img src={registration} />
              <div className="text-xl font-semibold">Registration</div>
            </div>
          { user&& user.profileCompletion !== 100 ? (
              <div className="text-sm text-[#D83B01]">
                Your Profile is not complete!!
              </div>
            ) : (
              <div className="text-sm text-[#107C10]">
                Your Profile is complete!!
              </div>
            )}

            <p className="text-xs text-[#5F646C]">
              Complete the Registration process by updating your Profile in
              order to make Requests through this Portal.
            </p>
            <div className="flex justify-end ">
              <Link to={`/StudentDashboard/Profile?e=${encodeURIComponent(encryptedEmail)}`}>
                <button className="text-sm p-[5px] pl-3 pr-3  bg-[#2164E8]  my-2 text-white rounded">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {toggle2 === false ? (
        <div className="bg-white  h-[60px] shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
          <div>Request</div>
          <img
            className="cursor-pointer "
            onClick={() => {
              toggle2 === false ? setToggle2(true) : setToggle2(false);
              setToggle1(false);
              setToggle3(false);
            }}
            src={down_arrow_grey}
          />
        </div>
      ) : (
        <div className="bg-white border-l-[6px] p-3 lg:pb-0 pb-4 border-[#2164E8]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
          <div className="flex gap-2">
            <img src={list} />
            <div className="text-xl font-semibold">Request</div>
          </div>
          <div className=" pr-5">
            {" "}
            <p className="text-sm mt-3">
              Can put some text here explaining what requests are and what kinda
              request we can put like POR, LOR, etc.
            </p>
          </div>
          <div className=" flex justify-end ">
            <Link to={`/StudentDashboard/CreateRequest?e=${encodeURIComponent(encryptedEmail)}`}>
              <button className="text-sm p-[5px] pl-3   my-2 mt-4 pr-3 bg-[#2164E8] text-white rounded">
                Make a Request
              </button>
            </Link>
          </div>
        </div>
      )}
      {toggle3 === false ? (
        <div className="bg-white   h-[60px]  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] flex items-center justify-between text-[#BCBEC2] pl-4 pr-4">
          <div>Manage requests</div>
          <img
            className="cursor-pointer "
            onClick={() => {
              toggle3 === false ? setToggle3(true) : setToggle3(false);
              setToggle1(false);
              setToggle2(false);
            }}
            src={down_arrow_grey}
          />
        </div>
      ) : (
        <div className="bg-white border-l-[6px] p-3 lg:pb-0 pb-4  border-[#2164E8]   shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
          <div className="flex gap-2">
            <img src={registration} />
            <div className="text-xl font-semibold">Manage Requests</div>
          </div>
          <div className="flex gap-1 flex-col lg:my-0 my-2">
            {ManageRequests.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-[#EFF6FC] p-2 flex justify-between items-center"
              >
                <p className=" text-sm">{item.subject}</p>
                <p className="text-xs text-[#494D57]">{item.Request_sent_date}</p>
              </div>
            ))}
          </div>
          <div className=" flex justify-end ">
            <Link to={`/StudentDashboard/History?e=${encodeURIComponent(encryptedEmail)}`}>
              <button className="text-sm p-[5px] pl-3 pr-3 my-2  bg-[#2164E8] text-white rounded">
                Check my History
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
