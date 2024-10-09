import React from "react";
import PuzzlecrusadeImage from "../../assets/images/puzzlecrusade.png";

const Loading: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen w-screen">
      <div
        className="w-screen h-screen bg-center bg-cover bg-no-repeat absolute top-0 left-0 z-10"
        style={{ backgroundImage: "url(/assets/images/bg.jpg)" }}
      ></div>
      <div className="w-[50vw] h-screen absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <div className="w-[50vw] h-screen absolute top-0 left-[50vw] z-10 bg-gradient-to-l from-black to-transparent"></div>
      <div className="w-[100vw] h-[100vw] absolute bottom-0 left-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative z-20 h-screen overflow-auto">
        <div className="w-full text-center pt-[10.66vw] text-[6.4vw] font-bold text-[#EAEAEA] mb-[18.66vw]">
          Loading...
        </div>
        <div className="flex justify-center mb-[8.53vw]">
          <img
            src={PuzzlecrusadeImage}
            alt="PuzzlecrusadeImage"
            className="w-[78.4vw] h-[78.4vw] flex-none"
          />
        </div>
        <div className="flex justify-center mb-[26.93vw]">
          <div className="w-[86.66vw] text-center text-[9.6vw] font-bold leading-none text-[#EAEAEA]">
            Defeat the danger<br/> looming over<br />
            <span className="text-[#FAB648]">Wallachia</span>
          </div>
        </div>
        <div className="flex justify-end pr-[5.06vw]">
            <div className="text-[2.66vw] font-bold text-[#AAAAAA]">BETA Version V.0.0.1</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
