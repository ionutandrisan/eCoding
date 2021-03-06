import React from "react";
import "../styles/RunCodeButton.css";
import { useSelector, useDispatch } from "react-redux";
import { runCodeFromHomePage } from "../services/runCodeServices";
import { setCodeOutput } from "../../actions";

const RunCodeButton = () => {
  const dispatch = useDispatch();
  const programmingLanguage = useSelector(
    (state) => state.programmingLanguageToRunCode
  );
  const userCodeFromRedux = useSelector((state) => state.userCode);

  const runCodeHandler = () => {
    runCodeFromHomePage(userCodeFromRedux, programmingLanguage)
      .then((response) => {
        dispatch(setCodeOutput(response.data.output));
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="runCodeButtonContainer">
        <button onClick={() => runCodeHandler()}>Run</button>
      </div>
    </>
  );
};

export default RunCodeButton;
