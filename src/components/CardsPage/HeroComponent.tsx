import React, { useCallback, useMemo, useState } from "react";
import CardImage from "../../assets/images/Card_back.png";
import levelConfig from "../../config/config.json";
import DragonIcon from "../../Icons/DragonIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { User } from "../../types/types";
import axiosInterface from "../../utils/axios";
import { updateHeroCards } from "../../store/appSlice";
import KaelarSmallImage from "../../assets/images/heros/small/kaelar.png";
import LioraSmallImage from "../../assets/images/heros/small/liora.png";
import SylvarraSmallImage from "../../assets/images/heros/small/sylvarra.png";
import VeldarSmallImage from "../../assets/images/heros/small/veldar.png";
import VornakSmallImage from "../../assets/images/heros/small/vornak.png";
import JackSmallImage from "../../assets/images/heros/small/jack.png";
import AegironSmallImage from "../../assets/images/heros/small/aegiron.png";
import DrektharSmallImage from "../../assets/images/heros/small/drekthar.png";

interface HeroComponentProps {
  hero: (typeof levelConfig.heros)[0];
  onClick: () => void;
}

const heroImages: { [key: string]: string } = {
  light: LioraSmallImage,
  dark: SylvarraSmallImage,
  volcano: KaelarSmallImage,
  forest: VeldarSmallImage,
  ocean: VornakSmallImage,
  jack: JackSmallImage,
  aegiron: AegironSmallImage,
  drekthar: DrektharSmallImage,
};

const HeroComponent: React.FC<HeroComponentProps> = ({ hero, onClick }) => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleUnlockHeroCard = useCallback(async () => {
    if (user.coin_balance > hero.level[0].cost) {
      if (loading) return;
      setLoading(true);
      let result = await axiosInterface.post("card/unlock", {
        id: user.t_user_id,
        card_slug: hero.slug,
      });
      setLoading(false);
      if (result.data.success) {
        dispatch(
          updateHeroCards({
            card: result.data.cards,
            balance: result.data.balance,
          })
        );
      }
    }
  }, [loading, user, hero, dispatch]);

  const userHeroCard = useMemo(() => {
    return user.Cards.find((e) => e.card_slug === hero.slug);
  }, [user, hero]);

  const upgradable = useMemo(() => {
    if (userHeroCard) {
      if (userHeroCard.card_level < hero.level.length - 1) {
        return hero.level[userHeroCard.card_level + 1].cost < user.coin_balance;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, [user, userHeroCard, hero]);

  if (userHeroCard) {
    return (
      <div
        className="flex justify-center w-[40.26vw] h-[57.33vw] border-[0.26vw] border-[#FAB648] rounded-[2.6vw] pt-[4vw] pb-[2.93vw] px-[3.2vw]"
        style={{ background: "radial-gradient(#4B4955, #171819)" }}
        onClick={() => onClick()}
      >
        <div className="flex flex-col items-center">
          <img
            src={heroImages[hero.slug]}
            alt={hero.name}
            className="w-[27.2vw] h-[27.2vw] flex-none rounded-[1.33vw] overflow-hidden mb-[2.66vw] border-[0.26vw] border-[#FAB648]"
          />
          <div className="text-[3.2vw] font-bold text-white leading-tight mb-[0.26vw] text-center">
            {hero.name}
          </div>
          <div className="text-[2.13vw] font-normal text-[#AAAAAA] leading-tight text-center mb-[2.66vw]">
            {hero.title}
          </div>
          <div className="w-full flex items-center gap-[1.6vw] justify-center mb-[2.13vw]">
            <span className="text-[2.13vw] font-normal text-[#AAAAAA] leading-tight">
              Profit per Hour
            </span>
            <div className="rounded-full w-[4vw] h-[4vw] flex items-center justify-center bg-[#FAB648]">
              <DragonIcon fill="#674B1F" className="w-[3.42vw] h-[3.42vw]" />
            </div>
            <span className="text-[2.93vw] font-bold text-[#FAB648] leading-tight">
              {hero.level[userHeroCard.card_level].profit}
            </span>
          </div>
          <div className="w-full h-[0.26vw] flex-none bg-[#eaeaea4d] mb-[1.6vw]"></div>
          {userHeroCard.card_level < hero.level.length - 1 ? (
            <div className="flex items-center justify-start w-full">
              <div className="w-[9.86vw] text-center text-[2.4vw] font-extrabold text-white">
                Lvl. {userHeroCard.card_level + 1}
              </div>
              <div className="h-[4.26vw] w-[0.26vw] bg-[#eaeaea4d] mr-[1.33vw]"></div>
              <div
                className={`rounded-full w-[3.2vw] h-[3.2vw] flex items-center justify-center mr-[1.33vw] ${
                  upgradable ? "bg-[#FAB648]" : "bg-[#EAEAEA]"
                }`}
              >
                <DragonIcon
                  fill={upgradable ? "#674B1F" : "#aaaaaa"}
                  className="w-[2.62vw] h-[2.62vw]"
                />
              </div>
              <div
                className={`text-[2.66vw] font-bold ${
                  upgradable ? "text-[#FAB648]" : "text-[#EAEAEA]"
                }`}
              >
                {hero.level[userHeroCard.card_level + 1]?.cost}
              </div>
            </div>
          ) : (
            <div className="text-[3.2vw] font-bold leading-none text-[#4B4955] w-full text-center">
              Max Level
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center w-[40.26vw] relative">
        <img
          src={CardImage}
          alt="Card"
          className="w-[40.26vw] h-[57.33vw] border-[0.26vw] border-[#FAB648] rounded-[2.6vw] blur-[5px] overflow-hidden"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32.26vw] h-[15.46vw] border-[0.26vw] border-[#FAB648] rounded-[2.66vw] pt-[1.86vw] pb-[2.93vw] px-[3.46vw] bg-[#171819e5]"
          onClick={() => handleUnlockHeroCard()}
        >
          <div className="text-center text-[3.73vw] font-bold text-[#FA6648]">
            Unlock card
          </div>
          <div className="flex items-center justify-center gap-[0.8vw]">
            <div className="rounded-full w-[4.8vw] h-[4.8vw] flex items-center justify-center bg-[#FAB648]">
              <DragonIcon fill="#674B1F" className="w-[4.22vw] h-[4.22vw]" />
            </div>
            <div className="text-[2.93vw] font-bold text-[#FAB648] tracking-tight">
              {hero.level[0].cost} Dragons
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HeroComponent;
