const profileModel = require("../models/profile.model");
const teamModel = require("../models/team.model");

// Create a new team
module.exports.createTeam = async (req, res) => {
  try {
    const userId = req.userId;
    const {
      teamName,
      hackathonName,
      hackathonStartDate,
      hackathonEndDate,
      maxMembers,
      requiredSkills,
      description,
    } = req.body;

    if (
      !teamName ||
      !hackathonName ||
      !hackathonStartDate ||
      !hackathonEndDate ||
      !maxMembers
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    if (new Date(hackathonEndDate) < new Date(hackathonStartDate)) {
      return res
        .status(400)
        .json({ message: "End date must be after start date." });
    }

    const team = new teamModel({
      teamName,
      hackathonName,
      hackathonStartDate,
      hackathonEndDate,
      leader: userId,
      members: [{ userId, role: "Leader" }],
      maxMembers,
      requiredSkills,
      description,
    });

    await team.save();

    const user = await profileModel.findOne({ userId });
    if (!user) {
      return res.status(404).json({ message: "User Id Not Found" });
    }

    user.teams.push(team._id);
    await user.save();

    return res.status(201).json({
      message: "Team created successfully",
      success: true,
      team,
    });
  } catch (error) {
    console.error("Error creating team:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports.getAllTeam = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(404).json({ message: "User Id Not Found" });
    }

    const teams = await teamModel
      .find()
      .populate("leader", "firstName lastName email")
      .populate("members.userId", "firstName lastName email");

    if (!teams || teams.length === 0) {
      return res.status(404).json({ message: "No teams found" });
    }

    return res.status(200).json({
      message: "Teams Fetched Successfully",
      success: true,
      teams: teams,
    });
  } catch (error) {
    console.error("Error Joining  team:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports.getTeamById = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    if (!teamId) {
      return res.status(404).json({ message: "Team Id Not Found" });
    }

    const team = await teamModel
      .findById(teamId)
      .populate("leader", "firstName lastName email")
      .populate("members.userId", "firstName lastName email");

    if (!team) {
      return res.status(404).json({ message: "Team Not Found" });
    }

    return res.status(200).json({
      message: "Team Details Fetched Successfully",
      success: true,
      team: team,
    });
  } catch (error) {
    console.error("Error Joining  team:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};
