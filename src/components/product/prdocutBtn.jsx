import React from "react";

export const ProductBtn = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-transparent border-none outline-none"
    >
      {children}
    </button>
  );
};
