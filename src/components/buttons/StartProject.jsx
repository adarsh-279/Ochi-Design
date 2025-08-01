import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const StartProject = () => {
  return (
    <>
      <div className="w-58 text-center flex justify-between ">
        <h1 className="w-45 border-2 p-1 rounded-4xl border-[#00000060] hover:bg-[#212121] hover:text-white ">
          START THE PROJECT
        </h1>
        <MdArrowOutward className="border-2 text-4xl p-2 rounded-4xl border-[#00000080] hover:bg-[#212121] hover:text-white" />
      </div>
    </>
  );
}

export default StartProject 