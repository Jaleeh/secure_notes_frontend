import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const noteId = () => {
  const [note, setNote] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt_token");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/notes/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        setNote(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); //component is re-rendered when searching for id

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </div>
  );
};

export default noteId;
