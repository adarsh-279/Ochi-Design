import React from 'react'
import ochi from '../assets/images/1.jpg'

const LandingPage = () => {
  return (
    <div className="w-full min-h-auto">
      <div className="text tracking-tight font-[Founders] pl-13 pt-24 pb-15">
        <div className="-mb-10">
          <h1 className="text-[19vh] text-[#212121]">WE CREATE</h1>
        </div>
        <div className="flex items-center gap-3 -mt-27">
          <img
            className="h-[11.8vh] w-[9.5vw] mt-4 object-cover rounded-lg"
            src={ochi}
            alt=""
          />
          <h1 className="text-[19vh] text-[#212121]">EYE-OPENING</h1>
        </div>
        <div className="-mt-27">
          <h1 className="text-[19vh] text-[#212121]">PRESENTATIONS</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage