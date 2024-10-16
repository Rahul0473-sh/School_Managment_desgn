import React from 'react'

const Pagination = () => {
  return (
      <div className='flex items-center justify-between p-4'>
          <button disabled className=' px-4 py-2 rounded-lg bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>prev</button>
          <div className='flex items-center gap-2 text-sm'>
              <button className='px-2 rounded-sm bg-lamaSky '>1</button>
              <button className='px-2 rounded-sm  '>2</button>
              <button className='px-2 rounded-sm  '>3</button>
              ....
              <button className='px-2 rounded-sm  '>10</button>
          </div>
          <button disabled className=' px-4 py-2 rounded-lg bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>
    </div>
  )
}

export default Pagination