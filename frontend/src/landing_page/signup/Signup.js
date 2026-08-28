import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          alert("Please enter email and password");
          return;
        }

        const response = await axios.post(
          "https://zerodha-ezwn.onrender.com/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          }
        );

        console.log("Login successful:", response.data);

        window.location.href = "https://zerodha-dashboard-alpha-three.vercel.app/dashboard";

        return;
      }

      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("Please fill all fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "https://zerodha-ezwn.onrender.com/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Signup successful:", response.data);

      alert("Account created successfully");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setIsLogin(true);
    } catch (err) {
      console.log("Auth Error:", err);

      alert(
        err.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const switchForm = () => {
    setIsLogin(!isLogin);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>
          {isLogin ? "Login" : "Create Account"}
        </h1>

        <p>
          {isLogin
            ? "Login to your account"
            : "Create your account to get started"}
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {!isLogin && (
            <div className="input-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete={
                isLogin
                  ? "current-password"
                  : "new-password"
              }
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>
          )}

          <button
            type="submit"
            className="auth-btn"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="switch-form">
          <span>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <button
            type="button"
            onClick={switchForm}
            className="switch-btn"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;