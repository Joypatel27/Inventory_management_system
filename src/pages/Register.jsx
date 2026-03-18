import React, { useState } from "react";
import { InputField } from "../components/form/InputField";
import { PasswordField } from "../components/form/PasswordField";
import "../styles/CreateAccount.css";
import "../styles/Register.css";
import "../styles/AuthLayout.css";
import avatar from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";
import { AuthAvatar } from "../components/auth/AuthAvatar";
import { PrimaryButton } from "../components/auth/PrimaryButton";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          />

          {/* Password */}
          <PasswordField label="Password" placeholder="Enter password" />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm password"
          />
        </form>

        {/* Register Button */}
                 <PrimaryButton text="Register" type="submit" onClick={() => navigate("/login")} />
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
