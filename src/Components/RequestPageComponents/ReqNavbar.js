import React, { useState } from "react";
import CommonHeader from "./CommonHeader";
import ReqListPOR from "./ReqListPOR";
import CommonListHeader from "./CommonListHeader";
import ReqListProjectValidation from "./ReqListProjectValidation";
import ReqListLOR from "./ReqListLOR";
import ReqListInterIITParticipation from "./ReqListInterIITParticipation";
import ReqListCrBrPOR from "./ReqListCrBrPOR";

const ReqNavbar = () => {
  const [active, setActive] = useState("por");

  return (
    <div>
      <div className="flex justify-around w-[48rem] mt-4">
        <div
          className="px-8 py-2 hover:border-b-2 border-b-real-blue"
          onClick={() => setActive("por")}
        >
          POR
        </div>
        <div
          className="px-8 py-2 hover:border-b-2 border-b-real-blue"
          onClick={() => setActive("projectValidation")}
        >
          Project Validation
        </div>
        <div
          className="px-8 py-2 hover:border-b-2 border-b-real-blue"
          onClick={() => setActive("lor")}
        >
          LOR
        </div>
        <div
          className="px-8 py-2 hover:border-b-2 border-b-real-blue"
          onClick={() => setActive("interIITParticipation")}
        >
          Inter IIT Participation
        </div>
        <div
          className="px-8 py-2 hover:border-b-2 border-b-real-blue"
          onClick={() => setActive("crBrPOR")}
        >
          CR/BR POR
        </div>
      </div>
      <CommonHeader />
      <CommonListHeader />
      <div className="mt-4">{active === "por" && <ReqListPOR />}</div>
      <div className="mt-4">
        {active === "projectValidation" && <ReqListProjectValidation />}
      </div>
      <div className="mt-4">{active === "lor" && <ReqListLOR />}</div>
      <div className="mt-4">
        {active === "interIITParticipation" && <ReqListInterIITParticipation />}
      </div>
      <div className="mt-4">{active === "crBrPOR" && <ReqListCrBrPOR />}</div>
    </div>
  );
};

export default ReqNavbar;
