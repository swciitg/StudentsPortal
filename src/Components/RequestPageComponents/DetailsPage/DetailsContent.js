import React from "react";
import { Link } from "react-router-dom";
import Button from "../../HomePageComponents/Button";

const DetailsContent = (prop) => {
  return (
    <div className="p-6 bg-dark-white h-screen">
      <div>
        <Link to="/request">Request list</Link>
      </div>
      <div className="bg-white mt-6 w-[75rem]">
        <div className="text-3xl font-semibold px-6 py-6">
          POR Request {prop.por}
        </div>
        <div className="flex justify-between ml-4 mr-4">
          <div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">Sender Name</div>
              <div className="text-lg font-semibold px-2">{prop.name}</div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">Project Name</div>
              <div className="text-lg font-semibold px-2">
                {prop.projectName}
              </div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">
                Role in the Project
              </div>
              <div className="text-lg font-semibold px-2">{prop.role}</div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">
                Name of the Organisation
              </div>
              <div className="text-lg font-semibold px-2">
                {prop.organisation}
              </div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">Parent Body</div>
              <div className="text-lg font-semibold px-2">
                {prop.parentBody}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">
                Sender Roll No.
              </div>
              <div className="text-lg font-semibold px-2">{prop.rollNo}</div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">Sender Mail ID</div>
              <div className="text-lg font-semibold px-2">{prop.mail}</div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">
                Request Validation Required from
              </div>
              <div className="text-lg font-semibold px-2">
                {prop.validationFrom}
              </div>
            </div>
            <div className="mt-[3.2rem]">
              <div className="text-md text-light-grey px-2">
                Document Supporting Claim
              </div>
              <div className="text-lg font-semibold px-2">
                <input type="file" />
              </div>
            </div>
            <div className="mt-[2.5rem]">
              <div className="text-md text-light-grey px-2">
                Document Requested by sender
              </div>
              <div className="text-lg font-semibold px-2">
                {prop.requestedFromSender}
              </div>
            </div>
          </div>
          <div className="mt-[3.2rem] mb-[3.2rem] mr-4">
            <div className="mb-2">Senders Id Photograph</div>
            <div className="w-[20rem] h-[16rem] bg-dark-grey">
              <img src="" alt="image" />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[18rem] ml-[1.5rem] py-8">
          <Link to="/request/details/approve">
            <Button value="Approve" />
          </Link>
          <Link to="/request/details/deny">
            <Button value="Deny" />
          </Link>
          <Link to="/request/details/forward">
            <Button value="Forward" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
