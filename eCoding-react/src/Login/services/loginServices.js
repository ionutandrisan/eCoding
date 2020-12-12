import axios from "axios";
import { AUTH_SERVER_API } from "../../constants/apiConstants";

export const sendLoginRequest = (userCredentials) => {
  return axios.post(`${AUTH_SERVER_API}/login`, userCredentials);
};
