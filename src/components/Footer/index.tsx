import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-12 bg-[#1a1d21] h-[50vh]'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-3'>
                <div className=''>
                    <div className='flex items-center gap-4'>
                        <h2 className='text-[#fff] text-2xl'>SONIC</h2>
                       <p className='text-[#fff] '> The Perfect Sound, Anywhere</p>
                    </div>
                </div>

                <div className=''>
                    <div className='flex flex-col p-3'>
                        <h2 className='text-[#fff]'>Company</h2>
                        <p className='text-[#fff]'>Blogs</p>
                        <p className='text-[#fff]'>Contact Us</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col p-3'>
                        <h2 className='text-[#fff]'>Legal</h2>
                        <p className='text-[#fff]'>Terms of Service</p>
                        <p className='text-[#fff]'>Privacy Policy
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div className='grid md:grid-cols-2 py-12 mt-12 max-w-7xl mx-auto'>
                <div className='w-1/2'>
                    <h3 className='text-2xl text-[#fff]'>© 2025. All rights reserved. SONIC</h3>
                </div>
                <div className='w-1/2'>
                    <p className='text-[#fff]'>@sonic
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Footer
