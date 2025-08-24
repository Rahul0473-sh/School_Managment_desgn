"use client";
import { PieChart, Pie, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";
import Image from "next/image";

const data = [
  { name: "A", value: 400, fill: "#C3EBFA" },
  { name: "B", value: 300, fill: "#4A90E2" },
  { name: "C", value: 300 },
  { name: "D", value: 200, fill: "#C21807" }
];

const customToolTip = ({ active, payload }: TooltipProps<number, string>) => {
const value = payload?.[0]?.value;
const name=payload?.[0]?.name;  
if (active && value !== undefined)  {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const percentage = ((value / total) * 100).toFixed(1);
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg text-sm border border-gray-300">
        <p>{name} : {percentage}%</p>
      </div>
    );
  }
  return null;
};

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-lg h-80 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Perform</h1>
        <Image src="/moreDark.png" alt="More" width={16} height={16} className="cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
          />
          <Tooltip content={customToolTip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
