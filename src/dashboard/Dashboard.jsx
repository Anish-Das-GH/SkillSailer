import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SkillSailer from "../assets/SkillSailer.png";
import "./dashboard.css"
import user from "./user.png"
export const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false // Check if logged in on load
  );
  const [username, setUsername] = useState(""); // State to store username
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const auth = getAuth(); // Get Firebase auth instance
  
  useEffect(() => {
    // Check for user login state on component mount and redirect if not logged in
    if (!isLoggedIn) {
      navigate("/login");
      return; // Prevent unnecessary username retrieval if not logged in
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, retrieve username
        const email = user.email; // Assuming username is stored in email
        setUsername(email.split("@")[0]); // Extract username from email (adjust based on your data)
      }
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    navigate("/login"); // Redirect to login on logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility on user logo click
  };

  return (
    <div className="dashboard-container">
      {isLoggedIn ? (
        <>
          <section>
            <div className="navbar" id="navi">
              <div className="nav-logo">
                <img src={SkillSailer} alt="img" />
              </div>
              <div className="navcom">
                <ul>
                  <li>
                    <span className="username-greeting"><img src={user} alt="" />{username}</span> {/* Username Greeting */}
                    <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>Logout</button> {/* Logout Button with margin */}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
        </>
      ) : (
        <p>You are not logged in. Please log in to access the dashboard.</p>
      )}
    </div>
  );
};
