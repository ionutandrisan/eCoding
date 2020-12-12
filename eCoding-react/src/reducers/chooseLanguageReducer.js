const chooseLanguageReducer = (state = "javascript", action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE_TO_JAVASCRIPT":
      return "javascript";
    case "CHANGE_LANGUAGE_TO_PYTHON":
      return "python";
    case "SET_PROGRAMMING_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
};

export default chooseLanguageReducer;
