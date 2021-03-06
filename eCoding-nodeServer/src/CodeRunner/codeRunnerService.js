const { spawnSync } = require("child_process");
const fs = require("fs");
const javaScriptPath = process.env.PUBLIC_PATH;

const replaceFilepathForJavascriptError = (filename, data) => {
  const dirPathWhitoutSlash = filename.replace(/\\|\//g, "");
  const responseToSend = data
    .toString("utf8")
    .replace(/\\|\/|\"/g, "")
    .replace(new RegExp(`${dirPathWhitoutSlash}`, "g"), "Error on line")
    .replace(/\s,/g, "");
  return responseToSend;
};

const runJavaScriptCode = (req, res) => {
  const javaScrpitCodeToRun = req.body.codeToRun;
  const sessionId = req.body.sessionId;
  const filename = `${javaScriptPath}\\javaScriptFiles\\${sessionId}_usercode.js`;

  fs.writeFileSync(filename, javaScrpitCodeToRun, (err) => {
    console.log(err);
    res.status(500).send("Error in writing file");
  });

  const codeResponse = spawnSync("node", [filename]);

  if (codeResponse.stderr != "") {
    const output = {
      output: replaceFilepathForJavascriptError(
        filename,
        codeResponse.stderr.toString()
      ),
    };
    res.status(200).send(output);
  } else {
    const output = { output: `Output:\n ${codeResponse.stdout.toString()}` };
    res.status(200).send(output);
  }
};

const replaceFilepathForPythonError = (filename, data) => {
  const dirPathWhitoutSlash = filename.replace(/\\|\//g, "");
  console.log(dirPathWhitoutSlash);
  const responseToSend = data
    .toString("utf8")
    .replace(/\\|\/|\"/g, "")
    .replace(new RegExp(`${dirPathWhitoutSlash}`, "g"), "Error on")
    .replace(/\s,/g, "");
  console.log(responseToSend);
  return responseToSend;
};

const runPythonCode = (req, res) => {
  const pythonCodeToRun = req.body.codeToRun;
  const sessionId = req.body.sessionId;
  const filename = `${javaScriptPath}\\pythonFiles\\${sessionId}_usercode.py`;

  fs.writeFileSync(filename, pythonCodeToRun, (err) => {
    console.log(err);
    res.status(500).send("Error in writing file");
  });

  const codeResponse = spawnSync("py", [filename]);

  if (codeResponse.stderr != "") {
    const output = {
      output: replaceFilepathForPythonError(
        filename,
        codeResponse.stderr.toString()
      ),
    };
    res.status(200).send(output);
  } else {
    const output = { output: `Output: \n${codeResponse.stdout.toString()}` };
    res.status(200).send(output);
  }
};

module.exports = {
  runJavaScriptCode,
  runPythonCode,
};
