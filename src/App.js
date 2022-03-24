import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
