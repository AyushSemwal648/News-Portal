import React from "react";

const Button = ({ children, url }) => {

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
