import { useState } from "react";
import "./quiz.css";
import { Link } from "react-router-dom";
import questions from "./questions.json";
import Question from "./Question";
import Result from "./Result";
import SkillSailer from "../assets/SkillSailer.png";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="Quiz">
      <div className="navbar" id="navi">
        <div className="nav-logo">
          <Link to="/">
            <img src={SkillSailer} alt="img" />
          </Link>
        </div>

        <div className="nav-button">
          <div className="anim-layer" />
          <Link to="/Login">Login / Sign Up</Link>
        </div>
      </div>

      <div className="sec">
        <h1>Web-Dev Questions</h1>

        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}

        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
