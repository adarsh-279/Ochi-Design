import React from 'react'
import ochi from '../assets/images/1.jpg'
import StartProject from './buttons/StartProject';

const LandingPage = () => {
  return (
    <div className="w-full min-h-auto">
      <div className="text tracking-tight font-[Founders] pl-13 pt-24 pb-15">
        <div className="-mb-10">
          <h1 className="text-[19vh] text-[#212121]">WE CREATE</h1>
        </div>
        <div className="flex items-center gap-3 -mt-27">
          <img
            className="h-[12vh] w-[9vw] mt-4 object-cover rounded-lg"
            src={ochi}
            alt=""
          />
          <h1 className="text-[19vh] text-[#212121]">EYE-OPENING</h1>
        </div>
        <div className="-mt-27">
          <h1 className="text-[19vh] text-[#212121]">PRESENTATIONS</h1>
        </div>
      </div>
      <div className="w-full flex justify-between items-baseline pt-2 pl-13 pr-13 border-t-[1px] border-[#00000040]">
        <h1 className='text-[2.3vh]'>For public and private companies</h1>
        <h1 className='text-[2.3vh]'>From the first pitch to IPO</h1>
        <StartProject />
      </div>
    </div>
  );
}

export default LandingPage