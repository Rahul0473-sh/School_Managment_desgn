import Image from 'next/image';
import React from 'react'

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 rounded-full text-sm ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search.."
        className="rounded-lg  bg-transparent w-[200px] outline-none"
      />
    </div>
  );
}

export default TableSearch