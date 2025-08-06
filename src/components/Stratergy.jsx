import React from "react";
import img2 from "../assets/images/2.jpg"

const Stratergy = () => {
  return (
    <div className="w-full min-h-screen bg-[#cdea68] px-4 py-3 rounded-t-3xl">
      <div className="border-b-[1.5px] border-[#00000040]">
        <h1 className="text-6xl tracking-tight w-[85%] ml-10 mt-21 mb-22 font-[Nueue]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="underline underline-offset-4">raise funds</span>,{" "}
          <span className="underline underline-offset-4">sell products</span>,{" "}
          <span className="underline underline-offset-4">
            explain complex ideas
          </span>
          , and{" "}
          <span className="underline underline-offset-4">
            hire great people
          </span>
          .
        </h1>
      </div>
      <div className="w-full flex justify-center gap-5 mt-4 pb-25 border-b-[1.5px] border-[#00000040]">
        <div className="w-[45%]">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-[20%] mr-22 flex flex-col gap-8">
          <h1>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </h1>
          <h1>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
        <div className="w-[20%] flex flex-col">
          <h1 className="mt-[50%] mb-2">S:</h1>
          <a href="#" className="underline underline-offset-3">
            Instagram
          </a>
          <a href="#" className="underline underline-offset-3">
            Behance
          </a>
          <a href="#" className="underline underline-offset-3">
            Facebook
          </a>
          <a href="#" className="underline underline-offset-3">
            Linkedin
          </a>
        </div>
      </div>
      <div className="mt-2 ml-10 flex gap-80 pb-10">
        <div>
          <h1 className="text-6xl text-bold">Our approach:</h1>
          <button className="px-7 py-4 text-white bg-black rounded-4xl mt-7">
            READ MORE ●
          </button>
        </div>
        <img className="w-180 h-120 rounded-xl mt-5" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Stratergy;
