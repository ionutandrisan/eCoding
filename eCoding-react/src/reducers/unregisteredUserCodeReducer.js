import { setCodeMirrorDefaultValue } from "../utils/codeMirrorUtils";

const code = setCodeMirrorDefaultValue("javascript");

const unregisteredUserCodeReducer = (state = code, action) => {
  switch (action.type) {
    case "SET_UNREGISTERED_USER_CODE":
      return action.payload;
    default:
      return state;
  }
};

export default unregisteredUserCodeReducer;
