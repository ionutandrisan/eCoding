import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css";
import { sendLoginRequest } from "../services/loginServices";
import { useDispatch } from "react-redux";
import { logInAction } from "../../actions";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    sendLoginRequest(data)
      .then((res) => {
        dispatch(logInAction(res.data));
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setLoginError(err.response.data);
        }
        if (err.response.status === 409) {
          setLoginError(err.response.data);
        }
      });
  };

  return (
    <form className="loginFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        placeholder="e-mail"
        type="email"
        ref={register({ required: true })}
      />{" "}
      <br />
      <input
        name="password"
        placeholder="Password"
        type="password"
        ref={register({ required: true })}
      />{" "}
      <br />
      <input type="submit" value="Sign In" />
      {loginError}
    </form>
  );
};

export default LoginForm;
