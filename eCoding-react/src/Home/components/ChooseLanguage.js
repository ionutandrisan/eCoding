import React from "react";
import "../styles/ChooseLanguage.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setProgrammingLanguageForRunningCode,
  setUserCode,
  setCodeOutput,
} from "../../actions";
import { setCodeMirrorDefaultValue } from "../../utils/codeMirrorUtils";

const ChooseLanguage = () => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const selectOptions = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  const dispatch = useDispatch();
  const programmingLanguageToRunCode = useSelector(
    (state) => state.programmingLanguageToRunCode
  );

  const onProgrammingLanguageChange = (event) => {
    dispatch(setProgrammingLanguageForRunningCode(event.target.value));
    dispatch(setUserCode(setCodeMirrorDefaultValue(event.target.value)));
    dispatch(setCodeOutput("Output:"));
  };

  return (
    <div className="changeProgrammingLanguageSelector">
      <select
        value={programmingLanguageToRunCode}
        onChange={onProgrammingLanguageChange}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default ChooseLanguage;
