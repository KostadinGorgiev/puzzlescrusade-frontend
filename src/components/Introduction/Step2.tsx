import React from "react";
import Step2Image from "../../assets/images/introduction/SCR_2.png";

const Step2: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Huge <span className="text-[#FAB648]">Airdrop</span>
            <br />
            for You
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Join now for a massive airdrop! Puzzles
            <br /> Crusade will be the biggest airdrop of 2025
            <br /> on TON. Your time will be rewarded.
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step2Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step2;
