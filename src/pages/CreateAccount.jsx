import React from "react";
import "../styles/CreateAccount.css";
import "../assets/logo.png";
import avatar from "../assets/avatar.svg";  
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center">

      {/* Header */}
      <header className="position-absolute top-0 start-0 p-3">
        <img src={logo} width={40} height={40} alt="logo" />
      </header>

      {/* Card */}
      <div className="card shadow-sm border-0 p-4 register-card">

        {/* Avatar */}
        <div className="avatar mb-3">
          <img src={avatar} alt="avatar" />
        </div>

        <h4 className="text-center mb-1">Create a new account</h4>
        <p className="text-muted small text-center">
          Enter your details to Sign up.
        </p>

        <hr />

        {/* Form */}
        <form>

          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label small">Full Name</label>

            <div className="input-icon">
              <i className="fa-regular fa-circle-user"></i>
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Department */}
          <div className="mb-3">
            <label className="form-label small">Department</label>

            <div className="input-icon">
              <i className="fa-regular fa-building"></i>
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Enter your department"
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-3">
            <label className="form-label small">Role</label>

            <div className="d-flex gap-2">
              <button type="button" className="btn  w-50">
                Employee
              </button>

              <button type="button" className="btn  w-50">
                Support engineer
              </button>
            </div>
          </div>

          {/* Next Button */}
          <button className="btn btn-primary w-100 mt-2" onClick={() => navigate("/register")}>
            Next
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-muted small mt-2">
          Already have an account? <a href="#">Login</a>
        </p>

      </div>

      {/* Footer */}
      <div className="position-absolute bottom-0 start-0 p-3 small text-muted">
        © 2026 Inventory management system
      </div>

    </div>
  );
};









