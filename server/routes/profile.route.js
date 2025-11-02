const {
  createProfile,
  getProfile,
} = require("../controllers/profile.controller");

const express = require("express");
const isAuthenticated = require("../middleware/isAtuhenticated");

const router = express.Router();

router.route("/create").post(isAuthenticated, createProfile);
router.route("/getProfile").get(isAuthenticated, getProfile);

module.exports = router;
