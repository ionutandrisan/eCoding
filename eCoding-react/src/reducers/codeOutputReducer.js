const codeOuputReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CODE_OUTPUT":
      return action.payload;
    default:
      return state;
  }
};

export default codeOuputReducer;
