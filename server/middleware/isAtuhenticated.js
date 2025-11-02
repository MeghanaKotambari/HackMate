const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(404).json({ message: "Token Not Found" });
    }

    const decodToken = await jwt.verify(token, process.env.JWT_TOKEN);
    if (!decodToken) {
      return res.status(500).json({ message: "Unauthorized" });
    }

    req.userId = decodToken.userId;
    next();
  } catch (error) {
    console.log("Error In Middleware", error);
  }
};

module.exports = isAuthenticated;
