import React, { useState } from "react";

export const PasswordField = ({ label, placeholder, value, onChange }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">

      <label className="form-label">{label}</label>

      <div className="password-box">

        <i className="fa-solid fa-lock left-icon"></i>

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}

          
        />

        <i
          className={`fa-solid ${
            showPassword ? "fa-eye" : "fa-eye-slash"
          } right-icon`}
          onClick={() => setShowPassword(!showPassword)}
        ></i>

      </div>

    </div>
  );
};