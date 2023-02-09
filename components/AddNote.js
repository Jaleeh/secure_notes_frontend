import React, { useState } from "react";
import axios from "axios";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/notes/create", note);
    setNote({ title: "", body: "" });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea name="body" value={note.body} onChange={handleChange} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
