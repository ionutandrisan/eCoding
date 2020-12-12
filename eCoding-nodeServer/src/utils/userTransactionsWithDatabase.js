const UsersModel = require("../Users/usersModels").UserModel;

const checkIfUserExists = async (email) => {
  const userExists = await UsersModel.countDocuments({ email: email });

  if (userExists > 0) {
    return true;
  }
  return false;
};

const getUsernameAndPasswordFromDB = async (email) => {
  const userCredentials = await UsersModel.findOne(
    { email: email },
    { email: 1, password: 1, userRole: 1 }
  );

  return userCredentials;
};

module.exports = {
  checkIfUserExists,
  getUsernameAndPasswordFromDB,
};
