import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const Noteitem = ({ note, updatenote, showAlert }) => {
  const { _id, title, description } = note;
  const context = useContext(NoteContext);
  const { deletenote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{title}</h5>
            <i
              className="fa-solid fa-trash ms-5"
              onClick={() => {
                deletenote(_id);
                showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-file-pen ms-4"
              onClick={() => updatenote(note)}
            ></i>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
