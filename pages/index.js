import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

const Homepage = () => {
  return (
    <div>
      <Link href="/login">Login Here</Link>
      <LoginForm />
    </div>
  );
};

export default Homepage;
