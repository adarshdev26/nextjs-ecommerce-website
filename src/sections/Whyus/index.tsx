import React from 'react'

const Whyus = () => {
  return (
    <div className='w-full p-12 '>
     <div className='grid md:grid-cols-2 max-w-7xl mx-auto'>
        <div className=''>
            <button className='p-3 rounded-2xl border'>Why us?</button>
            <h3 className='font-medium text-4xl mt-2 max-w-xl'>
            Trusted by Thousands, Engineered for Excellence
            </h3>
        </div>

        <div className='p-5 text-center max-w-xl'>
            <p>Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek design, our products are built to impress. </p>
        </div>
     </div>

     <div className='grid md:grid-cols-3 gap-5 max-w-7xl mx-auto p-5'>
        <div className='p-5 rounded-xl bg-[#fafafa] h-[20vh]'>
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>60K+ Units Sold</h3>
                <p className='p-2'>Our speakers have reached over 60,000 satisfied customers.</p>
            </div>
        </div>

        <div className='p-5 rounded-xl bg-[#fafafa] h-[20vh]'>
            <div className=''>
                <h3 className='text-2xl font-bold'>4.9/5 Average Rating</h3>
                <p className='p-2'>Thousands of reviews praise our unmatched sound quality.</p>
            </div>
        </div>


        <div className='p-5 rounded-xl bg-[#fafafa] h-[20vh]'>
            <div className=''>
                <h3 className='text-2xl font-bold'>100+ Countries</h3>
                <p className='p-2'>Our products are loved and shipped across more than 100 countries.</p>
            </div>
        </div>

     </div>
    </div>
  )
}

export default Whyus;
