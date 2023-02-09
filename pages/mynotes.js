import React from "react";
import NotesList from "@/components/NotesList";
import PrivateRoutes from "@/components/PrivateRoutes";

const mynotes = () => {
  return (
    <PrivateRoutes>
      <div>
        <NotesList />
      </div>
    </PrivateRoutes>
  );
};

export default mynotes;
