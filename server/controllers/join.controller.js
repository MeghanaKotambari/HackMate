const joinRequestModel = require("../models/join.model");
const teamModel = require("../models/team.model");
const profileModel = require("../models/profile.model");

module.exports.sendJoinRequest = async (req, res) => {
  try {
    const userId = req.body;
    const teamId = req.params.teamId;

    const team = await teamModel.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });

    // Check if already member
    const alreadyMember = team.members.some(
      (member) => member.userId.toString() === userId
    );
    if (alreadyMember)
      return res.status(400).json({ message: "Already a team member" });

    // Check for existing pending request
    const existing = await joinRequestModel.findOne({
      teamId,
      userId,
      status: "Pending",
    });
    if (existing)
      return res
        .status(400)
        .json({ message: "You already have a pending join request" });

    // Create join request
    const newRequest = new joinRequestModel({ teamId, userId });
    await newRequest.save();

    res.status(201).json({
      message: "Join request submitted successfully",
      success: true,
      request: newRequest,
    });
  } catch (error) {
    console.error("Error sending join request:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports.handleJoinRequest = async (req, res) => {
  try {
    const leaderId = req.userId; // current logged-in leader
    const { requestId } = req.params;
    const { action } = req.body; // 'accept' or 'reject'

    const joinRequest = await joinRequestModel
      .findById(requestId)
      .populate("teamId");
    if (!joinRequest)
      return res.status(404).json({ message: "Join request not found" });

    const team = joinRequest.teamId;

    // Verify leader ownership
    if (team.leader.toString() !== leaderId) {
      return res
        .status(403)
        .json({ message: "Only team leader can handle requests" });
    }

    if (joinRequest.status !== "Pending") {
      return res.status(400).json({ message: "Request already processed" });
    }

    // Handle action
    if (action === "accept") {
      // Add user to team
      team.members.push({ userId: joinRequest.userId, role: "Member" });
      if (team.members.length >= team.maxMembers) team.isOpen = false;
      await team.save();

      // Update profile
      const profile = await profileModel.findOne({
        userId: joinRequest.userId,
      });
      if (profile) {
        profile.teams.push(team._id);
        await profile.save();
      }

      joinRequest.status = "Accepted";
      joinRequest.respondedAt = new Date();
      await joinRequest.save();

      return res.status(200).json({
        message: "Join request accepted successfully",
        success: true,
      });
    } else if (action === "reject") {
      joinRequest.status = "Rejected";
      joinRequest.respondedAt = new Date();
      await joinRequest.save();

      return res.status(200).json({
        message: "Join request rejected successfully",
        success: true,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid action. Use 'accept' or 'reject'." });
    }
  } catch (error) {
    console.error("Error handling join request:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports.getRequestsForTeam = async (req, res) => {
  try {
    const leaderId = req.userId;
    const teamId = req.params.teamId;

    const team = await teamModel.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });

    if (team.leader.toString() !== leaderId) {
      return res
        .status(403)
        .json({ message: "Only the team leader can view requests" });
    }

    const requests = await joinRequestModel
      .find({ teamId })
      .populate("userId")
      .sort({ requestedAt: -1 });

    if (!requests || requests.length === 0) {
      return res.status(404).json({ message: "No requests found" });
    }

    res.status(200).json({
      message: "Join requests fetched successfully",
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Error fetching join requests:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get all requests sent by the logged-in user
module.exports.getRequestsByUser = async (req, res) => {
  try {
    const userId = req.userId;

    const requests = await joinRequestModel
      .find({ userId })
      .populate("teamId", "teamName hackathonName leader")
      .sort({ requestedAt: -1 });

    if (!requests || requests.length === 0) {
      return res.status(404).json({ message: "No requests found" });
    }

    res.status(200).json({
      message: "Your join requests fetched successfully",
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Error fetching user join requests:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};
