import axios from "axios";
import { AUTH_SERVER_API } from "../../constants/apiConstants";
import { setTokenToAuthorizationHeader } from "../../utils/authenticationUtils";

export const checkIfUserIsLoggedIn = async () => {
  const authHeader = setTokenToAuthorizationHeader();
  if (authHeader !== null) {
    return axios.get(`${AUTH_SERVER_API}/checkIfUserIsLoggedIn`, authHeader);
  }
};
