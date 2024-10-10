import React from "react";
import Step5Image from "../../assets/images/introduction/step5.png";

const Step5: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[7.2vw]">
            Earn <span className="text-[#FAB648]">$ZZW </span>
            <br />
            tokens for <br />
            your courage.
          </div>
          <div className="text-[4vw] leading-[5.06vw] pl-[8.26vw] pr-[10.4vw] text-[#EAEAEA]">
            Active players will receive rewards for their achievements in the
            game.
          </div>
        </div>
      </div>
      <div className="w-screen h-[172.26vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step5Image}
          alt="Intro"
          className="w-[189.86vw] h-[271.2vw] absolute left-0 top-0 max-w-none -translate-x-[55.2vw]"
        />
      </div>
    </>
  );
};

export default Step5;
