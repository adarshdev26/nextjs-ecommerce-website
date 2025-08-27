import React from 'react'

const CardSection = () => {
  return (
    <div className="container mx-auto py-12 px-6 mt-10">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
        
        {/* Left Content */}
        <div className="p-5 flex flex-col justify-center space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            The Perfect Sound, Anywhere
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Experience crystal-clear audio with deep bass and immersive sound.
          </h3>
          <p className="text-gray-600">
            Our smart speaker is designed to fill your space with rich, high-fidelity sound —
            whether you're at home or on the go.
          </p>
          <button className="bg-black px-6 py-3 text-white rounded-full w-fit hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className=''>
          <img 
            src="/assets/card1.jpeg" 
            alt="Smart speaker product" 
            className="rounded-2xl w-fit h-[80vh] shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default CardSection
