const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("jwt", action.payload);
      return true;
    case "LOG_OUT":
      localStorage.removeItem("jwt");
      return false;
    case "USER_TOKEN_IS_VALID":
      return true;
    default:
      return state;
  }
};

export default loggedReducer;
