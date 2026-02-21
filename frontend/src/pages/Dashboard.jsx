import { useEffect, useState } from "react";
import { getSummary, getUpcoming } from "../api/dashboard";
import Card from "../components/Card";
import ContractCard from "../components/ContractCard";

function Dashboard() {
  const userId = import.meta.env.VITE_USER_ID;

  const [summary, setSummary] = useState({
    totalContracts: 0,
    upcomingRenewals: 0,
    estimatedSpendFormatted: "₹0",
    totalSavings: 0,
  });

  const [upcoming, setUpcoming] = useState([]);

  // ✅ declare inside component
  async function loadData() {
    const summaryData = await getSummary(userId);
    const upcomingData = await getUpcoming(userId);

    setSummary(summaryData);
    setUpcoming(upcomingData);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>LifeSRE Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Contracts" value={summary.totalContracts} />
        <Card title="Upcoming Renewals" value={summary.upcomingRenewals} />
        <Card title="Estimated Spend" value={summary.estimatedSpendFormatted} />
        <Card title="Total Savings" value={`₹${summary.totalSavings}`} />
      </div>

      <h2 style={{ marginTop: "40px" }}>Upcoming Contracts</h2>

      {Array.isArray(upcoming) &&
        upcoming.map((contract) => (
          <ContractCard
            key={contract.id}
            contract={contract}
            refresh={loadData}
          />
        ))}
    </div>
  );
}

export default Dashboard;