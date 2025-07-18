import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { doLogin } from '../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setLoginError('');
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setLoginError('');
  }

  const handleBtnClick = () => {
    let error = false;
    if (email === '') {
      setEmailError("Email is required");
      error = true;
    }
    if (password === '') {
      setPasswordError("Password is required");
      error = true;
    }
    if (error) return;
    const loginStatus = doLogin(email, password);
    if (loginStatus) {
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f3f4f6"
    }}>
      <div
        style={{
          background: "#fff",
          padding: "28px 22px",
          borderRadius: "10px",
          boxShadow: "0 2px 12px rgba(30,41,59,0.08)",
          minWidth: "300px",
          maxWidth: "90vw"
        }}
      >
        <h2 style={{
          textAlign: "center",
          marginBottom: "18px",
          color: "#222",
          fontWeight: 600,
          fontSize: "1.3rem"
        }}>
          Admin Login
        </h2>
        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontWeight: 500, color: "#222" }}>Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            style={{
              width: "100%",
              padding: "8px 10px",
              marginTop: "5px",
              border: "1px solid #e5e7eb",
              borderRadius: "5px",
              fontSize: "1rem",
              marginBottom: "2px"
            }}
          />
          <div style={{ color: 'red', fontSize: "0.93rem", minHeight: "16px" }}>{emailError}</div>
        </div>
        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontWeight: 500, color: "#222" }}>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            style={{
              width: "100%",
              padding: "8px 10px",
              marginTop: "5px",
              border: "1px solid #e5e7eb",
              borderRadius: "5px",
              fontSize: "1rem",
              marginBottom: "2px"
            }}
          />
          <div style={{ color: 'red', fontSize: "0.93rem", minHeight: "16px" }}>{passwordError}</div>
        </div>
        <div style={{ color: 'red', textAlign: "center", minHeight: "18px", marginBottom: "8px" }}>{loginError}</div>
        <button
          type='button'
          onClick={handleBtnClick}
          style={{
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "9px 0",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "6px"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;