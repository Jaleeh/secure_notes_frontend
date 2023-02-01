import React, { useEffect, useState } from "react";
import axios from "axios";
import NotesList from "../components/NotesList";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <NotesList />
    </Layout>
  );
};

export default index;
