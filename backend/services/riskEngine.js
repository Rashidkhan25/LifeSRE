// services/riskEngine.js

function calculateRisk(renewalDate, renewalAmount) {
  const today = new Date();
  const renewal = new Date(renewalDate);

  const diffTime = renewal - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let riskLevel = "LOW";

  if (daysLeft <= 7) riskLevel = "HIGH";
  else if (daysLeft <= 30) riskLevel = "MEDIUM";

  return {
    daysLeft,
    riskLevel,
  };
}

module.exports = calculateRisk;