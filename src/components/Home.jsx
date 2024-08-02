import React, { useState, useEffect } from "react";
import "../components/home.css";
import SkillSailer from "../assets/SkillSailer.png";
import { Link, useNavigate } from "react-router-dom";
import study from "../assets/study.jpg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import userIcon from "../dashboard/user.png"; // Import user icon

export const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [username, setUsername] = useState(""); // State to store username
  const auth = getAuth(); // Get Firebase auth instance

  useEffect(() => {
    if (isLoggedIn) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const email = user.email; // Assuming username is stored in email
          setUsername(email.split("@")[0]); // Extract username from email (adjust based on your data)
        }
      });
      return unsubscribe; // Cleanup function to prevent memory leaks
    }
  }, [isLoggedIn, auth]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    navigate("/login"); // Redirect to login on logout
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="navbar" id="navi">
        <div className="nav-logo">
          <img src={SkillSailer} alt="img" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#navi">
                <strong>Home</strong>
              </a>
            </li>
            <li>
              <a href="#aboutpg">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a href="#confo">
                <strong>Contact</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          {isLoggedIn ? (
            <div className="navcom">
              <span className="username-greeting">
                <img src={userIcon} alt="user" />
                {username}
              </span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/Login">Login / Sign Up</Link>
          )}
        </div>
      </div>
      <section>
        <div className="homepg">
          <div className="main" id="home">
            <div className="main_content">
              <div className="main_text">
                <h1>
                  Welcome to
                  <br />
                  SkillSailer
                </h1>
                <p>
                  A comprehensive platform for job seekers and recruiters,
                  facilitating streamlined recruitment processes. It features
                  personalized job recommendations, detailed candidate profiles
                  powered by AI.
                </p>
              </div>
              <div className="main_image">
                <img src={study} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className="button">
              <Link to="/scanner">Analyze Your CV</Link>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
        </div>
      </section>
      <section id="aboutpg">
        <h1 className="about-title">
          About <span>Us</span>
        </h1>
        <div>
          <h3>Our Objective</h3>
          <br></br>
          <p>
            The objective of our platform is to revolutionize the recruitment
            process by leveraging the power of artificial intelligence (AI) to
            provide personalized job recommendations and accurately assess the
            true potential of each candidate. By analyzing candidate data,
            including resumes the solution aims to match candidates with
            suitable job openings based on their skills, experiences, and
            preferences. Additionally, it seeks to create comprehensive profiles
            for each candidate to facilitate better decision-making by
            recruiters and hiring managers.
          </p>
          <br></br>
          <h3>Why Choose SkillSailer?</h3>
          <br></br>
          <p>
            In today's job market, aligning skills with opportunities is
            challenging. Existing platforms often fail to accurately assess
            candidates or match them with suitable roles. Job seekers struggle
            to find positions that fully utilize their skills, while employers
            face difficulties identifying the best-fit candidates. Our platform
            leverages AI to bridge this gap, empowering both job seekers and
            employers to make informed decisions and achieve successful
            outcomes. Choose us for a comprehensive solution that enhances your
            career and hiring processes.
          </p>
        </div>
      </section>
      <section id="confo">
        <div>
          <h1 className="contactf">
            Contact <span>Us</span>
          </h1>
          <form className="cf">
            <div className="half left cf">
              <input type="text" id="input-name" placeholder="Name" />
              <input
                type="email"
                id="input-email"
                placeholder="Email address"
              />
              <input type="text" id="input-subject" placeholder="Subject" />
            </div>
            <div className="half right cf">
              <textarea
                name="message"
                type="text"
                id="input-message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <input type="submit" defaultValue="Submit" id="input-submit" />
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright ©2024 by @BinaryBosses | All rights reserved</p>
        </div>
        <div className="footer-iconTop">
          <a href="#navi">
            <i className="fa-solid fa-angle-up" />
          </a>
        </div>
      </footer>
    </>
  );
};
