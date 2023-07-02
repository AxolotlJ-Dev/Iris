import React from "react";
import "../styles/Login.css";
import SignIn from "../components/SignIn";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      iniciar sesion
      <SignIn />
      <Link to="Iris/SignUp"> Sign Up </Link>
    </div>
  );
};

export default Login;
