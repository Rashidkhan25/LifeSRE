// routes/dashboardRoutes.js

const express = require("express");
const router = express.Router();
const Contract = require("../models/Contract");
const User = require("../models/User");

// ======================
// 📊 DASHBOARD SUMMARY
// ======================

router.get("/summary/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const contracts = await Contract.find({
      userId,
      status: "ACTIVE",
    });

    const totalContracts = contracts.length;

    const highRisk = contracts.filter(
      (c) => c.riskLevel === "HIGH"
    ).length;

    const mediumRisk = contracts.filter(
      (c) => c.riskLevel === "MEDIUM"
    ).length;

    const upcomingRenewals = highRisk + mediumRisk;

    const estimatedSpend = contracts.reduce(
      (sum, contract) => sum + (contract.renewalAmount || 0),
      0
    );

    const nextRenewal = contracts
      .filter((c) => c.renewalDate)
      .sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate))[0];

    const user = await User.findById(userId);

    res.json({
      totalContracts,
      highRisk,
      mediumRisk,
      upcomingRenewals,
      estimatedSpend,
      estimatedSpendFormatted: `₹${estimatedSpend}`,
      nextRenewal: nextRenewal
        ? {
            vendor: nextRenewal.vendor,
            renewalDate: nextRenewal.renewalDate,
            daysLeft: nextRenewal.daysLeft,
          }
        : null,
      totalSavings: user?.savingsTotal || 0,
    });
  } catch (err) {
    console.error("Dashboard Error:", err.message);
    res.status(500).json({ message: "Error generating summary" });
  }
});

// ======================
// 📅 UPCOMING CONTRACTS
// ======================

router.get("/upcoming/:userId", async (req, res) => {
  try {
    const contracts = await Contract.find({
      userId: req.params.userId,
      status: "ACTIVE",
    }).sort({ renewalDate: 1 });

    const upcoming = contracts.map((c) => ({
      id: c._id,
      vendor: c.vendor,
      renewalDate: c.renewalDate,
      daysLeft: c.daysLeft,
      riskLevel: c.riskLevel,
      renewalAmount: c.renewalAmount,
    }));

    res.json(upcoming);
  } catch (err) {
    console.error("Upcoming Error:", err.message);
    res.status(500).json({ message: "Error fetching upcoming contracts" });
  }
});

module.exports = router;