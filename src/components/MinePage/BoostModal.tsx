import React, { useState } from 'react'
import BoltIcon from '../../Icons/BoltIcon'
import ArrowLineIcon from '../../Icons/ArrowLineIcon'
import DragonIcon from '../../Icons/DragonIcon'
import TimeCheckIcon from '../../Icons/TimeCheckIcon'
import TapIcon from '../../Icons/TapIcon'
import ShoppingCartIcon from '../../Icons/ShoppingCartIcon'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { User } from '../../types/types'
import levelConfig from '../../config/config.json'
import { formatNumber } from '../../utils/func'
import axiosInterface from '../../utils/axios'
import { increaseEnergySize, increaseRecovery, increaseTapMultiplier } from '../../store/appSlice'

const BoostModal: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();

  const canBuyEnergySize = (): boolean => {
    return user.coin_balance >= levelConfig.energySize[user.energy_size_level + 1].cost && user.energy_size_level < levelConfig.energySize.length - 2;
  }

  const buyEnergySize = async () => {
    await axiosInterface.post("users/boost", {
      id: user.t_user_id,
      boost_type: "energy_size_level",
      energy_point: user.energy_point
    });
    setVisible(true)
    dispatch(increaseEnergySize())
  }

  const canBuyRecovery = (): boolean => {
    console.log(user.energy_recovery_level, levelConfig.recovery.length - 2);
    
    return user.coin_balance >= levelConfig.recovery[user.energy_recovery_level + 1].cost && user.energy_recovery_level < levelConfig.recovery.length - 2;
  }

  const buyRecovery = async () => {
    await axiosInterface.post("users/boost", {
      id: user.t_user_id,
      boost_type: "energy_recovery_level",
    });
    setVisible(true)
    dispatch(increaseRecovery())
  }

  const canBuyTapMultiplier = (): boolean => {
    return user.coin_balance >= levelConfig.tapMultipler[user.tap_multipler_level + 1].cost && user.tap_multipler_level < levelConfig.tapMultipler.length - 2;
  }

  const buyTapMultiplier = async () => {
    await axiosInterface.post("users/boost", {
      id: user.t_user_id,
      boost_type: "tap_multipler_level",
    });
    setVisible(true)
    dispatch(increaseTapMultiplier())
  }

  return (
    <>
      <div className="absolute top-[calc(22.39vw+1px)] w-screen h-fit min-h-[calc(100vh-22.39vw-1px)] bg-[#221e33f7]">
        <div className="flex flex-col gap-[6.66vw] py-[11.46vw] px-[6.93vw] w-full">
          <div className="w-full pt-[4vw] pr-[3.46vw] pb-[4.8vw] pl-[4.53vw] rounded-[2.66vw] bg-[#4B4955]">
            <div className="flex gap-[4.34vw] mb-[4.26vw]">
              <BoltIcon
                className="mt-[0.8vw] w-[6.86vw] h-[9.27vw] flex-none"
                fill="#FA6648"
              />
              <div className="flex-1">
                <div className="text-[3.73vw] font-bold text-[#EAEAEA] leading-none mb-[1.6vw]">
                  Energy Size
                </div>
                <div className="text-[3.2vw] font-medium text-[#AAAAAA] leading-none mb-[1.6vw]">
                  Increase the maximum amount of energy you have.
                </div>
              </div>
              <div className="w-[10.66vw] h-[10.66vw] rounded-[2.66vw] border border-[#EAEAEA] flex items-center justify-center">
                <span className="text-[4.8vw] font-black text-[#EAEAEA]">
                  {user.energy_size_level}
                </span>
              </div>
            </div>
            <div className="flex gap-[2.13vw]">
              <div className="flex-1 flex items-center gap-[1.6vw] h-[11.2vw] px-[3.2vw] bg-[#221E33] rounded-[2.66vw]">
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.energySize[user.energy_size_level + 1].from}
                </span>
                <ArrowLineIcon className="w-[23.2vw]" />
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.energySize[user.energy_size_level + 1].to}
                </span>
              </div>
              <div
                className={`flex flex-col items-center justify-center gap-[0.8vw] w-[27.46vw] h-[11.2vw] bg-[#FAB648] rounded-[2.66vw] ${canBuyEnergySize() ? '' : 'opacity-60 pointer-events-none'}`}
                onClick={() => buyEnergySize()}
              >
                <div className="text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  BUY
                </div>
                <div className="flex gap-[1.49vw] items-center text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  <DragonIcon
                    className="w-[3.16vw] h-[3.16vw] flex-none"
                    fill="#221E33"
                  />
                  <span>{formatNumber(levelConfig.energySize[user.energy_size_level + 1].cost)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-[4vw] pr-[3.46vw] pb-[4.8vw] pl-[4.53vw] rounded-[2.66vw] bg-[#4B4955]">
            <div className="flex gap-[4.34vw] mb-[4.26vw]">
              <TimeCheckIcon
                className="mt-[0.8vw] w-[7.6vw] h-[7.6vw] flex-none"
                fill="#FA6648"
              />
              <div className="flex-1">
                <div className="text-[3.73vw] font-bold text-[#EAEAEA] leading-none mb-[1.6vw]">
                  Recovery
                </div>
                <div className="text-[3.2vw] font-medium text-[#AAAAAA] leading-none mb-[1.6vw]">
                  Reduce waiting time for your energy to recover
                </div>
              </div>
              <div className="w-[10.66vw] h-[10.66vw] rounded-[2.66vw] border border-[#EAEAEA] flex items-center justify-center">
                <span className="text-[4.8vw] font-black text-[#EAEAEA]">
                  {user.energy_recovery_level}
                </span>
              </div>
            </div>
            <div className="flex gap-[2.13vw]">
              <div className="flex-1 flex items-center gap-[1.6vw] h-[11.2vw] px-[3.2vw] bg-[#221E33] rounded-[2.66vw]">
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.recovery[user.energy_recovery_level + 1].from}m
                </span>
                <ArrowLineIcon className="w-[23.2vw]" />
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.recovery[user.energy_recovery_level + 1].to}m
                </span>
              </div>
              <div
                className={`flex flex-col items-center justify-center gap-[0.8vw] w-[27.46vw] h-[11.2vw] bg-[#FAB648] rounded-[2.66vw] ${canBuyRecovery() ? '' : 'opacity-60 pointer-events-none'}`}
                onClick={() => buyRecovery()}
              >
                <div className="text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  BUY
                </div>
                <div className="flex gap-[1.49vw] items-center text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  <DragonIcon
                    className="w-[3.16vw] h-[3.16vw] flex-none"
                    fill="#221E33"
                  />
                  <span>{formatNumber(levelConfig.recovery[user.energy_recovery_level + 1].cost)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-[4vw] pr-[3.46vw] pb-[4.8vw] pl-[4.53vw] rounded-[2.66vw] bg-[#4B4955]">
            <div className="flex gap-[4.34vw] mb-[4.26vw]">
              <TapIcon
                className="mt-[0.8vw] w-[6.66vw] h-[7.26vw] flex-none"
                fill="#FA6648"
              />
              <div className="flex-1">
                <div className="text-[3.73vw] font-bold text-[#EAEAEA] leading-none mb-[1.6vw]">
                  Tap multiplier
                </div>
                <div className="text-[3.2vw] font-medium text-[#AAAAAA] leading-none mb-[1.6vw]">
                  Increase the amount of coins you get for each tap.
                </div>
              </div>
              <div className="w-[10.66vw] h-[10.66vw] rounded-[2.66vw] border border-[#EAEAEA] flex items-center justify-center">
                <span className="text-[4.8vw] font-black text-[#EAEAEA]">
                  {user.tap_multipler_level}
                </span>
              </div>
            </div>
            <div className="flex gap-[2.13vw]">
              <div className="flex-1 flex items-center gap-[1.6vw] h-[11.2vw] px-[3.2vw] bg-[#221E33] rounded-[2.66vw]">
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.tapMultipler[user.tap_multipler_level + 1].from}
                </span>
                <ArrowLineIcon className="w-[23.2vw]" />
                <span className="flex-1 text-center text-[3.2vw] font-bold text-[#EAEAEA]">
                  {levelConfig.tapMultipler[user.tap_multipler_level + 1].to}
                </span>
              </div>
              <div
                className={`flex flex-col items-center justify-center gap-[0.8vw] w-[27.46vw] h-[11.2vw] bg-[#FAB648] rounded-[2.66vw] ${canBuyTapMultiplier() ? '' : 'opacity-60 pointer-events-none'}`}
                onClick={() => buyTapMultiplier()}
              >
                <div className="text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  BUY
                </div>
                <div className="flex gap-[1.49vw] items-center text-[3.73vw] font-bold leading-[120%] text-[#221E33]">
                  <DragonIcon
                    className="w-[3.16vw] h-[3.16vw] flex-none"
                    fill="#221E33"
                  />
                  <span>{formatNumber(levelConfig.tapMultipler[user.tap_multipler_level + 1].cost)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className="fixed bottom-0 w-screen h-[77.6vw] bg-[#221E33] border-t-[0.26vw] border-[#FAB648] z-30">
          <div className="flex flex-col items-center pt-[7.46vw] pb-[10.13vw]">
            <ShoppingCartIcon className="w-[17.63vw] h-[17.59vw] mb-[4.26vw]" />
            <div className="text-[8vw] font-bold text-white leading-[120%]  mb-[9.06vw]">
              Purchase
              <br />
              complete!
            </div>
            <div
              className="w-[45.33vw] h-[11.2vw] rounded-[2.66vw] bg-[#FA6648] flex items-center justify-center"
              onClick={() => setVisible(false)}
            >
              <span className="text-[6.4vw] font-bold text-white leading-none -translate-y-[0.52vw]">
                Thanks!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BoostModal
