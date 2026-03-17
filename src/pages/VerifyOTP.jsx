import React, { useRef, useState } from "react";
import "../styles/CreateAccount.css";
import "../styles/OTP.css";
import "../styles/AuthLayout.css";
import logo from "../assets/logo.svg";
import emailVerification from "../assets/emailVerification.svg";
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";

export const VerifyOTP = () => {
  const [otp, setOtp] = useState(["2", "7", "0", "4"]);

  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Header */}
       <AuthHeader />
      {/* Card */}
      <div className="otp-card text-center">
        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={emailVerification} alt="email verification" />
        </div>

        <h4>Email verification Code</h4>

        <p className="text-muted small">
          We've sent a code at <b>user@mail.com</b>
        </p>

        <hr />

        {/* OTP Inputs */}
        <div className="otp-container">
          {[0, 1, 2, 3].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-input"
              value={otp[index]}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        {/* Submit */}
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => navigate("/reset-password")}
        >
          Submit Code
        </button>

        {/* Resend */}
        <p className="small text-muted mt-3">
          Experiencing issues receiving the code?
        </p>

        <a href="#" className="resend-link">
          Resend
        </a>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};
