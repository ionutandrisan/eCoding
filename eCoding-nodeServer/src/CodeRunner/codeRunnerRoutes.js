const express = require("express");
const router = express.Router();
const codeRunnerSevice = require("./codeRunnerService");

router.post("/runJavaScriptCode", codeRunnerSevice.runJavaScriptCode);

router.post("/runPythonCode", codeRunnerSevice.runPythonCode);

module.exports = router;
