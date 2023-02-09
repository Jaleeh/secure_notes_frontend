import React from "react";
import NotesList from "@/components/NotesList";
import PrivateRoutes from "@/components/PrivateRoutes";
import Link from "next/link";

const mynotes = () => {
  return (
    <div>
      <div>
        <Link href="/addnote">Add New Note</Link>
      </div>

      <PrivateRoutes>
        <div>
          <NotesList />
        </div>
      </PrivateRoutes>
    </div>
  );
};

export default mynotes;

// CHANGE PROTECTED ROUTES IN NEXTJS (AUTHCONTEXT)
