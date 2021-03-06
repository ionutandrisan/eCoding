export const setCodeMirrorDefaultValue = (programmingLanguage) => {
  switch (programmingLanguage) {
    case "javascript":
      return "// Your code goes here\n\n\n\n";
    case "python":
      return "# Your code goes here\n\n\n\n";
    default:
      return "/* Your code goes here */\n\n\n\n";
  }
};
