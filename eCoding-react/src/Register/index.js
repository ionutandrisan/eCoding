import React from "react";
import RegisterFooter from "./components/RegisterFooter";
import RegisterForm from "./components/RegisterForm";
import RegisterHeader from "./components/RegisterHeader";
import "./styles/index.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <RegisterHeader />
      <RegisterForm />
      <RegisterFooter />
    </div>
  );
};

export default Register;
