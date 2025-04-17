import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const buttonClass = variant === "primary" 
    ? "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
    : "bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600";
  
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
