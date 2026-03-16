import React, { useState } from "react";
import "../styles/CreateAccount.css";
import "../styles/Register.css";

import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
      <header className="position-absolute top-0 start-0 p-3">
        <img src={logo} alt="logo" width={40} height={40}  />
      </header>

      {/* Card */}
      <div className="register-card">
        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={avatar} alt="avatar" />
        </div>

        <h4 className="text-center">Register for System Access</h4>
        <p className="text-muted text-center">Enter your details to Sign up.</p>

        <hr />

        <form>
          {/* Email */}
          <div className="mb-2">
            <label className="form-label">Email address</label>

            <div className="input-icon">
              <i className="fa-regular fa-envelope"></i>

              <input
                type="email"
                className="form-control ps-5"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>

            <div className="password-box">
              <i className="fa-solid fa-lock left-icon"></i>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />

              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } right-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>

            <div className="password-box">
              <i className="fa-solid fa-lock left-icon"></i>

              <input
                type={showConfirmPassword ? "text" : "password"}
                // className="form-control ps-5"
                placeholder="Confirm password"
              />

              <i
                className={`fa-solid ${
                  showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                } right-icon`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>
        </form>

        {/* Register Button */}
        <button
          className="btn btn-primary w-100 mt-1"
          onClick={() => navigate("/login")}
        >
          Register
        </button>

        {/* Back */}
        <div
          className=" mt-2 back-btn"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/create-account")}
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
