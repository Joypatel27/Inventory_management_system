import React from "react";

export const AuthAvatar = ({ svg }) => {
  return (
    <div className="avatar mb-3">
      <img src={svg} alt="auth" />
    </div>
  );
};