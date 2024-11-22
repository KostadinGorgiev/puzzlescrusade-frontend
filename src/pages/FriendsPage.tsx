import React, { useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import DragonIcon from "../Icons/DragonIcon";
import TriAngleIcon from "../Icons/TriAngleIcon";
import ProfileImage from "../assets/images/profile.png";
import UserAddIcon from "../Icons/UserAddIcon";
import CopyAltIcon from "../Icons/CopyAltIcon";
import { useUtils } from "@telegram-apps/sdk-react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Referral, User } from "../types/types";
import { userLevel } from "../utils/service";
import { formatNumber } from "../utils/func";
import CheckIcon from "../Icons/CheckIcon";
import axiosInterface from "../utils/axios";
import { loadMoreReferrals } from "../store/appSlice";

const FriendsPage: React.FC = () => {
  const [showCopiedIcon, setShowCopiedIcon] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const ref = useRef<HTMLInputElement>(null);
  const utils = useUtils();
  const dispatch = useAppDispatch();

  const copyReferralLink = () => {
    if (ref.current) {
      ref.current.select();
      document.execCommand("copy");
      ref.current.blur();
      setShowCopiedIcon(true);
      setTimeout(() => {
        setShowCopiedIcon(false);
      }, 1000);
    }
  };

  const onLoadMoreReferrals = async () => {
    let referrals = await axiosInterface.post("users/referrals", {
      id: user.t_user_id,
      page: page + 1,
    });
    setPage((prev) => prev + 1);
    dispatch(loadMoreReferrals(referrals.data.results as Referral[]));
  };

  return (
    <MainLayout bg="gradient-color">
      <div className="pt-[7.2vw] px-[4.13vw] pb-[16vw]">
        <div className="flex flex-col items-center px-[2vw]">
          <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
            Invite All Your Friends
          </div>
          <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center mb-[8vw]">
            Get ahead of everyone else by sharing your unique link.
            <br />
            The more friends you bring in, the higher you'll climb <br />
            on the Airdrop leaderboard.
          </div>
          <div className="w-full flex justify-between gap-[4vw] mb-[5.06vw]">
            <div className="h-[21.86vw] flex-1 rounded-[2.66vw] bg-[#4B4955] p-[2.66vw]">
              <div className="flex items-center justify-center gap-[1.6vw] mb-[2.13vw]">
                <div className="text-[6.66vw] font-bold text-[#FAB648] leading-none">
                  +1000
                </div>
                <div className="rounded-full w-[6.66vw] h-[6.66vw] flex items-center justify-center bg-[#FAB648]">
                  <DragonIcon
                    fill="#674B1F"
                    className="w-[5.06vw] h-[5.06vw]"
                  />
                </div>
              </div>
              <div className="text-[3.2vw] text-center font-normal text-[#AAAAAA] leading-[110%]">
                For each friend <br />
                who joins
              </div>
            </div>
            <div className="h-[21.86vw] flex-1 rounded-[2.66vw] bg-[#4B4955] p-[2.66vw]">
              <div className="flex items-center justify-center gap-[1.6vw] mb-[2.13vw]">
                <div className="text-[6.66vw] font-bold text-[#FAB648] leading-none">
                  +5000
                </div>
                <div className="rounded-full w-[6.66vw] h-[6.66vw] flex items-center justify-center bg-[#FAB648]">
                  <DragonIcon
                    fill="#674B1F"
                    className="w-[5.06vw] h-[5.06vw]"
                  />
                </div>
              </div>
              <div className="text-[3.2vw] text-center font-normal text-[#AAAAAA] leading-[110%]">
                For each <span className="text-[#F36BFF]">premium </span>
                friend who joins
              </div>
            </div>
          </div>
          <div className="text-[3.2vw] font-medium text-[#EAEAEA] text-center mb-[8.53vw]">
            Share your link with as many people as possible
            <br />
            and post it on social media. More exclusive referral
            <br />
            bonuses are coming for you and your friends only.
          </div>
          <TriAngleIcon className="w-[3.2vw] h-[3.2vw] mb-[3.46vw]" />
          <div className="text-[4.26vw] font-light text-white mb-[4.13vw] leading-none w-full text-center relative">
            Referrals ({user.total_referral_count})
          </div>
        </div>
        <div className="pt-[3.6vw] border-t-[0.26vw] border-[#FAB648] flex flex-col">
          {user.Referrals.map((referral, index) => (
            <div key={index}>
              <div className="px-[3.86vw] flex items-center gap-[4vw]">
                <div className="w-[12vw] h-[12vw] rounded-full bg-white overflow-hidden flex-none">
                  <img
                    src={
                      referral.User.photo_url
                        ? referral.User.photo_url
                        : ProfileImage
                    }
                    alt={referral.User.username}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[4.26vw] font-bold text-white mb-[2.13vw] leading-none">
                    {referral.User.username}
                  </div>
                  <div className="text-[2.13vw] font-medium text-[#AAAAAA] leading-none">
                    Level{" "}
                    {(userLevel(referral.User.level_point).index || 0) + 1}{" "}
                    &#x2022; {userLevel(referral.User.level_point).title}
                  </div>
                </div>
                <div className="flex items-center gap-[2.4vw] w-[25vw] justify-center">
                  <div className="rounded-full w-[5.86vw] h-[5.86vw] flex items-center justify-center bg-[#FAB648]">
                    <DragonIcon
                      fill="#674B1F"
                      className="w-[5.29vw] h-[5.29vw]"
                    />
                  </div>
                  <div className="">
                    <span className="text-[3.73vw] font-bold text-[#FAB648]">
                      {formatNumber(referral.User.coin_balance)}
                      {` `}
                    </span>
                    <span className="text-[3.2vw] font-medium text-[#AAAAAA]">
                      ({formatNumber(referral.User.level_point)})
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full border-t-[0.13vw] border-[#AAAAAA] my-[3.46vw] opacity-30"></div>
            </div>
          ))}
        </div>
        {user.Referrals.length < user.total_referral_count && (
          <div
            className="text-[3.5vw] font-normal text-white cursor-pointer mb-[5.33vw] mx-auto w-fit"
            onClick={() => onLoadMoreReferrals()}
          >
            Load More
          </div>
        )}
        <input
          type="text"
          className="h-[0px] border-none outline-none"
          value={`${process.env.REACT_APP_BOT_URL}?startapp=ref${user.t_user_id}`}
          ref={ref}
        />
        <div className="fixed left-0 bottom-[25.33vw] px-[5.86vw] w-screen">
          <div className="flex gap-[5.6vw]">
            <div
              className="flex-1 h-[12.8vw] rounded-[1.6vw] flex items-center justify-center gap-[1.73vw] bg-[#FA6648]"
              onClick={() =>
                utils.shareURL(
                  `${process.env.REACT_APP_BOT_URL}?startapp=ref${user.t_user_id}`,
                  `👋 Hey, hurry! 🚀 Join Puzzles Crusade with my invite – limited early rewards left, and a huge airdrop is coming soon! 💸`
                )
              }
            >
              <span className="text-[4.8vw] font-bold text-[#EAEAEA]">
                Invite a friend
              </span>
              <UserAddIcon className="w-[4vw] h-[4vw] flex-none" />
            </div>
            <div
              className="w-[12.8vw] h-[12.8vw] rounded-[1.6vw] flex items-center justify-center bg-[#FA6648]"
              onClick={() => copyReferralLink()}
            >
              {showCopiedIcon ? (
                <CheckIcon className="w-[4.22vw] h-[5.06vw]" />
              ) : (
                <CopyAltIcon className="w-[4.22vw] h-[5.06vw]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FriendsPage;
