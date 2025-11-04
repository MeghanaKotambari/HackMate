const express = require("express");
const isAuthenticated = require("../middleware/isAtuhenticated");
const {
  createTeam,
  getAllTeam,
  getTeamById,
  getMyteams,
} = require("../controllers/team.controller");

const router = express.Router();

router.route("/createTeam").post(isAuthenticated, createTeam);
router.route("/getAllTeams").get(isAuthenticated, getAllTeam);
router.route("/getTeam/:teamId").get(isAuthenticated, getTeamById);
router.route("/getMyTeams").get(isAuthenticated, getMyteams);

module.exports = router;
