import React from 'react'
import { PiArrowsCounterClockwiseLight } from 'react-icons/pi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b pb-2'>
      <div className='flex items-center space-x-2'>
        <PiArrowsCounterClockwiseLight className='font-medium' />
        <h1 className='font-medium'>Counter App</h1>
      </div>
      <h2 className='border p-2 rounded-lg text-sm bg-slate-800 text-white hover:text-black hover:bg-white cursor-pointer ease-in'>Hi, user</h2>
    </div>
  )
}

export default Navbar