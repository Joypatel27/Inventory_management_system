import React, { useState } from "react";
import "../styles/CreateAccount.css";
import "../styles/Register.css";
import "../styles/ResetPassword.css";
import logo from "../assets/logo.png";
import avatar from "../assets/forgot.svg";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

      {/* Header */}
      <header className="position-absolute top-0 start-0 p-3">
        <img src={logo} alt="logo" width="40" height={40} />
      </header>

      {/* Card */}
      <div className="reset-card">

        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={avatar} alt="avatar"/>
        </div>

        <h4 className="text-center">Forget Password?</h4>

        <p className="text-muted text-center">
          Enter your email to reset your password.
        </p>

        <hr/>

        {/* Form */}
        <form>

          {/* New Password */}
          <div className="mb-3">
            <label className="form-label">New Password</label>

            <div className="password-box">
              <i className="fa-solid fa-lock left-icon"></i>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
              />

              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } right-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

          </div>

          {/* Retype Password */}
          <div className="mb-3">
            <label className="form-label">Retype Password</label>

            <div className="password-box">
              <i className="fa-solid fa-lock left-icon"></i>

              <input
                type={showRetypePassword ? "text" : "password"}
                placeholder="Retype password"
              />

              <i
                className={`fa-solid ${
                  showRetypePassword ? "fa-eye" : "fa-eye-slash"
                } right-icon`}
                onClick={() => setShowRetypePassword(!showRetypePassword)}
              ></i>
            </div>

          </div>
        </form>

        {/* Reset Button */}
        <button className="btn btn-primary w-100 mt-2"onClick={()=>navigate("/login")}>
          Reset Password
        </button>

        {/* Back */}
        <div
          className="back-btn mt-2"
          onClick={() => navigate("/login")}
        >
          ← Back
        </div>

      </div>

      {/* Footer */}
      <div className="position-absolute bottom-0 start-0 p-3 small text-muted">
        © 2026 Inventory management system
      </div>

    </div>
  );
};