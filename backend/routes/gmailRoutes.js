// routes/gmailRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Email = require("../models/Email");
const fetchFullEmails = require("../services/gmailService");
const extractContractDetails = require("../services/extractionService");

router.get("/fetch/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const emails = await fetchFullEmails(user.accessToken);

    const savedResults = [];

    for (let email of emails.slice(0, 1)) {
      const extracted = await extractContractDetails(email.text);

      const savedEmail = await Email.create({
        userId: user._id,
        ...JSON.parse(extracted),
        rawText: email.text,
      });

      savedResults.push(savedEmail);
    }

    res.json(savedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching emails" });
  }
});

module.exports = router;