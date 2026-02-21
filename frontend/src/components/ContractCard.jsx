import { switchContract } from "../api/dashboard";

function ContractCard({ contract, refresh }) {
  const riskColor =
    contract.riskLevel === "HIGH"
      ? "red"
      : contract.riskLevel === "MEDIUM"
      ? "orange"
      : "green";

  async function handleSwitch() {
    await switchContract(contract.id, 1000); // mock savings
    refresh(); // reload dashboard data
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginTop: "10px",
        borderRadius: "10px",
      }}
    >
      <strong>{contract.vendor}</strong>
      <p>Renews in {contract.daysLeft} days</p>
      <p>Amount: ₹{contract.renewalAmount}</p>
      <p style={{ color: riskColor }}>
        Risk: {contract.riskLevel}
      </p>

      {contract.riskLevel !== "LOW" && (
        <button
          onClick={handleSwitch}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Switch & Save
        </button>
      )}
    </div>
  );
}

export default ContractCard;