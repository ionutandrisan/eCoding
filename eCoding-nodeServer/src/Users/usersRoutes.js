const express = require("express");
const { authenticateToken } = require("../utils/jwtAuthentication");
const router = express.Router();
const usersSevice = require("./usersService");

router.get("/", usersSevice.getAllUsers);

router.post("/registerNewUser", usersSevice.registerNewUser);

router.post("/login", usersSevice.loginUser);

router.get(
  "/checkIfUserIsLoggedIn",
  authenticateToken,
  usersSevice.isUserLoggedIn
);

module.exports = router;
