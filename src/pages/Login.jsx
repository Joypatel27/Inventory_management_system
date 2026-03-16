import React, { useState } from "react";
import "../styles/CreateAccount.css";
import "../styles/Login.css";

import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

      {/* Header */}
      <header className="position-absolute top-0 start-0 p-3">
        <img src={logo} alt="logo" width={40} height={40}  />
      </header>

      {/* Login Card */}
      <div className="login-card">

        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={avatar} alt="avatar"/>
        </div>

        <h4 className="text-center">Login to your account</h4>
        <p className="text-muted text-center">
          Enter your details to login.
        </p>

        <hr/>
        <form>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>

            <div className="input-icon position-relative">
              <i className="fa-regular fa-envelope left-icon"></i>

              <input
                type="email"
                className="form-control ps-5"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
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

          {/* Remember + Forgot */}
          <div className="login-options">

            <label className="remember">
              <input type="checkbox"/>
              Keep me logged in
            </label>

            <a  className="forgot" onClick={() => navigate("/forgot-password")}>
              Forgot password?
            </a>

          </div>

        </form>

        {/* Login Button */}
        <button className="btn btn-primary w-100 mt-3" onClick={() => navigate("/dashboard")}>
          Login
        </button>

      </div>

      {/* Footer */}
      <div className="position-absolute bottom-0 start-0 p-3 small text-muted">
        © 2026 Inventory management system
      </div>

    </div>
  );
};