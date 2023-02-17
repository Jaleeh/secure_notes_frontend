import React, { useState } from "react";
import axios from "axios";
import PrivateRoutes from "./PrivateRoutes";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwtToken = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    await axios.post("http://127.0.0.1:8000/api/notes/", note, config);
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

export default () => (
  <PrivateRoutes>
    <AddNote />
  </PrivateRoutes>
);
