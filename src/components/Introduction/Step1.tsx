import React from "react";
import Step1Image from '../../assets/images/introduction/step1.png'

const Step1: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Welcome to
            <br />
            <span className="text-[#FAB648]">Wallachia!</span>
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Your journey to saving Wallachia begins here. Train your heroes,
            discover their amazing special skills, and collect as many Gold
            Dragons as possible. When the times come, you will need to throw
            everything into battle!
          </div>
        </div>
      </div>
      <div className="w-screen h-[112vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img src={Step1Image} alt="Intro" className="w-[157.33vw] h-[221.86vw] absolute left-0 top-0 max-w-none -translate-x-[45.6vw]" />
      </div>
    </>
  );
};

export default Step1;
