import React from "react";

export const PrimaryButton = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn btn-primary w-100 mt-2 primary-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};