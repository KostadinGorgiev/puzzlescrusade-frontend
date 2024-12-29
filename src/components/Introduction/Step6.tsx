import React from "react";
import Step6Image from "../../assets/images/introduction/SCR_6.png";

const Step6: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Play Every Day,
            <br />
            <span className="text-[#FAB648]">Win Big!</span>
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Our best players enjoy the biggest rewards!
            <br /> Keep tapping, keep upgrading, and unlock
            <br /> exclusive bonuses every day you play.
            <br /> Join the community, level up your heroes, and
            <br /> become a true legend in Puzzles Crusade!
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step6Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step6;
