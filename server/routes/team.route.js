const express = require("express");
const isAuthenticated = require("../middleware/isAtuhenticated");
const {
  createTeam,
  getAllTeam,
  getTeamById,
} = require("../controllers/team.controller");

const router = express.Router();

router.route("/createTeam").post(isAuthenticated, createTeam);
router.route("/getAllTeams").get(isAuthenticated, getAllTeam);
router.route("/getTeam/:teamId").get(isAuthenticated, getTeamById);

module.exports = router;
