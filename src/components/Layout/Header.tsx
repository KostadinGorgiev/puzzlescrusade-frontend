import React from "react";
import ProfileImage from "../../assets/images/profile.png";
import CommentInfoIcon from "../../Icons/CommentInfoIcon";
import BanBugIcon from "../../Icons/BanBugIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changePage } from "../../store/appSlice";
import { User } from "../../types/types";
// import { useInitData } from '@telegram-apps/sdk-react'
import { userLevel } from "../../utils/service";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.app.game?.user) as User;
  // const initData = useInitData()

  return (
    <div className="flex pl-[6.4vw] pt-[4.8vw] pb-[4.26vw] items-center justify-between gap-[4vw] border-b-[0.26vw] border-[#FAB648] bg-[#171819]">
      <div
        className="flex items-center gap-[4vw]"
        onClick={() => dispatch(changePage("profile"))}
      >
        <div className="w-[13.33vw] h-[13.33vw] rounded-full bg-white overflow-hidden">
          <img
            src={user.photo_url ? user.photo_url : ProfileImage}
            alt="Elbowbeard"
            className="w-full h-full"
          />
          {/* <img src={initData?.user?.photoUrl} alt={user.username} className="w-full h-full" /> */}
        </div>
        <div className="">
          <div className="text-[4.8vw] font-bold text-white">
            {user.username}
          </div>
          <div className="text-[3.46vw] font-medium text-[#FB6648]">
            Level {(userLevel(user.level_point).index || 0) + 1}
          </div>
        </div>
      </div>
      <a
        href="https://forms.gle/D3PjcaNJtn1shT8V6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="outline-none border-none pl-[1.46vw] py-[1.46vw] pr-[3.86vw] rounded-l-full bg-[#FA6648] flex gap-2 items-center">
          {/* <CommentInfoIcon fill="#EAEAEA" className="w-[4.53vw] h-[4.53vw]" /> */}
          <BanBugIcon fill="#EAEAEA" className="w-[4.53vw] h-[4.53vw]" />
          <div className="text-white text-[4.8vw]">REPORT A BUG</div>
        </button>
      </a>
    </div>
  );
};

export default Header;
