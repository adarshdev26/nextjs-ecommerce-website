import React from "react";

const CardSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 mt-6">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
        {/* Left Content */}
        <div className="p-5 flex flex-col justify-center space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            The Perfect Sound, Anywhere
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
            Experience crystal-clear audio with deep bass and immersive sound.
          </h3>
          <p className="text-gray-600">
            Our smart speaker is designed to fill your space with rich,
            high-fidelity sound — whether you're at home or on the go.
          </p>
          <button className="bg-black px-6 py-3 text-white rounded-full w-fit hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src="/assets/card1.jpeg"
            alt="Smart speaker product"
            className="rounded-2xl w-full h-[70vh] shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center py-10 mt-4">
        {/* Right Image */}
        <div className="md:order-1 order-2">
          <img
            src="/assets/card2.png"
            alt="Smart speaker product"
            className="rounded-2xl w-full h-[70vh] shadow-lg "
          />
        </div>

        {/* Left Content */}
        <div className="p-5 flex flex-col justify-center space-y-4 md:order-2 order-1">
          <h2 className="text-lg font-semibold text-gray-700">
          Smart. Sleek. Powerful.
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
          Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.
          </h3>
          <p className="text-gray-600">
          Designed for modern living, this speaker blends premium sound with intuitive controls. 
          </p>
          <button className="bg-black px-6 py-3 text-white rounded-full w-fit hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
