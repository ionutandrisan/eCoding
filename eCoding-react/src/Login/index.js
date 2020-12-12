import React from "react";
import "./styles/index.css";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";

const Login = () => {
  return (
    <div className="loginContainer">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default Login;
