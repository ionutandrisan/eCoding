import React from "react";
import Select from "react-select";
import "../styles/ChooseLanguage.css";
import { useSelector, useDispatch } from "react-redux";
import { setProgrammingLanguageForRunningCode } from "../../actions";

const ChooseLanguage = () => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const dispatch = useDispatch();

  const programmingLanguageToRunCode = useSelector(
    (state) => state.programmingLanguageToRunCode
  );

  const defaultOption = options.find(
    (option) => option.value === programmingLanguageToRunCode
  );

  const onProgrammingLanguageChange = (event) => {
    dispatch(setProgrammingLanguageForRunningCode(event.value));
  };

  return (
    <div className="changeProgrammingLanguageSelector">
      <Select
        options={options}
        defaultValue={defaultOption}
        onChange={onProgrammingLanguageChange}
      />
    </div>
  );
};

export default ChooseLanguage;
