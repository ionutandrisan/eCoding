import React from "react";
import { Link } from "react-router-dom";
import "../styles/RegisterFooter.css";

const RegisterFooter = () => {
  return (
    <div className="registerFooterContainer">
      Already have an Account? <Link to="/login">Sign In</Link>
    </div>
  );
};

export default RegisterFooter;
