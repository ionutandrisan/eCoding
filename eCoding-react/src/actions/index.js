export const logInAction = (token) => {
  return {
    type: "LOG_IN",
    payload: token,
  };
};

export const logOutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

export const userTokenIsValid = () => {
  return {
    type: "USER_TOKEN_IS_VALID",
  };
};

export const setProgrammingLanguageForRunningCode = (language) => {
  return {
    type: "SET_PROGRAMMING_LANGUAGE",
    payload: language,
  };
};
