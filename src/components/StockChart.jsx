import { LineChart,XAxis , YAxis,Line ,Tooltip , ReferenceLine,ResponsiveContainer} from "recharts";

export function StockChart({data,average}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis domain={["auto","auto"]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="blue" dot={false} />
        <ReferenceLine y={average} stroke="red" label="Avg" />
      </LineChart>
    </ResponsiveContainer>
  );
}