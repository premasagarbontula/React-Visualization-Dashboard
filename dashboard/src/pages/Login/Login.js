import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("********");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Board.</h1>
      </div>
      <div className="login-right">
        <div className="signin-header">
          <h2 className="signin-heading">Sign In</h2>
          <p>Sign in to your account</p>
        </div>
        <div className="login-content">
          <div className="login-buttons">
            <button className="google-btn">
              <FcGoogle className="google-icon" /> Sign in with Google
            </button>
            <button className="apple-btn">
              <FaApple className="apple-icon" /> Sign in with Apple
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#">Forgot password?</a>
            <button className="signin-btn" type="submit">
              Sign In
            </button>
          </form>
        </div>

        <p className="register">
          Don't have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
