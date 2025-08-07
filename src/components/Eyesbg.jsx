import React from "react";
import bg from "../assets/images/3.jpg";
import Eyes from "./Items/Eyes";

const Eyesbg = () => {
  return (
    <div className="relative w-full">
      <img src={bg} alt="Background" className="w-full h-auto" />
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <Eyes />
      </div>
    </div>
  );
};

export default Eyesbg;
