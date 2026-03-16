import React from "react";
import "../styles/CreateAccount.css";
import "../styles/ForgotPassword.css";

import forgot from "../assets/forgot.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {

  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

      {/* Header */}
      <header className="position-absolute top-0 start-0 p-3">
        <img src={logo} alt="logo" width={40} height={40}  />
      </header>

      {/* Card */}
      <div className="forgot-card">

        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={forgot} alt="forgot" />
        </div>

        <h4 className="text-center">Forget Password?</h4>

        <p className="text-muted text-center">
          Enter your email to reset your password.
        </p>

        <hr />

        {/* Form */}
        <form>

          <div className="mb-3">
            <label className="form-label">Email Address</label>

            <div className="input-icon position-relative">

              <i className="fa-regular fa-envelope left-icon"></i>

              <input
                type="email"
                className="form-control ps-5"
                placeholder="Enter your email"
              />

            </div>

          </div>

        </form>

        {/* Send OTP Button */}
        <button className="btn btn-primary w-100 mt-2"onClick={()=>navigate("/verify-otp")}>
          Sent OTP
        </button>

        {/* Back */}
        <div
          className="back-btn mt-4 "
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