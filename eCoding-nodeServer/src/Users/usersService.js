const UsersModel = require("./usersModels").UserModel;
const userTransactionsWithDatabase = require("../utils/userTransactionsWithDatabase");
const passwordEncryption = require("../utils/passwordEncryption");
const jwtAuth = require("../utils/jwtAuthentication");

const getAllUsers = (req, res) => {
  UsersModel.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const registerNewUser = async (req, res) => {
  const userExists = await userTransactionsWithDatabase.checkIfUserExists(
    req.body.email
  );
  if (userExists === true) {
    res.status(409).send("User already exists");
  } else {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await passwordEncryption.encryptPassword(req.body.password),
    };

    const newUserDocument = new UsersModel(newUser);

    const userInserted = await newUserDocument.save();
    if (Object.keys(userInserted).length === 0) {
      res.status(500).send("An error in creating new user occurred");
    } else {
      res.status(200).send("User created successfully");
    }
  }
};

const loginUser = async (req, res) => {
  const userCredentials = await userTransactionsWithDatabase.getUsernameAndPasswordFromDB(
    req.body.email
  );
  if (userCredentials === null) {
    res.status(404).send("Username does not exists");
  } else {
    const areCredentialsValid = await passwordEncryption.checkIfPasswordsMatch(
      req.body.password,
      userCredentials.password
    );
    if (areCredentialsValid === true) {
      const jwtPayload = {
        email: userCredentials.email,
        userRole: userCredentials.userRole,
      };
      const jwt = jwtAuth.generateAccessToken(jwtPayload);
      res.status(200).send(jwt);
    } else {
      res.status(409).send("Username or password do not match");
    }
  }
};

const isUserLoggedIn = (req, res) => {
  res.status(200).send("User is logged in");
};

module.exports = {
  getAllUsers,
  registerNewUser,
  loginUser,
  isUserLoggedIn,
};
