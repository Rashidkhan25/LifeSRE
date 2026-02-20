// models/Email.js
const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vendor: String,
    renewalDate: String,
    renewalAmount: String,
    contractType: String,
    cancellationWindow: String,
    rawText: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);