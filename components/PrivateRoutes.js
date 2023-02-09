import jwt from "jsonwebtoken";
import Router from "next/router";

const PrivateRoutes = ({ children }) => {
  const jwtToken = localStorage.getItem("jwt_token");

  try {
    const decoded = jwt.decode(jwtToken);
    //checks if token still valid
    if (decoded) {
      return children;
    }
  } catch (error) {
    //send back to login page if token expired or invalid
    Router.push("/login");
    return null;
  }
};

export default PrivateRoutes;
