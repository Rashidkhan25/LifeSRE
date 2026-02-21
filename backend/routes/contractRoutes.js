const express = require("express");
const router = express.Router();
const Contract = require("../models/Contract");
const User = require("../models/User");

// Mark contract as switched and add savings
router.post("/:id/switch", async (req, res) => {
  try {
    const { potentialSavings } = req.body;

    const contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ message: "Contract not found" });

    contract.status = "SWITCHED";
    contract.potentialSavings = potentialSavings || 0;
    await contract.save();

    // Update user's total savings
    const user = await User.findById(contract.userId);
    user.savingsTotal += potentialSavings || 0;
    await user.save();

    res.json({
      message: "Contract switched successfully",
      savingsTotal: user.savingsTotal,
    });
  } catch (err) {
    console.error("Switch Error:", err.message);
    res.status(500).json({ message: "Error switching contract" });
  }
});

module.exports = router;