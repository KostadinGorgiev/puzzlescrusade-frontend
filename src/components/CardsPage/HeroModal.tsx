import React, { useCallback, useMemo, useState } from "react";
import { HeroType, User, UserCard } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import levelConfig from "../../config/config.json";
import DarknessIcon from "../../Icons/DarknessIcon";
import ArrowUpIcon from "../../Icons/ArrowUpIcon";
import DragonIcon from "../../Icons/DragonIcon";
import axiosInterface from "../../utils/axios";
import { updateHeroCards } from "../../store/appSlice";
import CircleXMarkIcon from "../../Icons/CircleXMarkIcon";
import KaelarBigImage from "../../assets/images/heros/small/kaelar.png";
import LioraBigImage from "../../assets/images/heros/small/liora.png";
import SylvarraBigImage from "../../assets/images/heros/small/sylvarra.png";
import VeldarBigImage from "../../assets/images/heros/small/veldar.png";
import VornakBigImage from "../../assets/images/heros/small/vornak.png";
import JackBigImage from "../../assets/images/heros/small/jack.png";
import AegironBigImage from "../../assets/images/heros/small/aegiron.png";
import DrektharBigImage from "../../assets/images/heros/small/drekthar.png";
import MorgathBigImage from "../../assets/images/heros/small/morgath.png";
import FennelBigImage from "../../assets/images/heros/small/fennel.png";
import RuxandraRedtideBigImage from "../../assets/images/heros/small/ruxandra_redtide.png";
import RakaniBigImage from "../../assets/images/heros/small/rakani.png";
import SplashBigImage from "../../assets/images/heros/small/splash.png";
import ElaraBigImage from "../../assets/images/heros/small/elara.png";

interface HeroModalProps {
  hero: (typeof levelConfig.heros)[0];
  onClose: () => void;
}

const heroImages: { [key: string]: string } = {
  liora: LioraBigImage,
  sylvarra: SylvarraBigImage,
  kaelar: KaelarBigImage,
  veldar: VeldarBigImage,
  vornak: VornakBigImage,
  jack: JackBigImage,
  aegiron: AegironBigImage,
  drekthar: DrektharBigImage,
  morgath: MorgathBigImage,
  fennel: FennelBigImage,
  ruxandra_redtide: RuxandraRedtideBigImage,
  rakani: RakaniBigImage,
  splash: SplashBigImage,
  elara: ElaraBigImage,
};

const heroTypeIcons: { [key: string]: React.ReactNode } = {
  light: <DarknessIcon className="w-[3.2vw] h-[3.2vw] flex-none" />,
  dark: <DarknessIcon className="w-[3.2vw] h-[3.2vw] flex-none" />,
  volcano: <DarknessIcon className="w-[3.2vw] h-[3.2vw] flex-none" />,
  forest: <DarknessIcon className="w-[3.2vw] h-[3.2vw] flex-none" />,
  ocean: <DarknessIcon className="w-[3.2vw] h-[3.2vw] flex-none" />,
};

