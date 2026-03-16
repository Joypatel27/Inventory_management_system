import { useState } from 'react'

import './App.css'
import { CreateAccount } from './pages/CreateAccount'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { VerifyOTP } from './pages/VerifyOTP'
import { ResetPassword } from './pages/ResetPassword'
import { BrowserRouter,Route,Routes,Router, Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/create-account" />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
