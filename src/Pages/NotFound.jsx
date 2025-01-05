import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='background flex justify-center items-center flex-col gap-y-2'>
        NotFound
        <Link to='/'>
            <button className='bg-blue-400 text-white p-2 font-bold rounded-md'>Go to Home</button>
        </Link>
    </div>
  )
}

export default NotFound