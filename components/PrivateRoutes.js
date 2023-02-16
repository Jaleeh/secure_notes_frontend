import jwt from "jsonwebtoken";
import Router from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

const PrivateRoutes = ({ children }) => {
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt_token"); //gets jwt token from local storage

    if (!jwtToken) {
      //if there is no token, redirect to index
      Router.push("/");
    } else {
      axios
        .post("http://127.0.0.1:8000/auth/token/verify/", { token: jwtToken }) //verify jwt token
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          Router.push("/");
        });
    }
  }, []);
  return <>{children}</>; //renders protected context passed as children prop
};
export default PrivateRoutes;
