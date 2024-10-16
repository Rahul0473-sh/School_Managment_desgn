"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = () => {
    const data = [
      {
        name: "Mon",
        present: 4000,
        absent: 2400,
      },
      {
        name: "Tue",
        present: 3000,
        absent: 1398,
      },
      {
        name: "Wed",
        present: 2000,
        absent: 9800,
      },
      {
        name: "Thurs",
        present: 2780,
        absent: 3908,
      },
      {
        name: "Fri",
        present: 1890,
        absent: 4800,
      },
 
    ];
  return (
    <div className="bg-white rounded-lg p-4  w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image
          src="/more.png"
          alt=""
          width={20}
          height={20}
          className="bg-gray-700 rounded-full"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart