import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <>
      <Addnote />
      <div className="row">
        <h2>Your Notes</h2>
        {console.log("first")}
        {console.log(notes)}
        {notes.map((data) => {
          return <Noteitem key={data._id} note={data} />;
        })}
      </div>
    </>
  );
};

export default Notes;
