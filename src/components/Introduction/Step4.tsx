import React from "react";
import Step4Image from "../../assets/images/introduction/SCR_4.png";

const Step4: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            <span className="text-[#FAB648]">Rewards</span> You Won’t
            <br /> Find Elsewhere
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Go up on the leaderboard and enjoy special
            <br /> benefits from partnerships with other games,
            <br /> exclusive NFTs, and unique money-making
            <br /> opportunities only for you!
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step4Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step4;
