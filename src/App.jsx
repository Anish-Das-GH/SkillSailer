import React from "react";
import { Home } from "./components/Home.jsx";
import { Login } from "./login/login.jsx";
import { Signup } from "./login/Signup.jsx";
import StreamlitEmbed from "./StreamlitEmbed.jsx"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scanner" element={<StreamlitEmbed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
