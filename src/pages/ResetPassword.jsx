import React, { useState } from "react";
import { PasswordField } from "../components/form/PasswordField";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";
import "../styles/AuthLayout.css";
import "../styles/CreateAccount.css";
import "../styles/Register.css";
import "../styles/ResetPassword.css";
import avatar from "../assets/forgot.svg";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
      <AuthHeader />

      {/* Card */}
      <div className="reset-card">
        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={avatar} alt="avatar" />
        </div>

        <h4 className="text-center">Forget Password?</h4>

        <p className="text-muted text-center">
          Enter your email to reset your password.
        </p>

        <hr />

        {/* Form */}
        <form>
          <PasswordField
            label="New Password"
            placeholder="Enter new password"
          />

          <PasswordField
            label="Retype Password"
            placeholder="Retype password"
          />
        </form>

        {/* Reset Button */}
        <button
          className="btn btn-primary w-100 mt-2"
          onClick={() => navigate("/login")}
        >
          Reset Password
        </button>

        {/* Back */}
        <div className="back-btn mt-2" onClick={() => navigate("/login")}>
          ← Back
        </div>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};
