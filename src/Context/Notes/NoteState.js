import { useState } from "react";
import { useLocation } from "react-router";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const data = [
    {
      _id: "6237f93debe29c0bad82f378",
      user: "62357a7a201fec3a8761b687",
      title: "my title",
      description: "Please wake up early bro",
      tag: "Personal",
      date: "2022-03-21T04:04:13.319Z",
      __v: 0,
    },
    {
      _id: "6237f93debe29c0bad82f37a",
      user: "62357a7a201fec3a8761b687",
      title: "my title",
      description: "UPdated data",
      tag: "Personal",
      date: "2022-03-21T04:04:13.495Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(data);

  // const [edit, setedit] = useState(second)

  //Add a note
  const addnote = (title, description, tag) => {
    console.log("note added successfully");
    console.log(title, description);
    const note = {
      _id: "6237f93debe29c0bad82f37a",
      user: "62357a7a201fec3a8761b687",
      title: title,
      description: description,
      tag: tag,
      date: "2022-03-21T04:04:13.495Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
    console.log();
  };
  //edit a note
  const editnote = () => {};
  //delete a note
  const deletenote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addnote, editnote, deletenote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
