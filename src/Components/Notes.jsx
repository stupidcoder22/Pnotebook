import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setnotes } = context;
  return (
    <div className="row">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
