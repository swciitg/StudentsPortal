import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateLORStep2({ onNext, formData, setFormData }) {
  CreateLORStep2.propTypes = {
    onNext: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
  };

  const [ValidatorMail, SetValidatorMail] = useState("");
  const [Validator, SetValidator] = useState("");

  const handleNext = () => {
    setFormData({
      ...formData,
      ValidatorMail: ValidatorMail,
      Validation: Validator,
    });
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
            <span className="font-medium text-base">Name of Validator</span>
            <input
              onChange={(e) => {
                SetValidator(e.target.value);
              }}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="text"
              placeholder="Enter validator name"
            />
          </label>

          <label className="flex flex-col gap-1 my-6">
            <span className="font-medium text-base">Mail Id of Validator</span>
            <input
              onChange={(e) => {
                SetValidatorMail(e.target.value);
              }}
              className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
              type="text"
              placeholder="Enter mail id "
            />
          </label>
        </div>

        <div className="flex justify-between mt-10">
          <div className="text-[#2164E8] ">Go Back</div>
          {ValidatorMail.length > 0 && Validator.length > 0 ? (
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

export default CreateLORStep2;
