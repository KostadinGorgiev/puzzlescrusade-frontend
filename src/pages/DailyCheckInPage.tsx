import React from "react";
import MainLayout from "../layout/MainLayout";
import { DailyCheckInStatus, User } from "../types/types";
import CheckInComponent from "../components/DailyCheckInPage/CheckInComponent";
import { useAppSelector } from "../hooks";
import moment, { utc } from "moment";

const DailyCheckInPage: React.FC = () => {
  const user = useAppSelector((state) => state.app.game?.user) as User;

  const getDayStatus = (day: number): DailyCheckInStatus => {
    if (
      moment(user.serverTime, "YYYY-MM-DD").isSame(
        moment(user.DailyCheckIn.last_check_in, "YYYY-MM-DD"),
        "day"
      )
    ) {
      if (user.DailyCheckIn.checkedin_count > day) {
        return "claimed";
      } else {
        return "disabled";
      }
    } else if (
      moment(user.serverTime, "YYYY-MM-DD").diff(
        moment(user.DailyCheckIn.last_check_in, "YYYY-MM-DD"),
        "day"
      ) === 1
    ) {
      if (user.DailyCheckIn.checkedin_count > day) {
        return "claimed";
      } else if (user.DailyCheckIn.checkedin_count === day) {
        return "claim";
      } else {
        return "disabled";
      }
    } else {
      if (day === 0) {
        return "claim";
      } else {
        return "disabled";
      }
    }
  };

  return (
    <MainLayout bg="gradient-color">
      <div className="pt-[7.2vw] px-[6.13vw] pb-[3.46vw]">
        <div className="flex flex-col items-center mb-[9.06vw]">
          <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
            Daily Check-in Bonus
          </div>
          <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center">
            Claim your daily bonus for steady progress and growing
            <br />
            rewards. When you miss a day, you start back from <br />
            zero. Make sure that never happens.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[2.66vw] gap-y-[6.13vw]">
          {new Array(16).fill(null).map((day, index) => (
            <CheckInComponent
              day={index}
              status={getDayStatus(index)}
              key={index}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DailyCheckInPage;
