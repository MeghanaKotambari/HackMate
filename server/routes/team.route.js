const express = require("express");
const isAuthenticated = require("../middleware/isAtuhenticated");
const {
  createTeam,
  getAllTeam,
  joinTeam,
  getTeamById,
  requestToJoinTeam,
} = require("../controllers/team.controller");

const router = express.Router();

router.route("/createTeam").post(isAuthenticated, createTeam);
router.route("/getAllTeams").get(isAuthenticated, getAllTeam);

module.exports = router;
