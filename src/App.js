import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const candidates = [
  { name: "Rahul Sharma", score: 85 },
  { name: "Rajiv Raushan", score: 72 },
  { name: "Arun Singh Shah", score: 81 },
  { name: "Rocky Ghutke", score: 76 },
  { name: "Sayan Mandal", score: 92 },
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Candidate Scoring Dashboard</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={candidates}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;