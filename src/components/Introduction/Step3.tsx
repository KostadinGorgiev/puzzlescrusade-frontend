import React from "react";
import Step3Image from "../../assets/images/introduction/step3.png";

const Step3: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[7.2vw]">
            <span className="text-[#FAB648]">Upgrade </span>
            your <br />
            hero cards for
            <br />
            more income.
          </div>
          <div className="text-[4vw] leading-[5.06vw] pl-[18.13vw] pr-[16vw] text-[#EAEAEA]">
            Unlock and level up Hero cards and build a powerful squad ready to
            defeat the great danger looming over Wallachia.
          </div>
        </div>
      </div>
      <div className="w-screen h-[151.73vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step3Image}
          alt="Intro"
          className="w-[158.13vw] h-[194.66vw] absolute left-0 top-0 max-w-none -translate-x-[38.93vw]"
        />
      </div>
    </>
  );
};

export default Step3;
