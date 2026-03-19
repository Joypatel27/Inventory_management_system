import React, { useState } from "react";
import { InputField } from "../components/form/InputField";
import { PasswordField } from "../components/form/PasswordField";
import "../styles/CreateAccount.css";
import "../styles/Register.css";
import "../styles/AuthLayout.css";
import avatar from "../assets/avatar.svg";
import {useLocation, useNavigate } from "react-router-dom";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";
import { AuthAvatar } from "../components/auth/AuthAvatar";
import { PrimaryButton } from "../components/auth/PrimaryButton";
// import { useLocation } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const { fullName, department, role } = location.state || {};
  console.log(location.state);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const data = {
      fullName,
      department,
      role,
      email,
      password,
    };
    console.log(data);
    navigate("/login");
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
      <AuthHeader />
      {/* Card */}
      <div className="register-card">
        {/* Avatar */}
        {/* <div className="avatar mb-3">
          <img src={avatar} alt="avatar" />
        </div> */}
        <AuthAvatar svg={avatar} />

        <h4 className="text-center">Register for System Access</h4>
        <p className="text-muted text-center">Enter your details to Sign up.</p>

        <hr />

        <form>
          {/* Email */}
          {/* <div className="mb-2">
            <label className="form-label">Email address</label>

            <div className="input-icon">
              <i className="fa-regular fa-envelope"></i>

              <input
                type="email"
                className="form-control ps-5"
                placeholder="Enter your email"
              />
            </div>
          </div> */}
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter your email"
            icon="fa-regular fa-envelope"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <PasswordField
            label="Password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>

        {/* Register Button */}
        <PrimaryButton
          text="Register"
          type="submit"
          onClick={handleRegister}
        />
        {/* Back */}
        <div
          className=" mt-2 back-btn"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/create-account")}
        >
          ← Back
        </div>
      </div>

      <AuthFooter />
    </div>
  );
};
