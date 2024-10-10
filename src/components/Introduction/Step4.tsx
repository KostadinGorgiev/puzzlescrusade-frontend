import React from "react";
import Step4Image from "../../assets/images/introduction/step4.png";

const Step4: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[7.2vw]">
            <span className="text-[#FAB648]">Invite friends </span>
            <br /> for more
            <br /> benefits.
          </div>
          <div className="text-[4vw] leading-[5.06vw] pl-[8.26vw] pr-[10.4vw] text-[#EAEAEA]">
            It never hurts to have a trustworthy friend next to you when the
            time comes. Not to mention the bonuses you will both get.
          </div>
        </div>
      </div>
      <div className="w-screen h-[104.8vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step4Image}
          alt="Intro"
          className="w-[107.2vw] h-[107.2vw] absolute left-0 top-0 max-w-none -translate-x-[17.6vw]"
        />
      </div>
    </>
  );
};

export default Step4;
