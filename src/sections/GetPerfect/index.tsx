import React from 'react'

const GetPerfect = () => {
  return (
    <div className='w-full bg-[#fafafa] p-10'>
        <div className='grid md:grid-cols-2 max-w-7xl mx-auto'>
            <div className='py-3'>
                <h1 className='py-2 px-2 text-6xl font-bold'>Get your perfect speaker now!</h1>
                <button className='bg-black text-white p-[20px] hover:border mt-4 rounded-3xl'>Get your 30% off</button>
            </div>

            <div className='py-3'>
                <h4 className='py-2 px-2 text-2xl font-bold'>Bring every room together</h4>
                <p className='text-xl py-2 px-2'>Experience our latest portable speaker innovation, delivering exceptional sound quality, unbeatable durability, and sleek design.</p>
            </div>
        </div>
      
    </div>
  )
}

export default GetPerfect
