import axios from "axios";
import PrivateRoutes from "./PrivateRoutes";

const DeleteNote = async (noteId) => {
  const response = await axios.delete(
    `http://127.0.0.1:8000/api/notes/${noteId}`
  );
  return response.data;
};

export default () => (
  <PrivateRoutes>
    <DeleteNote />
  </PrivateRoutes>
);
