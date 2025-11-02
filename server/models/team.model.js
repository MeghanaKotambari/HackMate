const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },
    hackathonName: {
      type: String,
      required: true,
      trim: true,
    },
    hackathonStartDate: {
      type: Date,
      required: true,
    },
    hackathonEndDate: {
      type: Date,
      required: true,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Auth",
        },
        role: { type: String, default: "Member" },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    maxMembers: {
      type: Number,
      required: true,
      default: 4,
    },
    requiredSkills: [
      {
        type: String,
        trim: true,
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    joinRequests: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
        status: {
          type: String,
          enum: ["Pending", "Accepted", "Rejected"],
          default: "Pending",
        },
        requestedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Pre-save hook: automatically close team if members reach maxMembers
teamSchema.pre("save", function (next) {
  if (this.members.length >= this.maxMembers) {
    this.isOpen = false;
  } else {
    this.isOpen = true;
  }
  next();
});

module.exports = mongoose.model("Team", teamSchema);
