import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editnote } = context;
  const ref = useRef(null);
  const refclose = useRef(null);

  const [note, setnote] = useState({
    eid: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updatenote = (currentnote) => {
    console.log(currentnote);
    ref.current.click();
    setnote({
      eid: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
    console.log(note);
  };

  const handleClick = (e) => {
    e.preventDefault();
    editnote(note.eid, note.etitle, note.edescription, note.etag);
    refclose.current.click();
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    name="etitle"
                    id="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    name="edescription"
                    type="text"
                    value={note.edescription}
                    className="form-control"
                    id="edescription"
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    tag
                  </label>
                  <input
                    value={note.etag}
                    name="etag"
                    type="text"
                    className="form-control"
                    id="etag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((data) => {
          return (
            <Noteitem key={data._id} updatenote={updatenote} note={data} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
