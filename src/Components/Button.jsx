import React from "react";

const Button = (prop) => {
  return (
    <div className="mt-4">
      <button className="px-5 py-1.5 bg-regal-blue text-white font-normal shadow-md">
        {prop.value}
      </button>
    </div>
  );
};

export default Button;
