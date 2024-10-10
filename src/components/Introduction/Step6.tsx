import React from "react";
import Step1Image from "../../assets/images/introduction/step1.png";
import Step3Image from "../../assets/images/introduction/step3.png";
import Step6Image from "../../assets/images/introduction/step6.png";

const Step6: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[7.2vw]">
            <span className="text-[#FAB648]">Are you ready?</span>
            <br /> May the puzzles
            <br /> be with you!
          </div>
        </div>
      </div>
      <div className="w-screen h-[140vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step1Image}
          alt="Intro"
          className="w-[106.66vw] h-[150.4vw] absolute left-0 top-[16.26vw] max-w-none -translate-x-[34.4vw] z-30"
        />
        <img
          src={Step6Image}
          alt="Intro"
          className="w-[156.53vw] h-[229.33vw] absolute left-0 top-0 max-w-none -translate-x-[26.13vw] z-20"
          />
        <img
          src={Step3Image}
          alt="Intro"
          className="w-[67.2vw] h-[82.66vw] absolute left-0 top-0 max-w-none translate-x-[56.26vw] z-10"
        />
      </div>
    </>
  );
};

export default Step6;
