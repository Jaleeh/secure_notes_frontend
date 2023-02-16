import jwt from "jsonwebtoken";
import Router from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

const PrivateRoutes = ({ children }) => {
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt_token"); //gets jwt token from local storage
    const refreshToken = localStorage.getItem("refresh_token");

    const refreshAccessToken = () => {
      axios
        .post("http://localhost:8000/auth/token/refresh/", {
          refresh: refreshToken,
        })
        .then((response) => {
          localStorage.setItem("jwt_token", response.data.access);
        })
        .catch((error) => {
          Router.push("/");
        });
    };

    if (!jwtToken) {
      //if there is no token, redirect to index
      Router.push("/");
    } else {
      axios
        .post("http://127.0.0.1:8000/auth/token/verify/", { token: jwtToken }) //verify jwt token
        .then((response) => {
          console.log(response.data);
          // Check if access token is about to expire (less than 5 minutes remaining)
          const exp = response.data.exp * 1000;
          const now = new Date().getTime();
          if (exp - now < 5 * 60 * 1000) {
            console.log("Access token about to expire. Refreshing...");
            refreshAccessToken();
          }
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
