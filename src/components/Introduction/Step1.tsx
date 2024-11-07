import React from "react";
import Step1Image from "../../assets/images/introduction/SCR_1.png";

const Step1: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Welcome to
            <br />
            <span className="text-[#FAB648]">Puzzles Crusade!</span>
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Tap, earn Gold Dragons, and unlock hero
            <br /> cards. Level up your heroes and build strong
            <br /> teams to open Battle Mode.
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step1Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step1;
