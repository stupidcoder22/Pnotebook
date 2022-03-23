import React, { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";
const About = () => {
  const a = useContext(NoteContext);

  useEffect(() => {}, []);

  return (
    <div>
      <p>this is about page</p>
    </div>
  );
};

export default About;
