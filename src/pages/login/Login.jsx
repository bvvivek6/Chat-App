import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="Logo" className="logo" />
      <form className="loginForm">
        <h2>{currState}</h2>

        {currState === "Sign Up" && (
          <input
            type="text"
            placeholder="User name"
            className="form-input"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />

        <button className="login-btn" type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-term">
          <label>
            <input type="checkbox" required />
            Agree to terms and conditions
          </label>
        </div>

        <div className="login-forgot">
          <p className="login-toggle">
            {currState === "Sign Up"
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              onClick={() =>
                setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")
              }
              style={{ cursor: "pointer", color: "#f1c40f", fontWeight: "600" }}
            >
              {currState === "Sign Up" ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
