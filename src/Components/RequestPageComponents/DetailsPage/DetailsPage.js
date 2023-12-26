import React from "react";
import Navbar from "../../Navbar";
import DetailsContent from "./DetailsContent";

const DetailsPage = () => {
  return (
    <div className="flex">
      <Navbar />
      {
        <DetailsContent
          por="WEB Developer"
          name="XYZ"
          projectName="ABC"
          role="Head"
          organisation="Coding Club"
          parentBody="Techboard"
          rollNo="11111111"
          mail="someone@example.com"
          validationFrom="AAA"
          requestedFromSender="AAAA"
        />
      }
    </div>
  );
};

export default DetailsPage;
