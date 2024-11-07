import React from "react";
import Step3Image from "../../assets/images/introduction/SCR_3.png";

const Step3: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[5.33vw]">
            Giveaways
            <br />
            <span className="text-[#FAB648]">Every Day</span>
          </div>
          <div className="text-[4vw] leading-[5.06vw] px-[8.26vw] text-[#EAEAEA]">
            Play every day to win big prizes and access
            <br /> many giveaways. Giveaway Prize Pool:
            <br /> $1.000.000
          </div>
        </div>
      </div>
      <div className="w-screen h-[113.6vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step3Image}
          alt="Intro"
          className="w-full h-full absolute left-0 top-0 max-w-none"
        />
      </div>
    </>
  );
};

export default Step3;
