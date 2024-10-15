import React from "react";
import moment from "moment";
import CheckInComponent from "./CheckInComponent";
import GiftBoxIcon from "../../Icons/GiftBoxIcon";
import { DailyCheckIn, DailyCheckInStatus, User } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axiosInterface from "../../utils/axios";
import { claimBonus } from "../../store/appSlice";

const DailyCheckInModal: React.FC = () => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();

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

  const claimDailyBonus = async () => {
    let result = await axiosInterface.post("daily-checkin/claim", {
      id: user.t_user_id,
    });
    if (result.data.success)
      dispatch(claimBonus(result.data.dailyCheckIn as DailyCheckIn));
  };

  return (
    <div className="absolute top-0 w-screen h-fit min-h-screen bg-[#171819e5] z-[1000] c-modal">
      <div className="absolute top-[15.2vw] w-screen h-[27.69vw] bg-gradient-to-t from-[#171819] to-transparent"></div>
      <div className="absolute top-[42.89vw] w-screen h-[calc(100vh-42.89vw)] bg-[#171819]"></div>
      <div className="pt-[28.53vw] px-[6.13vw] pb-[18.66vw] absolute top-0 left-0 w-screen max-h-screen overflow-auto">
        <GiftBoxIcon className="w-[15.18vw] h-[15.18vw] flex-none mx-auto mb-[4.8vw]" />
        <div className="flex flex-col items-center mb-[7.2vw]">
          <div className="text-[9.6vw] font-bold text-[#EAEAEA] mb-[7.73vw] leading-none">
            Daily bonus
          </div>
          <div className="text-[4vw] font-medium text-[#AAAAAA] text-center leading-tight">
            Here’s what your mines yielded while you
            <br /> wandered beyond Wallachia’s borders.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-y-[2.4vw] gap-x-[2.66vw]">
          {new Array(16).fill(null).map((day, index) => (
            <CheckInComponent
              day={index}
              status={getDayStatus(index)}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="absolute px-[7.73vw] bottom-[7.2vw] left-0 w-screen">
        <div
          className="w-full h-[18.13vw] rounded-[2.66vw] bg-[#FAB648] flex items-center justify-center"
          onClick={() => claimDailyBonus()}
        >
          <span className="text-[8vw] font-black text-[#221E33]">COLLECT</span>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckInModal;
