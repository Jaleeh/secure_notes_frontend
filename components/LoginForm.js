import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PrivateRoutes from "./PrivateRoutes";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/token/", {
        email,
        password,
      });
      localStorage.setItem("jwt_token", response.data.access);
      router.push("/mynotes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default () => (
  <PrivateRoutes>
    <LoginForm />
  </PrivateRoutes>
);
