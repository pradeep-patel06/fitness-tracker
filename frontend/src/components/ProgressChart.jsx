import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ProgressChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          
          <CartesianGrid strokeDasharray="3 3" />

          {/* Workout Type */}
          <XAxis dataKey="type" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="calories"
            stroke="#f97316"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;