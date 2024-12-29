import React from "react";
import Step5Image from "../../assets/images/introduction/SCR_5.png";

const Step5: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Play One Game, <br />
            <span className="text-[#FAB648]">Get 3 Airdrops</span>
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            We’ll launch 2 more games in 2025. Play
            <br /> Puzzles Crusade now and secure airdrops for
            <br /> all our future games. Early players get even
            <br /> more rewards. Be early.
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step5Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step5;
