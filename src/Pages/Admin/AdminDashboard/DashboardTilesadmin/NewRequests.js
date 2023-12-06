import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function NewRequests(props) {
  const [CurrentWidth, SetCurrentWidth] = useState(window.innerWidth);
  useEffect(() => {
    SetCurrentWidth(window.innerWidth);
  }, []);
  NewRequests.propTypes = {
    NewRequests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        Title: PropTypes.string,
        description: PropTypes.string,
        Date: PropTypes.string,
      })
    ),
  };
  return (
    <div className="border-l-[5px] border-[#2164E8] col-span-3 p-7 w-full mb-7  flex flex-col gap-4 pb-4 bg-white  shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        <div className="flex gap-2 items-center">
          <div className=" text-xl font-semibold">New Requests received</div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          {props.NewRequests.map((item) => (
            <div
              key={item.id}
              className=" flex border p-2   justify-between items-center"
            >
              <div className="flex flex-col w-[70%]">
                <div>{item.Title}</div>
               {CurrentWidth>1024&& <div className=" text-xs text-[#494D57]">
                  {item.description}
                </div>}
              </div>
              <div className="flex flex-col  items-center gap-7 ">
                <p className=" text-sm">{item.Date}</p>
                  <div className="text-[#2164E8] flex items-center text-sm gap-1">
          <div className=" text-xs lg:text-base whitespace-nowrap">View Details</div>
          <img src="/Arrow-right.svg" />
        </div>
              </div>
            </div>
          ))}
          <Link to="/AdminDashboard/Request">
            <button className="text-sm mt-1 p-[5px] pl-3 pr-3 bg-[#2164E8] text-white rounded">
            View all Requests
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewRequests;
