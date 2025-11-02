const express = require("express");
const router = express.Router();
const {
  sendJoinRequest,
  handleJoinRequest,
  getRequestsForTeam,
  getRequestsByUser,
} = require("../controllers/join.controller");
const isAuthenticated = require("../middleware/isAtuhenticated");

router.route("/:teamId/request").post(isAuthenticated, sendJoinRequest);

router.route("/:requestId/action").post(isAuthenticated, handleJoinRequest);

router.route("/team/:teamId").get(isAuthenticated, getRequestsForTeam);

router.route("/user/requests").get(isAuthenticated, getRequestsByUser);

module.exports = router;
