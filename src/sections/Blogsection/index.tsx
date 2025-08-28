import React from 'react'

const Blogs = () => {
  return (
    <div className='w-full p-8 mt-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
            <div className=''>
                <button className='rounded-2xl p-3 border'>Blogs</button>
                <h2 className='text-4xl mt-2'>Sound Insights</h2>
            </div>
            <div className='max-w-xl'>
                <p className=''>Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.</p>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-4 p-8'>
            <div className=''>
                <img src='/assets/blog1.jpeg '
                className='rounded-2xl'
                style={{minHeight:'40px'}}
               />
                <h5>The evolution of speakers</h5>
                <p>Feb 1, 2025</p>
            </div>
            <div className=''>
            <img src='/assets/blog2.jpeg' 
             className='rounded-2xl'
             style={{minHeight:'40px'}}
            />
                <h5>Right speaker for you</h5>
                <p>Feb 1, 2025</p>
            </div>
            <div className=''>
            <img src='/assets/blog3.jpeg' 
             className='rounded-2xl'
        />
                <h5>Wireless speaker</h5>
                <p>Feb 1, 2025</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
