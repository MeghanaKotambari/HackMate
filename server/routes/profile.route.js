const {
  createProfile,
  getProfile,
} = require("../controllers/profile.controller");

const express = require("express");

const router = express.Router();

router.route("/create").post(createProfile);
router.route("/getProfile").get(getProfile);

module.exports = router;
