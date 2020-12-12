import axios from "axios";
import { AUTH_SERVER_API } from "../../constants/apiConstants";

export const sendRegisterRequest = (userDetails) => {
  return axios.post(`${AUTH_SERVER_API}/registerNewUser`, userDetails);
};
