import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Assuming firebase.js is in the same directory
import { Link } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      alert("Signup successful!"); // Display success message
      // Optionally, redirect to another page or login the user automatically
    } catch (error) {
      console.error("Signup failed:", error);

      // Handle Firebase errors specifically
      const firebaseError = error.code;
      let errorMessage = "";

      switch (firebaseError) {
        case "auth/email-already-in-use":
          errorMessage = "This email address is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address.";
          break;
        case "auth/weak-password":
          errorMessage = "Password must be at least 6 characters long.";
          break;
        // Handle other potential Firebase errors here (e.g., network errors)
        default:
          errorMessage = "An error occurred. Please try again.";
      }

      alert(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="submitButton">
          Sign Up
        </button>
        <div className="link-container">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};
