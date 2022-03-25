import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:1000";
  const data = [];
  const [notes, setnotes] = useState(data);

  //get all notes
  const getNotes = async (title, description, tag) => {
    //API call here
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  //Add a note
  const addnote = async (title, description, tag) => {
    //API call here
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setnotes(notes.concat(json));
  };

  //edit a note
  const editnote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/noteupdate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //logic to edit
    const newnotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }
    }
    setnotes(newnotes);
  };

  //delete a note
  const deletenote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // const json = await response.json();

    const newnotes = notes.filter((data) => data._id !== id);
    setnotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addnote, editnote, deletenote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
