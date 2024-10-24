import React from "react";
import ProfileImage from "../assets/images/profile.png";
import CardImage from "../assets/images/Card_back.png";
import CircleXMarkIcon from "../Icons/CircleXMarkIcon";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changePage } from "../store/appSlice";
import { useInitData } from "@telegram-apps/sdk-react";
import { User } from "../types/types";
import { userLevel } from "../utils/service";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const initData = useInitData();

  return (
    <div className="w-screen h-fit min-h-screen bg-[radial-gradient(#4B4955,#171819)]">
      <div className="px-[6.13vw] pt-[8.26vw] pb-[10.93vw]">
        <div className="flex flex-col items-center">
          <CircleXMarkIcon
            fill="#fa6648"
            className="w-[6.4vw] h-[6.4vw] absolute top-[8.26vw] right-[6.13vw]"
            onClick={() => dispatch(changePage("mine"))}
          />
          <div className="w-[23.46vw] h-[23.46vw] rounded-full bg-white overflow-hidden mb-[4.26vw]">
            <img
              src={ProfileImage}
              alt="Elbowbeard"
              className="w-full h-full"
            />
            {/* <img
              src={initData?.user?.photoUrl}
              alt={user.username}
              className="w-full h-full"
            /> */}
          </div>
          <div className="text-[6.4vw] font-bold text-white mb-[9.6vw] leading-none">
            {user.username}
          </div>
          <div className="w-full grid grid-cols-2 gap-x-[5.6vw] gap-y-[6.66vw] mb-[10.53vw]">
            <div className="relative flex flex-col gap-[0.53vw] items-center justify-center h-[14.93vw]">
              <div className="absolute bottom-0 left-0 w-full h-[14.4vw] bg-[#FAB648] rounded-[1.6vw]"></div>
              <div className="absolute top-0 left-0 w-full h-[14.4vw] bg-[#4B4955] rounded-[1.6vw]"></div>
              <div className="relative text-[3.2vw] font-normal text-[#EAEAEA] leading-none">
                Level {(userLevel(user.level_point).index || 0) + 1}
              </div>
              <div className="relative text-[4.26vw] font-bold text-[#FA6648] leading-none">
                {userLevel(user.level_point).title}
              </div>
            </div>
            <div className="relative flex flex-col gap-[0.53vw] items-center justify-center h-[14.93vw]">
              <div className="absolute bottom-0 left-0 w-full h-[14.4vw] bg-[#FAB648] rounded-[1.6vw]"></div>
              <div className="absolute top-0 left-0 w-full h-[14.4vw] bg-[#4B4955] rounded-[1.6vw]"></div>
              <div className="relative text-[3.2vw] font-normal text-[#EAEAEA] leading-none">
                Power
              </div>
              <div className="relative text-[4.26vw] font-bold text-[#FA6648] leading-none">
                Coming soon
              </div>
            </div>
            <div className="relative flex flex-col gap-[0.53vw] items-center justify-center h-[14.93vw]">
              <div className="absolute bottom-0 left-0 w-full h-[14.4vw] bg-[#FAB648] rounded-[1.6vw]"></div>
              <div className="absolute top-0 left-0 w-full h-[14.4vw] bg-[#4B4955] rounded-[1.6vw]"></div>
              <div className="relative text-[3.2vw] font-normal text-[#EAEAEA] leading-none">
                Balance
              </div>
              <div className="relative text-[4.26vw] font-bold text-[#FA6648] leading-none">
                {Math.floor(user.coin_balance).toLocaleString()}
              </div>
            </div>
            <div className="relative flex flex-col gap-[0.53vw] items-center justify-center h-[14.93vw]">
              <div className="absolute bottom-0 left-0 w-full h-[14.4vw] bg-[#FAB648] rounded-[1.6vw]"></div>
              <div className="absolute top-0 left-0 w-full h-[14.4vw] bg-[#4B4955] rounded-[1.6vw]"></div>
              <div className="relative text-[3.2vw] font-normal text-[#EAEAEA] leading-none">
                Progress
              </div>
              <div className="relative text-[4.26vw] font-bold text-[#FA6648] leading-none">
                {Math.floor(user.level_point).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="w-[3.2vw] h-[3.2vw] rounded-full border-[0.26vw] border-[#FB6648] mb-[3.333vw]"></div>
          <div className="text-[4.26vw] font-light text-white mb-[4.13vw] leading-none">
            Heroes
          </div>
          <div className="w-[calc(100%-3.73vw)] border-b border-[0.26vw] border-[#FAB648] mb-[5.73vw]"></div>
          <div className="relative w-full">
            <div className="flex justify-between">
              <div className="rounded-[2.66vw] overflow-hidden opacity-20">
                <img
                  src={CardImage}
                  alt="Card"
                  className="w-[40.26vw] h-[57.33vw]"
                />
              </div>
              <div className="rounded-[2.66vw] overflow-hidden opacity-20">
                <img
                  src={CardImage}
                  alt="Card"
                  className="w-[40.26vw] h-[57.33vw]"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-[4.26vw] font-bold text-[#FAB648]">
                You don't have
                <br /> any heroes yet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
