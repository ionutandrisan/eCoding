const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const dbConn = require("./src/utils/databaseConnection");
dbConn.createDatabaseConnection();

const usersRoutes = require("./src/Users/usersRoutes");
app.use("", usersRoutes);

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});
