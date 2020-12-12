import React from "react";
import "../styles/LeftNavbarPart.css";
import { Link } from "react-router-dom";

const LeftNavbarPart = () => {
  return (
    <div className="leftNavbarContainer">
      <Link to="/home">Home</Link>
      <Link to="/tryYourCode">Try your code</Link>
    </div>
  );
};

export default LeftNavbarPart;
