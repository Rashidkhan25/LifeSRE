const BASE = import.meta.env.VITE_API_BASE;

export async function getSummary(userId) {
  const res = await fetch(`${BASE}/dashboard/summary/${userId}`);
  return res.json();
}

export async function getUpcoming(userId) {
  const res = await fetch(`${BASE}/dashboard/upcoming/${userId}`);
  return res.json();
}

export async function switchContract(contractId, savings) {
  const res = await fetch(
    `${BASE}/contracts/${contractId}/switch`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ potentialSavings: savings }),
    }
  );

  return res.json();
}