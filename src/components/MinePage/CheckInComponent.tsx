import React from "react";
import CheckCircleIcon from "../../Icons/CheckCircleIcon";
import DragonIcon from "../../Icons/DragonIcon";
import levelConfig from "../../config/config.json";
import { formatNumber } from "../../utils/func";
import { DailyCheckInStatus } from "../../types/types";

interface CheckInComponentProps {
  status: DailyCheckInStatus;
  day: number;
}

const CheckInComponent: React.FC<CheckInComponentProps> = ({ status, day }) => {
  if (status === "claimed") {
    return (
      <div className="h-[20vw] bg-[#4B4955] rounded-[1.06vw] py-[1.33vw] flex flex-col items-center">
        <CheckCircleIcon
          fill="#221E33"
          className="w-[2.66vw] h-[2.66vw] mb-[0.26vw]"
        />
        <div className="text-[3.2vw] font-medium text-[#AAAAAA] mb-[1.86vw] leading-none">
          Day {day + 1}
        </div>
        <div className="rounded-full w-[5.86vw] h-[5.86vw] flex items-center justify-center bg-[#FAB648]">
          <DragonIcon fill="#674B1F" className="w-[5.29vw] h-[5.29vw]" />
        </div>
      </div>
    );
  } else if (status === "claim") {
    return (
      <div className="h-[20vw] bg-[#FAB648] rounded-[1.06vw] py-[1.33vw] flex flex-col items-center">
        <div className="text-[3.2vw] font-medium text-[#221E33] mb-[0.8vw] leading-none">
          Day {day + 1}
        </div>
        <div className="text-[4.26vw] font-bold text-[#221E33] mb-[1.06vw] leading-none">
          {formatNumber(levelConfig.dailyCheckInAmount[day])}
        </div>
        <DragonIcon fill="#221E33" className="w-[5.29vw] h-[5.29vw]" />
      </div>
    );
  } else {
    return (
      <div className="h-[20vw] bg-[#AAAAAA] rounded-[1.06vw] py-[1.33vw] flex flex-col items-center">
        <div className="text-[3.2vw] font-medium text-[#EAEAEA] mb-[0.8vw] leading-none">
          Day {day + 1}
        </div>
        <div className="text-[4.26vw] font-bold text-[#EAEAEA] mb-[1.06vw] leading-none">
          {formatNumber(levelConfig.dailyCheckInAmount[day])}
        </div>
        <DragonIcon fill="#EAEAEA" className="w-[5.29vw] h-[5.29vw]" />
      </div>
    );
  }
};
export default CheckInComponent;
