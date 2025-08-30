import React from "react";

const Herosection = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-6 p-5 ">
        <h1 className="text-6xl font-bold">Immersive Sound, Simplified</h1>
        <p className="md:w-fit">
          Our most recent breakthrough in audio devices blends exceptional audio
          performance with unparalleled toughness and elegance.
        </p>
        <button className="bg-black text-white text-xl px-6 py-3 rounded-full">
          Buy now
        </button>
        <img
          src="/assets/banner_img.png"
          alt="banner"
          className=""
          style={{ width: "50%" }}
        />
      </div>
      <div id="about" className="text-center mt-4 bg-[#fafafa] h-fit p-20 w-full">
        <div className=" ">
        <h1 className="text-6xl font-medium px-4">
          Our latest innovation in portable speakers combines superior sound
          quality
        </h1>
        </div>
      </div>
    </div>

  );
};

export default Herosection;
