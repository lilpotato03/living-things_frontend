import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='background flex flex-col  items-center p-4 gap-y-4 justify-center text-center'>
        <h1 className='font-bold text-[50px] text-blue-600'>Handle Tasks Easily</h1>
        <Link to='signup'>
        <button className='bg-blue-400 text-white p-4 rounded-md drop-shadow-md'>
            <h1 className='font-bold text-[40px]'>Get started</h1>

        </button>
        </Link>
    </div>
  )
}

export default Landing