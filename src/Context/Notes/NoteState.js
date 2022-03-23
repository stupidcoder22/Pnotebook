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

  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
