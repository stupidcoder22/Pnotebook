import React, { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Addnote />
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((data) => {
          return <Noteitem key={data._id} note={data} />;
        })}
      </div>
    </>
  );
};

export default Notes;
