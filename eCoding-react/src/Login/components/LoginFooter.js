import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginFooter.css";

const LoginFooter = () => {
  return (
    <div className="loginFooterContainer">
      Don't have an account? <Link to="/register">Sign up</Link>
    </div>
  );
};

export default LoginFooter;
