import React from "react";
import "../components/home.css";
import SkillSailer from "../assets/SkillSailer.png";
import { Link } from "react-router-dom";
import study from "../assets/study.jpg";
export const Home = () => {
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
                <strong>Home</strong>{" "}
              </a>
            </li>
            <li>
              <a href="#aboutpg">
                <strong>About</strong>{" "}
              </a>
            </li>
            <li>
              <a href="#confo">
                {" "}
                <strong>Contact</strong>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer" />
          <Link to="/Login">Login / Sign Up</Link>
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
                  Empowering students to discover their ideal career paths and
                  connecting them with companies actively seeking their skills.
                </p>
              </div>
              <div className="main_image">
                <img src={study} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className="button">
              <Link to="/quiz">Take a Quiz</Link>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
        </div>
      </section>
      <section id="aboutpg">
        <h1>
          About <span>Us</span>
        </h1>
        <div>
          <h3>Our Objective</h3>
          <br></br>

          <p>
            The objective of SkillSailer is to revolutionize the recruitment
            process by leveraging advanced technologies such as machine learning
            and natural language processing to provide personalized job
            recommendations and accurately assess the true potential of each
            candidate. By analyzing candidate data, including resumes, skills
            assessments, and performance evaluations, the solution aims to match
            candidates with suitable job openings based on their skills,
            experiences, and preferences. Additionally, it seeks to create
            comprehensive profiles for each candidate to facilitate better
            decision-making by recruiters and hiring managers.
          </p>
          <br></br>

          <h3>Why Choose SkillSailer?</h3>
          <br></br>
          <p>
            SkillSailer is a website that serves as a comprehensive platform for
            job seekers and recruiters, facilitating streamlined recruitment
            processes. It features personalized job recommendations, detailed
            candidate profiles, and robust skills assessment tools powered by AI
            and machine learning. With a user-friendly interface and emphasis on
            data privacy, the website optimizes the recruitment experience for
            both the parties.
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
