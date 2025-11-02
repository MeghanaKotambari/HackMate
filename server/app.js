const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/database");
const authRoute = require("./routes/auth.route");
const profileRoute = require("./routes/profile.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/hackmate/auth", authRoute);
app.use("/api/hackmate/profile", profileRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Is Running On PORT ${PORT}`);
});
