import React from 'react'

const Marquee = () => {
    return (
      <div className="w-full bg-[#004d43] py-20">
        <div className="border-b-2 border-t-2 flex text-white whitespace-nowrap overflow-hidde leading-none gap-15">
          <h1 className="text-[25vw] font-[Founders] leading-none">WE ARE OCHI</h1>
          <h1 className="text-[25vw] font-[Founders] leading-none">WE ARE OCHI</h1>
          <h1 className="text-[25vw] font-[Founders] leading-none">WE ARE OCHI</h1>
        </div>
      </div>
    );
}

export default Marquee