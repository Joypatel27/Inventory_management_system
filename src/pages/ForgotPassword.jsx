import React from "react";
import "../styles/CreateAccount.css";
import "../styles/ForgotPassword.css";
import "../styles/AuthLayout.css";
import { InputField } from "../components/form/InputField";
import forgot from "../assets/forgot.svg";
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
      <AuthHeader />
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
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter your email"
            icon="fa-regular fa-envelope"
          />
        </form>

        {/* Send OTP Button */}
        <button
          className="btn btn-primary w-100 mt-2"
          onClick={() => navigate("/verify-otp")}
        >
          Sent OTP
        </button>

        {/* Back */}
        <div className="back-btn mt-4 " onClick={() => navigate("/login")}>
          ← Back
        </div>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};
