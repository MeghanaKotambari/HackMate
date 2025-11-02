const authModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(404).json({ message: "All fields are requried" });
    }

    const user = await authModel.findOne({ email });
    if (user) {
      return res.status(401).json({ message: "Email Alaready Exists" });
    }

    const newUser = await authModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (!newUser) {
      return res.status(401).json({ message: "Errro Cratign the New User" });
    }

    const token = await jwt.sign(
      { userId: newUser._id },
      process.env.JWT_TOKEN
    );
    res.cookie("token", token);
    return res
      .status(201)
      .json({ message: "Register Successfully", success: true, user: newUser });
  } catch (error) {
    console.log("Error in Register in server : ", error.messsage);
    res.status(500).json({ message: "Internal Server Error : ", error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const user = await authModel.findOne(email);
    if (!user) {
      return res.status(404).json({ message: "USer Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password do not match" });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_TOKEN);
    res.cookie("token", token);

    return res
      .status(200)
      .json({ message: "Login Successfully", success: true, user: user });
  } catch (error) {
    console.log("Error in Login  in server : ", error.messsage);
    res.status(500).json({ message: "Internal Server Error : ", error });
  }
};
