// models/Contract.js

const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vendor: String,
    renewalDate: Date,
    renewalAmount: Number,
    contractType: String,
    cancellationWindow: String,

    riskLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "LOW",
    },

    daysLeft: Number,
    potentialSavings: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "SWITCHED", "CANCELLED"],
      default: "ACTIVE",
    },

    rawText: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", contractSchema);