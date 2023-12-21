import React, { useState } from "react";
import PropTypes from 'prop-types'; 

function CreateClubPORStep2({onNext,formData,setFormData}) {
  CreateClubPORStep2.propTypes = {
    onNext: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
  };
  
  const [Tenure, SetTenur] = useState("");
  const [Validation, SetValidation] = useState("");
  const TenureOptions = [
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
  ];
  const ValidationOptions = ["General secretary", "Vice President"];
  const handleNext = () => {
    setFormData({ ...formData, Tenure: Tenure, Validation: Validation  });
    onNext();
  };
  return (
    <div className="flex justify-center items-center h-full">
    <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-3">
          You’re almost there!
        </p>
        <img src="/progress-bar2.svg" />
      </div>
      <div>
        <label className="flex flex-col gap-1 my-6">
          <span className="font-medium text-base">
            Select your year of Tenure
          </span>
          <select
            className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
            onChange={(e) => {
              SetTenur(e.target.value);
              SetValidation("");
            }}
          >
            <option hidden>Select Category</option>
            {TenureOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 my-6">
          <span className="font-medium text-base">
            From whom it should be Validated
          </span>
          {Tenure ? (
            <select
              className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3 "
              onChange={(e) => {
                SetValidation(e.target.value);
              }}
            >
              <option hidden>Select Category</option>
              {ValidationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3 "
              onChange={(e) => {
                SetValidation(e.target.value);
              }}
            >
              <option>Select Category</option>
            </select>
          )}
        </label>
        
      </div>

      <div className="flex justify-between mt-10">
        <div
          className="text-[#2164E8] "
        >
          Go Back
        </div>
        {Tenure.length > 0 && Validation.length > 0 ? (
          <div
          onClick={handleNext}
          >
            <button className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
              Next
            </button>
          </div>
        ) : (
          <div>
            <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default CreateClubPORStep2;
