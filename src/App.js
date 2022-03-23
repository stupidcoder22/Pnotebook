import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/Notes/NoteState";
import { Alert } from "./Components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing React Website" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
