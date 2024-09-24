import React, { useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import DragonIcon from '../Icons/DragonIcon'
import TriAngleIcon from '../Icons/TriAngleIcon'
import ProfileImage from '../assets/images/profile.png'
import UserAddIcon from '../Icons/UserAddIcon'
import CopyAltIcon from '../Icons/CopyAltIcon'
import { useUtils } from '@telegram-apps/sdk-react'
import { useAppSelector } from '../hooks'
import { User } from '../types/types'
import { userLevel } from '../utils/service'
import { formatNumber } from '../utils/func'
import CheckIcon from '../Icons/CheckIcon'

const FriendsPage: React.FC = () => {
  const [showCopiedIcon, setShowCopiedIcon] = useState<boolean>(false);
  const user = useAppSelector((state) => state.app.game?.user) as User
  const ref = useRef<HTMLInputElement>(null)
  const utils = useUtils();

  const copyReferralLink = () => {

    if (ref.current)
      ref.current.select()
    document.execCommand('copy')
    setShowCopiedIcon(true);
    setTimeout(() => {
      setShowCopiedIcon(false);
    }, 1000);
  }

  return (
    <MainLayout bg="gradient-color">
      <div className="pt-[7.2vw] px-[4.13vw] pb-[3.46vw]">
        <div className="flex flex-col items-center px-[2vw]">
          <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
            Invite your friends
          </div>
          <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center mb-[8vw]">
            And experience together the amazing world of Puzzles
            <br />
            Crusade, while winning amazing prizes.
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
                For each <span className="text-[#F36BFF]">p</span>
                <span className="text-[#EAEAEA]">remiu</span>
                <span className="text-[#F36BFF]">m</span> <br />
                friend who joins
              </div>
            </div>
          </div>
          <div className="text-[3.2vw] font-medium text-[#EAEAEA] text-center mb-[8.53vw]">
            More bonuses for referrals are coming. <br />
            It is always a good idea to invite your friends
          </div>
          <TriAngleIcon className="w-[3.2vw] h-[3.2vw] mb-[3.46vw]" />
          <div className="text-[4.26vw] font-light text-white mb-[4.13vw] leading-none">
            Referrals
          </div>
        </div>
        <div className="pt-[3.6vw] border-t-[0.26vw] border-[#FAB648] flex flex-col">
          {
            user.Referrals.map((referral, index) => (
              <div key={index}>
                <div className="px-[3.86vw] flex items-center gap-[4vw]">
                  <div className="w-[12vw] h-[12vw] rounded-full bg-white overflow-hidden flex-none">
                    <img
                      src={referral.User.photo_url ? referral.User.photo_url : ProfileImage}
                      alt={referral.User.username}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[4.26vw] font-bold text-white mb-[2.13vw] leading-none">
                      {referral.User.username}
                    </div>
                    <div className="text-[2.13vw] font-medium text-[#AAAAAA] leading-none">
                      Level {(userLevel(referral.User.level_point).index || 0) + 1} &#x2022; {userLevel(referral.User.level_point).title}
                    </div>
                  </div>
                  <div className="flex items-center gap-[2.4vw]">
                    <div className="rounded-full w-[5.86vw] h-[5.86vw] flex items-center justify-center bg-[#FAB648]">
                      <DragonIcon fill="#674B1F" className="w-[5.29vw] h-[5.29vw]" />
                    </div>
                    <div className="">
                      <span className="text-[3.73vw] font-bold text-[#FAB648]">
                        {formatNumber(referral.User.coin_balance)}{` `}
                      </span>
                      <span className="text-[3.2vw] font-medium text-[#AAAAAA]">
                        ({formatNumber(referral.User.level_point)})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full border-t-[0.13vw] border-[#AAAAAA] my-[3.46vw] opacity-30"></div>
              </div>
            ))
          }
        </div>
        <div className="fixed left-0 bottom-[25.33vw] px-[5.86vw] w-screen">
          <input type="text" className='h-[0px] border-none outline-none' value={`${process.env.REACT_APP_BOT_URL}?startapp=ref${user.t_user_id}`} ref={ref} />
          <div className="flex gap-[5.6vw]">
            <div className="flex-1 h-[12.8vw] rounded-[1.6vw] flex items-center justify-center gap-[1.73vw] bg-[#FA6648]" onClick={() => utils.shareURL(`https://t.me/share/url?url=${process.env.REACT_APP_BOT_URL}%3Fstartapp%3Dref${user.t_user_id}&text=test`, 'test')}>
              <span className="text-[4.8vw] font-bold text-[#EAEAEA]">
                Invite a friend
              </span>
              <UserAddIcon className="w-[4vw] h-[4vw] flex-none" />
            </div>
            <div
              className="w-[12.8vw] h-[12.8vw] rounded-[1.6vw] flex items-center justify-center bg-[#FA6648]"
              onClick={() => copyReferralLink()}
            >
              {showCopiedIcon ?
                <CheckIcon className="w-[4.22vw] h-[5.06vw]" />
                :
                <CopyAltIcon className="w-[4.22vw] h-[5.06vw]" />
              }
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default FriendsPage
