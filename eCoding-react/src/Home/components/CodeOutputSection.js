import React from "react";
import "../styles/CodeOutputSection.css";
import { useSelector } from "react-redux";

const CodeOutputSection = () => {
  const codeOutput = useSelector((state) => state.codeOutput);

  return <div className="codeOutputSectionContainer">{codeOutput}</div>;
};

export default CodeOutputSection;
