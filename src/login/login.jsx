import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Assuming firebase.js is in the same directory
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // User is successfully logged in
      console.log("User logged in:", userCredential.user);
      localStorage.setItem("isLoggedIn", true); // Store login state (replace with secure storage like cookies for production)
      navigate("/dashboard"); // Redirect to dashboard on success
    } catch (error) {
      console.error("Login failed:", error);

      // Handle Firebase errors specifically
      const firebaseError = error.code;
      let errorMessage = "";

      switch (firebaseError) {
        case "auth/wrong-password":
          errorMessage = "Incorrect email or password.";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found. Please create an account.";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "This email address is already in use.";
          break;
        case "auth/weak-password":
          errorMessage = "Password must be at least 6 characters long.";
          break;
        // Handle other potential Firebase errors here
        default:
          errorMessage = "An error occurred. Please try again.";
      }

      alert(errorMessage); // Display error message using alert
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">
        <strong>Login</strong>
      </h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="link-container">
          <Link to="/Signup">Don't Have an Account?</Link>
        </div>
      </form>
    </div>
  );
};
