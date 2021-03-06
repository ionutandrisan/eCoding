import React from "react";
import "./styles/index.css";
import ChooseLanguage from "./components/ChooseLanguage";
import WriteCodeSection from "./components/WriteCodeSection";
import CodeOutputSection from "./components/CodeOutputSection";

const Home = () => {
  return (
    <>
      <ChooseLanguage />
      <div className="codeInputOutputContainer">
        <WriteCodeSection />
        <CodeOutputSection />
      </div>
    </>
  );
};

export default Home;
