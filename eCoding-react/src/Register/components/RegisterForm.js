import React, { useState } from "react";
import "../styles/RegisterForm.css";
import { useForm } from "react-hook-form";
import { sendRegisterRequest } from "../services/registerServices";

const RegisterForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [registerMessage, setRegisterMessage] = useState("");

  const onSubmit = (data) => {
    sendRegisterRequest(data)
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setRegisterMessage("User already exists");
        }
      });
  };

  return (
    <form className="registerFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        type="text"
        placeholder="First name"
        ref={register({ required: true })}
      />{" "}
      <br />
      <input
        name="lastName"
        type="text"
        placeholder="Last name"
        ref={register({ required: true })}
      />{" "}
      <br />
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
      <input
        name="repeatUserPassword"
        placeholder="Repeat password"
        type="password"
        ref={register({
          required: true,
          validate: (password) => password === getValues("password"),
        })}
      />{" "}
      <br />
      {errors.repeatUserPassword === "validate" && <p>Passwords don't match</p>}
      <input type="submit" value="Sign Up" />
      <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
      <p style={{ color: "red" }}>{registerMessage}</p>
    </form>
  );
};

export default RegisterForm;
