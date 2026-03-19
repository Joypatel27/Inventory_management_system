import React from "react";
import { AuthHeader } from "../components/auth/authHeader";
import { AuthFooter } from "../components/auth/AuthFooter";
import { AuthAvatar } from "../components/auth/AuthAvatar";
import { PrimaryButton } from "../components/auth/PrimaryButton";
import { InputField } from "../components/form/InputField";
import "../styles/CreateAccount.css";
import "../styles/AuthLayout.css";
import avatar from "../assets/avatar.svg";
import departmenticon from "../assets/departmenticon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState,useEffect } from "react";

export const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const selectedRole = (e) => {
    
  }
  const handleNext = () => {
    // e.preventDefault();
    navigate("/register",{
      state:{
        fullName,
        department,
        role
      }
      // console.log
    });
  };
useEffect(() => {
  if (!location.state) {
    navigate("/create-account");
  }
}, []);
  return (
    <div className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center">
      <AuthHeader />

      <div className="card shadow-sm border-0 p-4 register-card">
        {/* Avatar */}
        <AuthAvatar svg={avatar} />

        <h4 className="text-center mb-1">Create a new account</h4>
        <p className="text-muted small text-center">
          Enter your details to Sign up.
        </p>

        <hr />

        {/* Form */}
        <form>
          {/* Full Name */}

          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            icon="fa-regular fa-circle-user size-md"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
          />

          {/* Department */}
          <div className="mb-2">
            <label className="form-label small">Department</label>

            <div className="input-icon">
              <img src={departmenticon} alt="department" className="input-svg" />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Enter your department"
                value={department}
                onChange={(e)=>setDepartment(e.target.value)}
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-2">
            <label className="form-label small">Role</label>

            <div className="d-flex gap-2">
              <button type="button" className={`btn ${role==="employee" ? "active":""} w-50`}onClick={() => setRole("employee")}>
                Employee
              </button>

              <button type="button" className={`btn ${role==="support_engineer" ? "active":""} w-50`}onClick={() => setRole("support_engineer")}>
                Support engineer
              </button>
            </div>
          </div>

          {/* Next Button */}
          {/* <button
            className="btn btn-primary w-100 mt-1"
            onClick={() => navigate("/register")}
          >
            Next
          </button> */}
          <PrimaryButton text="Next" type="button" onClick={handleNext} />
        </form>

        {/* Login */}
        <p className="text-center text-muted small mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/* Footer */}
      <AuthFooter />
      {/* <div className="position-absolute bottom-0 start-0 p-3 small text-muted">
        © 2026 Inventory management system
      </div> */}
    </div>
  );
};
