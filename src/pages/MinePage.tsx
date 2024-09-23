import React from 'react'
import MainLayout from '../layout/MainLayout'
import CoinImage from '../assets/images/coin.png'
import BoltIcon from '../Icons/BoltIcon'
import RocketLunchIcon from '../Icons/RocketLunchIcon'
import BoostModal from '../components/MinePage/BoostModal'
import { useAppDispatch, useAppSelector } from '../hooks'
import { changePage, tap } from '../store/appSlice'
import { User } from '../types/types'
import levelConfig from '../config/config.json'
import { formatNumber } from '../utils/func'
import { coinsNeedLevelUp, userEnergySize, userLevel } from '../utils/service'

interface MinePageProps {
  showBoost?: boolean
}

const MinePage: React.FC<MinePageProps> = ({ showBoost = false }) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.app.game?.user) as User;

  const levelProgress = () => {
    let level = userLevel(user.level_point);
    return (user.level_point - level.from) * 100 / (level.to - level.from)
  }

  return (
    <MainLayout>
      <div className="p-[6.13vw]">
        <div className="flex gap-[4.26vw] mb-[6.4vw]">
          <div className="w-full h-[11.2vw] p-[1.6vw] flex flex-col items-center gap-[1.6vw] rounded-[1.6vw] bg-[#4B4955] bg-opacity-70 cursor-pointer">
            <span className="text-[2.4vw] font-medium text-[#EAEAEA] leading-none">
              Earn per tap
            </span>
            <span className="text-[4vw] font-bold text-[#FAB648] leading-none">
              +{levelConfig.tapMultipler[user.tap_multipler_level].to}
            </span>
          </div>
          {/* <div className="w-full h-[11.2vw] p-[1.6vw] flex flex-col items-center gap-[1.6vw] rounded-[1.6vw] bg-[#4B4955] bg-opacity-70 cursor-pointer">
            <span className="text-[2.4vw] font-medium text-[#EAEAEA] leading-none">
              Profit per hour
            </span>
            <span className="text-[4vw] font-bold text-[#FAB648] leading-none">
              +24,657
            </span>
          </div> */}
          <div className="w-full h-[11.2vw] p-[1.6vw] flex flex-col items-center gap-[1.6vw] rounded-[1.6vw] bg-[#4B4955] bg-opacity-70 cursor-pointer">
            <span className="text-[2.4vw] font-medium text-[#EAEAEA] leading-none">
              Coins to level up
            </span>
            <span className="text-[4vw] font-bold text-[#FAB648] leading-none">
              {formatNumber(coinsNeedLevelUp(user.level_point))}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[3.2vw] mb-[5.86vw]">
          <img
            src={CoinImage}
            alt="Coin"
            className="w-[14.13vw] h-[14.13vw] flex-none"
          />
          <span className="text-[9.86vw] text-white font-bold">{user.coin_balance.toLocaleString()}</span>
        </div>
        <div className="px-[2.13vw] mb-[10.93vw]">
          <div className="w-full flex justify-between mb-[1.33vw]">
            <span className="text-[2.4vw] font-medium text-[#FB6648]">
              {userLevel(user.level_point).title}
            </span>
            <span className="text-[2.4vw] font-medium text-[#EAEAEA]">
              {user.level_point.toLocaleString()}/{userLevel(user.level_point).to.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-[3.73vw] rounded-full bg-[#4B4955] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FA6648]"
              style={{ width: `${levelProgress()}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-center mb-[10.4vw]">
          <img src={CoinImage} alt="Coin" className="w-[63.2vw] h-[63.2vw]" onClick={() => dispatch(tap())} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[1.44vw] items-center">
            <BoltIcon className="w-[4.33vw] h-[5.86vw] flex-none" />
            <div className="text-[3.2vw] font-bold text-white">
              {user.energy_point.toLocaleString()}{` / `}
              <span className="text-[#FA6648]">{userEnergySize(user.energy_size_level).toLocaleString()}</span>
            </div>
          </div>
          <div
            className="w-[20.53vw] h-[6.4vw] relative"
            onClick={() => dispatch(changePage('boost'))}
          >
            <div className="absolute bottom-0 left-0 w-full h-[5.86vw] bg-[#FAB648] rounded-[1.6vw]"></div>
            <div className="absolute top-0 left-0 w-full h-[5.86vw] bg-[#FA6648] rounded-[1.6vw]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-[calc(50%+2px)] -translate-x-1/2 flex items-center justify-center gap-[2.4vw]">
              <RocketLunchIcon className="w-[4vw] h-[4vw] flex-none" />
              <span className="text-[3.2vw] font-bold text-[#EAEAEA]">
                Boost
              </span>
            </div>
          </div>
        </div>
      </div>
      {showBoost && <BoostModal />}
    </MainLayout>
  )
}

export default MinePage
