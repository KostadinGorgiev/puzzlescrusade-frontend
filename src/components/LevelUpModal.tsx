import React from "react";
import { User } from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import LevelUpImage from "../assets/images/levelup.png";
import { userLevel } from "../utils/service";
import TriAngleIcon from "../Icons/TriAngleIcon";
import { closeLevelUpScreen } from "../store/appSlice";

const LevelUpModal: React.FC = () => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeLevelUpScreen());
  };

  return (
    <div className="absolute top-0 w-screen h-fit min-h-screen bg-[#171819e5] z-[1000] c-modal">
      <img
        src={LevelUpImage}
        alt="Level Up"
        className="absolute top-[45.33vw] left-[28vw] w-[44.26vw] h-[57.6vw] z-20"
      />
      <div className="absolute top-[60vw] left-1/2 -translate-x-1/2 text-[#FAB648] text-[18.66vw] font-bold z-20 leading-[1.2]">
        {(userLevel(user.level_point).index || 0) + 1}
      </div>
      <div className="absolute top-[62.93vw] w-screen h-[20.05vw] bg-gradient-to-t from-[#171819] to-transparent"></div>
      <div className="absolute top-[82.98vw] w-screen h-[calc(100vh-82.98vw)] bg-[#171819]"></div>
      <div className="pt-[107.46vw] px-[7.2vw] pb-[8.66vw] absolute top-0 left-0 w-screen max-h-screen overflow-auto">
        <div className="flex flex-col items-center">
          <div className="text-[4.26vw] leading-none text-[#EAEAEA] font-medium mb-[1.6vw]">
            Your rank has been upgraded to
          </div>
          <div className="text-[9.33vw] text-[#FAB648] font-bold leading-none mb-[6.13vw] text-center">
            {userLevel(user.level_point).title}
          </div>
          <div className="relative h-[7.46vw] mb-[9.33vw]">
            <TriAngleIcon className="w-[3.2vw] h-[3.2vw] top-0 absolute left-1/2 -translate-x-1/2 rotate-180" />
            <TriAngleIcon className="w-[3.2vw] h-[3.2vw] bottom-0 absolute left-1/2 -translate-x-1/2" />
          </div>
          <div
            className="w-[84.53vw] h-[18.13vw] rounded-[2.66vw] bg-[#FAB648] flex items-center justify-center"
            onClick={() => handleClose()}
          >
            <span className="text-[8vw] font-black text-[#221E33]">Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelUpModal;
