import React, { useEffect, useState } from "react";
import axios from "axios";

function UpdateNote({ noteId }) {
  const [note, setNote] =
    useState[
      {
        title: "",
        body: "",
      }
    ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/notes/${noteId}`
      );
      setNote(response.data);
    };
    fetchData();
  }, [noteId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/notes/${noteId}`, note);
  };

  const handleChange = (e) => {
    setNote = { ...note, [e.target.name]: e.target.value };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={note.title}
        onChange={handleChange}
      />
      <textarea name="body" value={note.body} onChange={handleChange} />
      <button type="submit">Update Note</button>
    </form>
  );
}

export default UpdateNote;