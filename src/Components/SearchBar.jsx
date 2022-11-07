import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <input className='md:w-[500px] w-[300px] p-4 rounded-full text-white'
        type="text" name='candidate_name' placeholder='Enter The Hash' />
      <button className='bg-blue-500 hover:bg-blue-700 text-white text-xl py-2 px-5 rounded-full'>Serch Now</button>
    </div>
  )
}

export default SearchBar