import axios from "axios";
import { AUTH_SERVER_API } from "../../constants/apiConstants";

export const runCodeFromHomePage = (codeToRun, programmingLanguage) => {
  let randomSession = localStorage.getItem("randomSession");
  if (!randomSession) {
    randomSession = Math.random().toString(36).substring(7);
    localStorage.setItem("randomSession", randomSession);
  }
  const requestBody = {
    codeToRun: codeToRun,
    sessionId: randomSession,
  };

  switch (programmingLanguage) {
    case "javascript":
      return axios.post(`${AUTH_SERVER_API}/runJavaScriptCode`, requestBody);
    case "python":
      return axios.post(`${AUTH_SERVER_API}/runPythonCode`, requestBody);
  }
};
