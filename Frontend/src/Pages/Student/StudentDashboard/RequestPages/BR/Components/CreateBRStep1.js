import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateBRStep1({ onNext, formData, setFormData }) {
  CreateBRStep1.propTypes = {
    onNext: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
  };

  const ValidationOptions = ["Branch rep", "Class Rep"];
  const Departments = [
    "Department of Biosciences and Bioengineering",
    "Department of Chemical Engineering",
    "Department of Chemistry",
    "Department of Civil Engineering",
    "Department of Computer Science and Engineering",
    "Department of Design",
    "Department of Electronics & Electrical Engineering ",
    "Department of Humanities and Social Sciences",
    "Department of Mathematics",
    "Department of Mechanical Engineering",
    "Department of Physics",
  ];
  const TenureOptions = [
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
  ];

  const [Request, SetRequest] = useState("");
  const [Department, SetDepartment] = useState("");
  const [Tenure, SetTenure] = useState("");

  const handleNext = () => {
    setFormData({
      ...formData,
      Request: Request,
      Department: Department,
      Tenure: Tenure,
    });
    onNext();
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex flex-col gap-2  items-center">
          <p className="text-[rgb(27,33,45)] text-center font-semibold text-2xl mb-3">
            Create request in 3 steps
          </p>
          <img className="text-center" src="/progress-bar1.svg" />
        </div>
        <div>
          <label className="flex flex-col gap-1 my-6">
            <span className="font-medium text-base">
              Type of Validation request
            </span>
            <select
              className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              onChange={(e) => {
                SetRequest(e.target.value);
              }}
            >
              <option hidden>Select Category</option>
              {ValidationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 my-6">
            <span className="font-medium text-base">Department</span>
            <select
              className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              onChange={(e) => {
                SetDepartment(e.target.value);
              }}
            >
              <option hidden>Select Category</option>
              {Departments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 my-6">
            <span className="font-medium text-base">Select year of tenure</span>
            <select
              className="border px-2 py-[7px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              onChange={(e) => {
                SetTenure(e.target.value);
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
        </div>
        <div className="flex justify-end mt-10">
          {Department.length > 0 && Tenure.length > 0 && Request.length > 0 ? (
            <div>
              <button
                onClick={handleNext}
                className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
              >
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

export default CreateBRStep1;
