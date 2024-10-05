import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
      <div className='odd:bg-red-400 even:bg-blue-500 w-full p-4 rounded-2xl flex-1 min-w-[130px] '>
          <div className='flex justify-between '>
              <span className='text-[10px] bg-white rounded-full text-green-600 px-2 py-1'>2024/25</span>
              <Image src='/more.png' alt='' width={20} height={20}/>
          </div>
          <h1 className='my-4 text-2xl font-semibold'>1,234</h1>
          <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
      </div>
  )
}

export default UserCard