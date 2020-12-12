import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles/index.css";
import LeftNavbarPart from "./components/LeftNavbarPart";
import RightNavbarPart from "./components/RightNavbarPart";
import { checkIfUserIsLoggedIn } from "./services/navbarServices";
import { logOutAction, userTokenIsValid } from "../actions";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkIfUserIsLoggedIn()
        .then((response) => {
          if (response.status === 200 || response.status === 304) {
            dispatch(userTokenIsValid());
          }
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            dispatch(logOutAction());
          }
        });
    } else {
      localStorage.removeItem("jwt");
    }
  });

  return (
    <div className="navbarContainer">
      <LeftNavbarPart />
      <RightNavbarPart />
    </div>
  );
};

export default Navbar;
