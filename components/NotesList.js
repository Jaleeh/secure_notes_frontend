import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import PrivateRoutes from "./PrivateRoutes";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt_token");
        const response = await axios.get("http://127.0.0.1:8000/api/mynotes/", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setNotes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            {note.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default () => (
  <PrivateRoutes>
    <NotesList />
  </PrivateRoutes>
);