const HeroModal: React.FC<HeroModalProps> = ({ hero, onClose }) => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  const userHeroCard: UserCard = useMemo(() => {
    return user.Cards.find((e) => e.card_slug === hero.slug);
  }, [user, hero]) as UserCard;

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

  const handleUpgradeCard = useCallback(async () => {
    if (user.coin_balance > hero.level[userHeroCard.card_level + 1].cost) {
      if (loading) return;
      setLoading(true);
      let result = await axiosInterface.post("card/upgrade", {
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
        onClose();
      }
    }
  }, [loading, dispatch, user, hero, onClose, userHeroCard]);

  const handleClose = () => {
    setHidden(true);
    setTimeout(() => {
      setHidden(false);
      onClose();
    }, 190);
  };

  return (
    <div
      className={`fixed top-0 w-screen h-fit min-h-screen bg-[#171819e5] z-[1000] c-modal ${
        hidden ? "face-out-animation" : "face-in-animation"
      }`}
    >
      <img
        src={heroImages[userHeroCard.card_slug]}
        alt={hero.name}
        className={`absolute top-0 left-0 w-[100vw] h-[100vw] ${
          hidden ? "hero-modal-content-close" : "hero-modal-content"
        }`}
      />
      <div
        className={`absolute top-[62.93vw] w-screen h-[20.05vw] bg-gradient-to-t from-[#171819] to-transparent ${
          hidden ? "face-out-animation" : "face-in-animation"
        }`}
      ></div>
      <div
        className={`absolute top-[82.98vw] w-screen h-[calc(100vh-82.98vw)] bg-[#171819] ${
          hidden ? "face-out-animation" : "face-in-animation"
        }`}
      ></div>
      <div className="pt-[77.06vw] px-[7.73vw] pb-[8.8vw] absolute top-0 left-0 w-screen max-h-screen overflow-auto hero-modal-content">
        <div className="flex flex-col items-center">
          <div className="text-[9.6vw] font-bold text-[#EAEAEA] leading-none mb-[1.33vw]">
            {hero.name}
          </div>
          <div className="text-[4.26vw] font-normal text-[#AAAAAA] mb-[4vw] leading-none">
            {hero.title}
          </div>
          <div
            className="w-[37.06vw] h-[6.93vw] rounded-[1.6vw] flex items-center justify-center gap-[2.13vw] mb-[3.73vw]"
            style={{
              backgroundColor:
                levelConfig.heroType[hero.type as HeroType].color,
            }}
          >
            {heroTypeIcons[hero.type]}
            <span className="text-[2.66vw] font-medium text-[#EAEAEA]">
              {levelConfig.heroType[hero.type as HeroType].name}
            </span>
          </div>
          <div className="text-[2.93vw] font-normal text-[#AAAAAA] mb-[5.33vw] max-w-[53.33vw] text-center leading-none">
            {hero.description}
          </div>
          <div className="w-full h-[0.26vw] bg-[#FAB648] mb-[6.4vw]"></div>
          <div className="text-[4vw] font-normal text-[#AAAAAA] mb-[4.26vw] leading-none">
            Profit per Hour
          </div>
          {hero.level.length - 1 > userHeroCard.card_level ? (
            <>
              <div className="h-[14.13vw] flex items-center px-[5.86vw] rounded-[2.66vw] bg-[#212326] mb-[1.6vw]">
                <ArrowUpIcon className="w-[7.13vw] h-[4.1vw] mr-[4.26vw]" />
                <span className="text-[8vw] font-bold text-[#FAB648] mr-[4vw]">{`+ ${
                  hero.level[userHeroCard.card_level].increase
                } `}</span>
                <div className="rounded-full w-[9.6vw] h-[9.6vw] flex items-center justify-center bg-[#FAB648]">
                  <DragonIcon
                    fill="#674B1F"
                    className="w-[9.02vw] h-[9.02vw]"
                  />
                </div>
              </div>
              <div className="flex gap-[1.6vw] items-center mb-[6.93vw]">
                <div className="flex items-center gap-[1.2vw] opacity-40">
                  <div className="text-[4vw] font-bold text-[#EAEAEA]">
                    +{hero.level[userHeroCard.card_level].profit}
                  </div>
                  <div className="rounded-full w-[4.8vw] h-[4.8vw] flex items-center justify-center bg-[#FAB648]">
                    <DragonIcon
                      fill="#674B1F"
                      className="w-[4.22vw] h-[4.22vw]"
                    />
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[4vw] h-[1.98vw] flex-none"
                  viewBox="0 0 14.904 7.426"
                >
                  <path
                    id="arrow-up"
                    d="M13.336,3.348a.31.31,0,0,1-.439.006L10.386.9a.937.937,0,0,0-.35-.225V14.593a.31.31,0,0,1-.621,0V.673a.928.928,0,0,0-.35.217L6.525,3.329a.311.311,0,0,1-.43-.448L8.632.445A1.572,1.572,0,0,1,9.726,0a1.628,1.628,0,0,1,1.1.462l2.507,2.447a.311.311,0,0,1,0,.439Z"
                    transform="translate(14.904 -5.999) rotate(90)"
                    fill="#eaeaea"
                  />
                </svg>

                <div className="flex items-center gap-[1.2vw]">
                  <div className="text-[4vw] font-bold text-[#EAEAEA]">
                    +{hero.level[userHeroCard.card_level + 1].profit}
                  </div>
                  <div className="rounded-full w-[4.8vw] h-[4.8vw] flex items-center justify-center bg-[#FAB648]">
                    <DragonIcon
                      fill="#674B1F"
                      className="w-[4.22vw] h-[4.22vw]"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-[14.13vw] flex items-center px-[5.86vw] rounded-[2.66vw] bg-[#212326] mb-[13.33vw]">
                <span className="text-[8vw] font-bold text-[#FAB648] mr-[4vw]">{`+ ${
                  hero.level[userHeroCard.card_level].profit
                } `}</span>
                <div className="rounded-full w-[9.6vw] h-[9.6vw] flex items-center justify-center bg-[#FAB648]">
                  <DragonIcon
                    fill="#674B1F"
                    className="w-[9.02vw] h-[9.02vw]"
                  />
                </div>
              </div>
            </>
          )}
          {hero.level.length - 1 > userHeroCard.card_level ? (
            <div
              className={`w-full h-[18.13vw] rounded-[2.66vw] items-center justify-center gap-[2.66vw] flex ${
                upgradable
                  ? "bg-gradient-to-b from-[#FB6648] to-[#FAB648]"
                  : "bg-[#aaaaaa]"
              }`}
              onClick={() => handleUpgradeCard()}
            >
              <div
                className={`rounded-full w-[10.66vw] h-[10.66vw] flex items-center justify-center ${
                  upgradable ? "bg-[#FAB648]" : "bg-[#aaaaaa]"
                }`}
              >
                <DragonIcon
                  fill={upgradable ? "#674B1F" : "#eaeaea"}
                  className="w-[10.09vw] h-[10.09vw]"
                />
              </div>
              <span className="text-[10.66vw] font-bold text-white">
                {hero.level[userHeroCard.card_level + 1].cost}
              </span>
            </div>
          ) : (
            <div className="w-full h-[18.13vw] rounded-[2.66vw] items-center justify-center gap-[2.66vw] flex bg-[#aaaaaa]">
              <span className="text-[10.66vw] font-bold text-white">
                Max Level
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-y-[2.4vw] gap-x-[2.66vw]"></div>
      </div>
      <CircleXMarkIcon
        fill="#fa6648"
        className="w-[6.4vw] h-[6.4vw] absolute top-[8.26vw] right-[6.13vw]"
        onClick={() => handleClose()}
      />
    </div>
  );
};

export default HeroModal;
