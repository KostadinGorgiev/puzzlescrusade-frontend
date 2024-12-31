import React, { useCallback, useMemo, useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import CoinImage from "../assets/images/coin.png";
import BoltIcon from "../Icons/BoltIcon";
import RocketLunchIcon from "../Icons/RocketLunchIcon";
import BoostModal from "../components/MinePage/BoostModal";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changePage, setCardProfitModalVisible, tap } from "../store/appSlice";
import { User } from "../types/types";
import levelConfig from "../config/config.json";
import { formatNumber } from "../utils/func";
import { coinsNeedLevelUp, userEnergySize, userLevel } from "../utils/service";
import moment from "moment";
import DailyCheckInModal from "../components/MinePage/DailyCheckInModal";
import CardProfitModal from "../components/MinePage/CardProfitModal";
// import CraftIcon from "../Icons/CraftIcon";

interface MinePageProps {
  showBoost?: boolean;
}

const MinePage: React.FC<MinePageProps> = ({ showBoost = false }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const cardProfitModalVisible = useAppSelector(
    (state) => state.app.cardProfitModalVisible
  );
  const coinImageRef = useRef<HTMLImageElement>(null);
  const [numbers, setNumbers] = useState<any[]>([]);

  const levelProgress = () => {
    let level = userLevel(user.level_point);
    return ((user.level_point) * 100) / (level.to);
    // return ((user.level_point - level.from) * 100) / (level.to - level.from);
  };

  const addRandomNumber = useCallback((x: number, y: number) => {
    const randomNum = Math.floor(Math.random() * 100);
    const uniqueKey = Date.now() + randomNum;
    setNumbers((prev: any) => [
      ...prev,
      { num: randomNum, x, y, key: uniqueKey },
    ]);

    setTimeout(() => {
      setNumbers((prev) => prev.filter((n) => n.num !== randomNum));
    }, 1000);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (!matchMedia("(hover: none)").matches) {
        dispatch(tap());
        if (user.energy_point >= 1) {
          if (coinImageRef.current) {
            coinImageRef.current.style.scale = "0.9";
            const { clientX, clientY } = e;
            const { left, top } = coinImageRef.current.getBoundingClientRect();
            addRandomNumber(clientX - left, clientY - top);
          }
        }
      }
    },
    [dispatch, addRandomNumber, user]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      if (matchMedia("(hover: none)").matches) {
        dispatch(tap());
        if (user.energy_point >= 1) {
          if (coinImageRef.current) {
            coinImageRef.current.style.scale = "0.9";
            const touch = e.touches[0];
            const { left, top } = coinImageRef.current.getBoundingClientRect();
            addRandomNumber(touch.clientX - left, touch.clientY - top);
          }
        }
      }
    },
    [dispatch, addRandomNumber, user]
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (!matchMedia("(hover: none)").matches) {
        if (coinImageRef.current) {
          coinImageRef.current.style.scale = "1";
        }
      }
    },
    []
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      if (matchMedia("(hover: none)").matches) {
        if (coinImageRef.current) {
          coinImageRef.current.style.scale = "1";
        }
      }
    },
    []
  );

  const showDailylCheckIn = useMemo((): boolean => {
    return !moment(user.serverTime, "YYYY-MM-DD").isSame(
      moment(user.DailyCheckIn.last_check_in, "YYYY-MM-DD"),
      "day"
    );
  }, [user]);

  const profitPerHour = useMemo(() => {
    let profitPerHour = 0;
    for (let index = 0; index < user.Cards.length; index++) {
      const card = user.Cards[index];
      const hero = levelConfig.heros.find(
        (hero) => hero.slug === card.card_slug
      );
      if (hero) {
        profitPerHour += hero.level[card.card_level].profit;
      }
    }

    return profitPerHour;
  }, [user]);

  return (
    <MainLayout>
      <div className="p-[6.13vw] relative">
        <div className="flex gap-[4.26vw] mb-[6.4vw]">
          <div className="w-full h-[11.2vw] p-[1.6vw] flex flex-col items-center gap-[1.6vw] rounded-[1.6vw] bg-[#4B4955] bg-opacity-70 cursor-pointer">
            <span className="text-[2.4vw] font-medium text-[#EAEAEA] leading-none">
              Earn per tap
            </span>
            <span className="text-[4vw] font-bold text-[#FAB648] leading-none">
              +{levelConfig.tapMultipler[user.tap_multipler_level].to * 3}
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
              Profit per Hour
            </span>
            <span className="text-[4vw] font-bold text-[#FAB648] leading-none">
              {formatNumber(profitPerHour)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[3.2vw] mb-[4.86vw]">
          <img
            src={CoinImage}
            alt="Coin"
            className="w-[14.13vw] h-[14.13vw] flex-none"
          />
          <span className="text-[9.86vw] text-white font-bold">
            {Math.floor(user.coin_balance).toLocaleString()}
          </span>
        </div>
        <div className="px-[2.13vw] mb-[8.93vw]">
          <div className="w-full flex justify-between mb-[1.33vw]">
            <span className="text-[2.4vw] font-medium text-[#FB6648]">
              {userLevel(user.level_point).title}
            </span>
            <span className="text-[2.4vw] font-medium text-[#EAEAEA]">
              {Math.floor(user.level_point).toLocaleString()}/
              {userLevel(user.level_point).to.toLocaleString()}
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
          <div className="relative">
            <div
              className="w-[63.2vw] h-[63.2vw]"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleTouchEnd}
            >
              <img
                ref={coinImageRef}
                src={CoinImage}
                alt="Coin"
                className={`w-[63.2vw] h-[63.2vw] ease-linear duration-150 transition-all select-none`}
              />
            </div>
            <div>
              {numbers.map((item, index) => (
                <div
                  key={item.key}
                  style={{ position: "absolute", left: item.x, top: item.y }}
                  className="tap-number text-[9.86vw] text-white font-bold"
                >
                  +{levelConfig.tapMultipler[user.tap_multipler_level].to}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[1.44vw] items-center">
            <BoltIcon className="w-[4.33vw] h-[5.86vw] flex-none" />
            <div className="text-[3.2vw] font-bold text-white">
              {user.energy_point.toLocaleString()}
              {` / `}
              <span className="text-[#FA6648]">
                {userEnergySize(user.energy_size_level).toLocaleString()}
              </span>
            </div>
          </div>
          <div
            className="w-[20.53vw] h-[6.4vw] relative"
            onClick={() => dispatch(changePage("boost"))}
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
        <div className="flex flex-col items-center justify-center w-[12.8vw] h-[12.8vw] rounded-r-[1.6vw] bg-[#FA6648] gap-[0.8vw] absolute left-0 top-[58.4vw]" onClick={() => dispatch(changePage("portion"))}>
          {/* <CraftIcon className="w-[7.2vw] h-[7.2vw] flex-none" fill="#221E33" /> */}
          <span className="text-[2.6vw] font-bold text-[#221E33] leading-none">
            CRAFT
          </span>
        </div>
      </div>
      {showBoost && <BoostModal />}
      {showDailylCheckIn && <DailyCheckInModal />}
      {cardProfitModalVisible && (
        <CardProfitModal
          onClose={() => dispatch(setCardProfitModalVisible(false))}
        />
      )}
    </MainLayout>
  );
};

export default MinePage;
