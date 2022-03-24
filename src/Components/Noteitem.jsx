import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const Noteitem = ({ note, updatenote }) => {
  const context = useContext(NoteContext);
  const { deletenote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash ms-5"
              onClick={() => deletenote(note._id)}
            ></i>
            <i
              className="fa-solid fa-file-pen ms-4"
              onClick={() => updatenote(note)}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
