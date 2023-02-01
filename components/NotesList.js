import React, { useState, useEffect } from "react";
import axios from "axios";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/notes/");
      setNotes(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
