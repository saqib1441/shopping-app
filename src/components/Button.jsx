import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button type={type} className="bg-black text-white rounded px-5 py-2">
      {children}
    </button>
  );
};

export default Button;