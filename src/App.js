import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
import { Alert } from "./Components/Alert";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        {/* <Alert message="This is amazing React Website" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
