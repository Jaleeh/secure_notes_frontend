import React from "react";
import axios from "axios";

const DeleteNote = ({ noteId }) => {
  const handleDelete = async () => {
    const jwtToken = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/notes/${noteId}/`,
        config
      );
      console.log(response.data);
      // Do something after successfully deleting the note
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return <button onClick={handleDelete}>Delete Note</button>;
};

export default () => (
  <PrivateRoutes>
    <DeleteNote />
  </PrivateRoutes>
);
