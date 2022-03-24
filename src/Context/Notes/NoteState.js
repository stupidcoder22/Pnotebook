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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTdhN2EyMDFmZWMzYTg3NjFiNjg3In0sImlhdCI6MTY0Nzc2ODczOH0.5vEOLhl-O45ELbCE1BxaSzhC9UJlL-cpWc374sI6odM",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTdhN2EyMDFmZWMzYTg3NjFiNjg3In0sImlhdCI6MTY0Nzc2ODczOH0.5vEOLhl-O45ELbCE1BxaSzhC9UJlL-cpWc374sI6odM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    // console.log(json);
    // console.log(title, description);
    setnotes(notes.concat(json));
  };

  //edit a note
  const editnote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/noteupdate/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTdhN2EyMDFmZWMzYTg3NjFiNjg3In0sImlhdCI6MTY0Nzc2ODczOH0.5vEOLhl-O45ELbCE1BxaSzhC9UJlL-cpWc374sI6odM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //logic to edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //delete a note
  const deletenote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTdhN2EyMDFmZWMzYTg3NjFiNjg3In0sImlhdCI6MTY0Nzc2ODczOH0.5vEOLhl-O45ELbCE1BxaSzhC9UJlL-cpWc374sI6odM",
      },
    });
    const json = await response.json();
    console.log(json);

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
