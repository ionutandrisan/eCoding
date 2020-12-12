import React from "react";
import { useSelector } from "react-redux";
import "../styles/WriteCodeSection.css";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

const WriteCodeSection = () => {
  const programmingLanguage = useSelector(
    (state) => state.programmingLanguageToRunCode
  );

  return (
    <div className="writeUserCodeContainer">
      <CodeMirror
        value="//Your code"
        options={{
          theme: "monokai",
          tabSize: 2,
          mode: programmingLanguage,
          lineNumbers: true,
          extraKeys: { "Ctrl-Space": "autocomplete" },
        }}
      />
    </div>
  );
};

export default WriteCodeSection;
