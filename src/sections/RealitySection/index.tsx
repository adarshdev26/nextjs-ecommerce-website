import React from 'react'

const Reality = () => {
  return (
    <div className='py-10 mt-5 w-full'>
        <div className='grid md:grid-cols-2 max-w-7xl mx-auto'>
            <div className=''>
                <button className='p-3 rounded-2xl border'>In reality</button>
                <h2 className='mt-2 text-3xl font-medium'>Timeless Elegance</h2>
            </div>

            <div className='mt-3 '>
                <p>Enhance your space with a perfect blend of modern design and warm ambiance. Our speaker bring style and sophistication</p>
            </div>
        </div>

        <div className='w-full max-w-7xl mx-auto p-5 mt-5'>
            <img src='/assets/reality.png' alt='img' className='rounded-2xl' />
        </div>
      
    </div>
  )
}

export default Reality
