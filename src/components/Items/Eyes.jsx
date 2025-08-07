import React from "react";

const Eyes = () => {
  return (
    <div className="relative flex gap-8">
      <div className="bg-white w-50 h-50 rounded-full flex items-center justify-center">
        <div className="bg-black w-30 h-30 rounded-full flex items-center justify-center">
          <div className="bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white w-50 h-50 rounded-full flex items-center justify-center">
        <div className="bg-black w-30 h-30 rounded-full flex items-center justify-center">
          <div className="bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
