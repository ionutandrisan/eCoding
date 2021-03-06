import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/WriteCodeSection.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/theme/monokai.css";
import { setUserCode } from "../../actions";
import RunCodeButton from "./RunCodeButton";

const WriteCodeSection = (props) => {
  const dispatch = useDispatch();
  const programmingLanguage = useSelector(
    (state) => state.programmingLanguageToRunCode
  );
  const userCodeFromRedux = useSelector((state) => state.userCode);

  const codeMirror = (
    <CodeMirror
      value={userCodeFromRedux}
      onBeforeChange={(editor, data, value) => {
        dispatch(setUserCode(value));
      }}
      onChange={(editor, data, value) => {}}
      options={{
        theme: "monokai",
        tabSize: 2,
        mode: programmingLanguage,
        lineNumbers: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
      }}
    />
  );

  return (
    <>
      <div className="writeUserCodeContainer">
        {codeMirror}
        <RunCodeButton />
      </div>
    </>
  );
};

export default WriteCodeSection;
