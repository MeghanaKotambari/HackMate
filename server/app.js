const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Is Running On PORT ${PORT}`);
});
