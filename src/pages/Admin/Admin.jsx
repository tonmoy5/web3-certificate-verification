import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='w-full min-h-screen gradient-bg-main flex items-center justify-center py-20'>
      <div className="md:p-10 px-4 py-8 rounded-xl blue-glassmorphism shadow-xl">
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <Link to="/add" className=''>
            <button
              className='px-5 py-2 bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-110 ease-in-out'>
              <h1 className="text-white text-2xl">Add New Certificate</h1>
            </button>
          </Link>
          <Link to="/edit">
            <button
              className='px-5 py-2 bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-110 ease-in-out'>
              <h1 className="text-white text-2xl">Edit Exasting Certificate</h1>
            </button>
          </Link>
          <Link to="/search">
            <button
              className='px-5 py-2 bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-110 ease-in-out'>
              <h1 className="text-white text-2xl">Search A certificate</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admin