import Image from 'next/image';
import React from 'react'

const Navbar = () => {

    return (
      <div className="flex justify-between p-6">
        {/**Search Input for these */}
        <div className="hidden md:flex items-center gap-2 rounded-full text-sm ring-[1.5px] ring-gray-300 px-2">
          <Image src="/search.png" alt="" width={14} height={14} />
          <input
            type="text"
            placeholder="Search.."
            className="rounded-lg  bg-transparent w-[200px] outline-none"
          />
        </div>
        {/* Icon and User*/}
        <div className="flex gap-6 w-full justify-end">
          <div className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer">
            <Image
              src="/message.png"
              alt=""
              width={20}
              height={20}
              className=" bg-white rounded-md"
            />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer relative">
            <Image
              src="/announcement.png"
              alt=""
              width={20}
              height={20}
              className="w bg-white rounded-md"
                    />
                <div className='absolute -top-3 -right-2 bg-orange-500 rounded-full w-5 h-5 flex justify-center items-center text-xs '>1</div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">Rahul sharma</span>
            <span className="text-[10px] text-gray-600 text-right">admin</span>
          </div>
          
                <div>
                    <Image src='/avatar.png' alt='' width={36  } height={36}
                    className='rounded-full'/>
            </div>
        </div>
      </div>
    );
}

export default Navbar;