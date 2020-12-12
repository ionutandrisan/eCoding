const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const checkIfPasswordsMatch = async (userProvidedPassword, dbPassword) => {
  const isSamePassword = await bcrypt.compare(userProvidedPassword, dbPassword);
  return isSamePassword;
};

module.exports = {
  encryptPassword,
  checkIfPasswordsMatch,
};
