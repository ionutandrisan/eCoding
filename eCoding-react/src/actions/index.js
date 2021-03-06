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

export const setUserCode = (code) => {
  return {
    type: "SET_UNREGISTERED_USER_CODE",
    payload: code,
  };
};

export const setCodeOutput = (output) => {
  return {
    type: "SET_CODE_OUTPUT",
    payload: output,
  };
};
