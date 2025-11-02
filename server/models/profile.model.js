const { default: mongoose } = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
    },
    bio: {
      type: String,
      maxlength: 300,
    },
    skills: {
      type: [String],
    },
    interests: {
      type: [String],
    },
    availability: {
      type: Boolean,
      default: true,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
