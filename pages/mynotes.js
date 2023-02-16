import React from "react";
import NotesList from "@/components/NotesList";
import Link from "next/link";
import PrivateRoutes from "@/components/PrivateRoutes";

const Mynotes = () => {
  return (
    <div>
      <div>
        <Link href="/addnote">Add New Note</Link>
      </div>

      <div>
        <NotesList />
      </div>
    </div>
  );
};

export default Mynotes;
