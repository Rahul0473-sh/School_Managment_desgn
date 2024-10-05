"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#8dd1e1",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FF5F1F",
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* Title  */}
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image
          src="/more.png"
          alt=""
          width={20}
          height={20}
          className="bg-gray-600 rounded-full"
        />
      </div>
      {/* Chart*/}
      <div className='w-full h-64 relative'>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
             
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
              <Image src='/maleFemale.png' alt='' width={50} height={50}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              />
      </div>
      {/* bottom section */}
      <div className='flex justify-center  gap-16px'>
        <div className='flex flex-col gap-1'>
          <span className="w-5 h-5 rounded-full bg-orange-400"></span>
          <h1 className='font-bold'>1234</h1>
          <h2 className='text-xs text-gray-300'>Boys 55%</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <span className="w-5 h-5 rounded-full bg-blue-500"></span>
          <h1 className='font-bold'>1234</h1>
          <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart