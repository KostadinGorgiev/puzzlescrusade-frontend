import React from "react";
import Step2Image from "../../assets/images/introduction/step2.png";

const Step2: React.FC = () => {
  return (
    <>
      <div className="flex-1 relative z-20">
        <div className="flex justify-between flex-col">
          <div className="text-[9.6vw] leading-none font-bold text-[#EAEAEA] pl-[8.26vw] mb-[7.2vw]">
            Mine <span className="text-[#FAB648]">Gold Dragons</span>
            <br /> and increase your
            <br /> treasury.
          </div>
          <div className="text-[4vw] leading-[5.06vw] pl-[43.46vw] pr-[5.6vw] text-[#EAEAEA]">
            Tap the Gold Dragon mining button to receive coins. This is a
            mystical mine which replenish over time, so check in regularly for
            maximum income.
          </div>
        </div>
      </div>
      <div className="w-screen h-[123.73vw] absolute bottom-0 left-0 overflow-hidden z-0">
        <img
          src={Step2Image}
          alt="Intro"
          className="w-[109.86vw] h-[161.06vw] absolute left-0 top-0 max-w-none -translate-x-[26.93vw]"
        />
      </div>
    </>
  );
};

export default Step2;
