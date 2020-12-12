import React from "react";
import "../styles/RightNavbarPart.css";
import { Link } from "react-router-dom";
import userImage from "../../resources/default-user-photo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../actions";

const RightNavbarPart = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);

  const onLogOutClick = () => {
    dispatch(logOutAction());
  };

  return (
    <>
      {!isLogged ? (
        <div className="rightNavbarContainerForNotLoggedUser">
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className="rightNavbarContainerForLoggedUser">
          <img src={userImage} alt="" />
          <div
            className="rightNavbarContainerForLoggedUserButton"
            onClick={() => onLogOutClick()}
          >
            Log out
          </div>
        </div>
      )}
    </>
  );
};

export default RightNavbarPart;
