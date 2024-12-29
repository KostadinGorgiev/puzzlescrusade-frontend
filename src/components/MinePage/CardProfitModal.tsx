import React, { useCallback, useMemo, useState } from "react";
import { User } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axiosInterface from "../../utils/axios";
import MinerImage from "../../assets/images/collect/fennel.png";
import DragonIcon from "../../Icons/DragonIcon";
import levelConfig from "../../config/config.json";
import moment from "moment";
import { claimCardProfit } from "../../store/appSlice";
import { useAdsgram } from "../../utils/useAdgram";
import CameraMovieIcon from "../../Icons/CameraMovieIcon";

interface CardProfitModalProps {
  onClose: () => void;
}

const CardProfitModal: React.FC<CardProfitModalProps> = ({ onClose }) => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const profitAmount = useMemo(() => {
    let diffHrs =
      moment(user.serverTime).diff(
        moment(user.CardClaim.last_claim),
        "seconds"
      ) / 3600;
    diffHrs = diffHrs > 3 ? 3 : diffHrs;

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

    return profitPerHour * diffHrs;
  }, [user]);

  const handleClaimCardProfit = useCallback(
    async (doubleCliam: boolean) => {
      if (loading) return;
      setLoading(true);
      let result = await axiosInterface.post("card/claim", {
        id: user.t_user_id,
        time: user.serverTime,
        last_claim: user.CardClaim.last_claim,
        doubleCliam,
      });
      setLoading(false);
      if (result.data.success)
        dispatch(
          claimCardProfit({
            coin_balance: result.data.coin_balance,
            level_point: result.data.level_point,
          })
        );
      onClose();
    },
    [loading, user, dispatch, onClose]
  );

  const ShowAdButton = () => {
    const onReward = useCallback(() => {
      handleClaimCardProfit(true);
    }, []);
    const onError = useCallback((result: any) => {
      alert(JSON.stringify(result, null, 4));
    }, []);

    /**
     * insert your-block-id
     */
    const showAd = useAdsgram({
      blockId: process.env.REACT_APP_ADSGRAM_BLOCK_ID as string,
      onReward,
      onError,
    });

    return (
      <div
        className="w-[84.53vw] h-[18.13vw] rounded-[2.66vw] bg-[#FAB648] flex items-center justify-center mb-[1.86vw] gap-[5.33vw]"
        onClick={() => showAd()}
      >
        <span className="text-[6.93vw] font-black text-[#221E33]">
          DOUBLE REWARD
        </span>
        <CameraMovieIcon className="w-[5.2vw] h-[5.2vw] flex-none" />
      </div>
    );
  };

  if (Math.floor(profitAmount) > 0) {
    return (
      <div className="absolute top-0 w-screen h-fit min-h-screen bg-[#171819e5] z-[1000] c-modal">
        <img
          src={MinerImage}
          alt="Miner"
          className="absolute top-[6.93vw] left-[0.7vw] w-[98.66vw] h-auto"
        />
        <div className="absolute top-[62.93vw] w-screen h-[20.05vw] bg-gradient-to-t from-[#171819] to-transparent"></div>
        <div className="absolute top-[82.98vw] w-screen h-[calc(100vh-82.98vw)] bg-[#171819]"></div>
        <div className="pt-[82.4vw] px-[7.2vw] pb-[8.66vw] absolute top-0 left-0 w-screen max-h-screen overflow-auto">
          <div className="flex flex-col items-center">
            <div className="text-[9.6vw] font-bold text-[#EAEAEA] leading-none mb-[6.66vw] w-full text-left">
              Welcome back,
              <br /> Crusader!
            </div>
            <div className="text-[4vw] font-medium text-center text-[#EAEAEA] mb-[7.2vw] leading-none">
              Here’s what your mines yielded while you wandered beyond
              Wallachia’s borders.
            </div>
            <div className="flex items-center justify-center gap-[4vw] mb-[9.06vw]">
              <div className="rounded-full w-[12vw] h-[12vw] flex items-center justify-center bg-[#FAB648]">
                <DragonIcon
                  fill="#674B1F"
                  className="w-[11.42vw] h-[11.42vw]"
                />
              </div>
              <div className="text-[10.66vw] font-bold text-[#FAB648]">
                {Math.floor(profitAmount)}
              </div>
            </div>
            <ShowAdButton />
            <div
              className="w-[53.6vw] h-[8.26vw] rounded-[2.66vw] bg-[#EAEAEA] flex items-center justify-center mb-[4.53vw]"
              onClick={() => handleClaimCardProfit(false)}
            >
              <span className="text-[4.26vw] font-black text-[#221E33]">
                COLLECT
              </span>
            </div>
            <div className="text-[4vw] font-medium text-[#AAAAAA] text-center leading-none">
              Don’t forget to return before 3 hours pass,
              <br /> or the magic of your mines will fade.
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardProfitModal;
