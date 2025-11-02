const authModel = require("../models/auth.model");
const profileModel = require("../models/profile.model");

module.exports.createProfile = async (req, res) => {
  try {
    const { bio, skills, interests, availability, github, linkedin } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(404).json({ message: "User Id Not Found" });
    }

    if (
      !bio ||
      !skills ||
      !interests ||
      !availability ||
      !github ||
      !linkedin
    ) {
      return res.status(401).json({ message: "All fields requried" });
    }

    const profile = await profileModel.create({
      userId: userId,
      bio,
      interests,
      skills,
      availability,
      github,
      linkedin,
    });

    if (!profile) {
      return res.status(401).json({ message: "Error creatign the profile" });
    }

    const user = await authModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.profileId = profile._id;
    await user.save();

    return res.status(201).json({
      message: "Profile Created Successfully",
      success: true,
      profile: profile,
    });
  } catch (error) {
    console.log("Error creating profile : ", error.message);
    res.status(500).json({ message: "Internal Server Error" }, error);
  }
};

module.exports.getProfile = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(404).json({ message: "User Id Not Found" });
    }

    const profile = await profileModel.findOne(userId).populate("userId");

    if (!profile) {
      return res.status(404).json({ message: "Error Fetching Profile" });
    }

    return res.status(200).json({
      message: "Profile Fetched Successfully",
      success: true,
      profile: profile,
    });
  } catch (error) {
    consconsole.log("Error Getting profile : ", error.message);
    res.status(500).json({ message: "Internal Server Error" }, error);
    le;
  }
};
