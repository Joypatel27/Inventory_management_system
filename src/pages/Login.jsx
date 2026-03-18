import React, { useState } from "react";
import "../styles/CreateAccount.css";
import "../styles/Login.css";
import "../styles/AuthLayout.css";
import { InputField } from "../components/form/InputField";
import avatar from "../assets/avatar.svg";
import { useNavigate, Link } from "react-router-dom";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";
import { AuthAvatar } from "../components/auth/AuthAvatar";
import { PrimaryButton } from "../components/auth/PrimaryButton";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
     <AuthHeader />

      {/* Login Card */}
      <div className="login-card">
        {/* Avatar */}
        <AuthAvatar svg={avatar} />

        <h4 className="text-center">Login to your account</h4>
        <p className="text-muted text-center">Enter your details to login.</p>

        <hr />
        <form>
          {/* Email */}
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter your email"
            icon="fa-regular fa-envelope"
          />

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
              <input type="checkbox" />
              Keep me logged in
            </label>

            <a className="forgot" onClick={() => navigate("/forgot-password")}>
              Forgot password?
            </a>
          </div>
        </form>

        {/* Login Button */}
                  <PrimaryButton text="Login" type="submit" onClick={() => navigate("/dashboard")} />

        <p className="text-center text-muted small mt-2">
          Don't have an account? <Link to="/create-account">Sign Up Now</Link>
        </p>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};
