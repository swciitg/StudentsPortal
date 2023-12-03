import React from "react";

const Button = (prop) => {
  return (
    <div>
      <button className="px-4 py-1 rounded-sm bg-regal-blue text-white font-normal shadow-md">
        {prop.value}
      </button>
    </div>
  );
};

export default Button;
