import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import BackgroundComponent from "../Layout/Background";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { introNext, introSkip } from "../../store/appSlice";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step1Image from '../../assets/images/introduction/step1.png'

const Introduction: React.FC = () => {
  const step = useAppSelector(
    (state) => state.app.game?.introductionStep
  ) as number;
  const dispatch = useAppDispatch();
  const [imageLoading, setImageLoading] = useState(false);

  const RenderStep: React.FC = () => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      case 5:
        return <Step6 />;
      default:
        return <Step1 />;
    }
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
    }
    img.src = Step1Image; // by setting an src, you trigger browser download
  }, [])

  return (
    <div className="relative bg-black min-h-screen w-screen">
      <BackgroundComponent bg={"image"} />
      <div className="relative z-20 h-screen overflow-auto">
        <div className="h-screen min-h-[188.26vw] flex flex-col overflow-hidden relative z-20">
          <div className="flex justify-end pt-[7.2vw] pr-[5.6vw] pb-[10.66vw] relative z-20">
            <button
              className="w-[25.86vw] h-[8.8vw] rounded-[2.66vw] flex items-center justify-center border border-[#AAAAAA]"
              onClick={() => dispatch(introSkip())}
            >
              <span className="text-[3.73vw] font-bold text-[#AAAAAA]">
                Skip
              </span>
            </button>
          </div>
          <RenderStep />
          <div className="flex justify-end pb-[6.13vw] pr-[6.13vw] relative z-20">
            <div className="">
              <button
                className="w-[25.86vw] h-[13.86vw] rounded-[2.66vw] border border-[#AAAAAA] bg-[#FAB648] flex items-center justify-center mb-[2.93vw]"
                onClick={() => dispatch(introNext())}
              >
                <span className="text-[4.26vw] font-bold text-[#221E33]">
                  Next
                </span>
              </button>
              <div className="w-[25.86vw] h-[2.93vw] rounded-full p-[0.53vw] bg-[#4B4955] relative">
                <div className="flex gap-[1.6vw]">
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                  <div className="w-[1.86vw] h-[1.86vw] rounded-full bg-[#6A6A6A]"></div>
                </div>
                <div
                  className="absolute top-[0.53vw] w-[5.33vw] h-[1.86vw] bg-[#EAEAEA] rounded-full transition-all duration-300 ease-in-out"
                  style={{ left: `${0.53 + step * 3.46}vw` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
