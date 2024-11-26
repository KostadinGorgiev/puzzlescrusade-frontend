import React from "react";
import TechDevImage from "../assets/tech_dev.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="w-screen h-fit min-h-screen bg-[#171819] pt-[5.33vw]">
      <img src={TechDevImage} alt="Tech Dev" className="w-full" />
      <div className="text-[8vw] text-[#EAEAEA] font-bold mt-[10.66vw] text-center">
        Ooooooops!
      </div>
      <div className="text-[4vw] text-[#EAEAEA] font-medium mt-[9.8vw] text-center">
        I was sent here to fix something quickly,
        <br /> but it’s taking a little longer than expected.
        <br /> Please come back later. I promise it won’t
        <br /> take long before I fix it.
      </div>
    </div>
  );
};

export default ErrorPage;
