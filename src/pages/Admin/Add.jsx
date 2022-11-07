import React from 'react'

const Add = () => {
  return (
    <div className='w-full min-h-screen gradient-bg-main flex items-center justify-center py-20'>
      <div className="md:p-10 px-4 py-8 rounded-xl blue-glassmorphism shadow-xl">
        <h1 className='text-white text-3xl mb-10 text-center' >Add New Certificate</h1>
        <label htmlFor="" className='block text-white'>Name:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='candidate_name' placeholder='Name Of The Student' />

        <label htmlFor="" className='block text-white'>University:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='academi' placeholder='Name Of The Organaization' />

        <label htmlFor="" className='block text-white'>Course Name:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='course_name' placeholder='Name Of The Course' />

        <label htmlFor="" className='block text-white'>Year Of Graduation:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='passing_year' placeholder='Graduation Year' />

        <label htmlFor="" className='block text-white'>Obtained Grade:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='gred' placeholder='Overall Grade Obtained By The Student' />

        <div className="w-full flex items-center justify-center mt-10">
          <button
            // onClick={addCertificate}
            className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-700 animate-pulse'>
            <h1 className="text-white text-2xl">Add Now</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Add