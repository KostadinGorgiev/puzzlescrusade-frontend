import React, { useCallback, useEffect, useMemo, useState } from "react";
import CameraMovieIcon from "../Icons/CameraMovieIcon";
import DragonIcon from "../Icons/DragonIcon";
import Ingredient from "../components/PortionPage/Ingredient";
import MainLayout from "../layout/MainLayout";
import moment, { Moment } from "moment-timezone";
import levelConfig from "../config/config.json";
import { getRandomElements, shuffleArray } from "../utils/func";
import { useAppDispatch, useAppSelector } from "../hooks";
import { User } from "../types/types";
import CraftJarImage from "../assets/images/portion/craft_jar.png";
import CraftAuraImage from "../assets/images/portion/craft_aura.png";
import axiosInterface from "../utils/axios";
import { setUserPortion, updateCoinBalance } from "../store/appSlice";
import { useAdsgram } from "../utils/useAdgram";

interface PortionPageProps {}

const PortionPage: React.FC<PortionPageProps> = () => {
  const user = useAppSelector((state) => state.app.game.user) as User;
  const dispatch = useAppDispatch();
  const [time, setTime] = useState<Moment>();
  const [clickedIngredient, setClickedIngredient] = useState<string>("");
  const [wrongAttempt, setWrongAttempt] = useState<boolean>(false);
  const [currentIngredients, setCurrentIngredients] = useState<string[]>([]);
  const [randomIngredients, setRandomIngredients] = useState<any[]>([]);

  useEffect(() => {
    let recipe = levelConfig.recipes.find(
      (e) => e.key === user.UserCurrentPortion.current_recipe
    );
    if (recipe) {
      setCurrentIngredients(recipe.ingredients);
    }
  }, [user.UserCurrentPortion.current_recipe]);

  useEffect(() => {
    const result = getRandomElements(levelConfig.ingredients, 4);
    if (currentIngredients) {
      let includeIngredient = levelConfig.ingredients.find(
        (ingredient) =>
          ingredient.name ===
          currentIngredients[user.UserCurrentPortion.current_ingredient_index]
      );

      setRandomIngredients(shuffleArray([...result, includeIngredient]));
    } else {
      setRandomIngredients(shuffleArray(result));
    }
  }, [currentIngredients, user.UserCurrentPortion.current_ingredient_index]);

  const showFailedCounter = useMemo(() => {
    return (
      moment
        .tz(time, user.serverTimezone)
        .diff(
          moment.tz(
            user.UserCurrentPortion.wrong_attempt_time,
            user.serverTimezone
          ),
          "seconds"
        ) < 60 && user.UserCurrentPortion.wrong_attempt_count > 2
    );
  }, [time, user]);

  const showCraft = useMemo(() => {
    return user.UserCurrentPortion.current_ingredient_index > 4;
  }, [user]);

  const showCollect = useMemo(() => {
    let diffSeconds = moment
      .tz(time, user.serverTimezone)
      .diff(
        moment.tz(user.UserCurrentPortion.craft_time, user.serverTimezone),
        "seconds"
      );
    return diffSeconds >= 60 * 60 * 4;
  }, [time, user]);

  const craftTimeCounter = useMemo(() => {
    let diffSeconds =
      60 * 60 * 4 -
      moment
        .tz(time, user.serverTimezone)
        .diff(
          moment.tz(user.UserCurrentPortion.craft_time, user.serverTimezone),
          "seconds"
        );
    let hours = Math.floor(diffSeconds / 3600);
    let minutes = Math.floor((diffSeconds % 3600) / 60);
    let seconds = diffSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  }, [time, user]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(moment.tz(user.serverTimezone));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [user]);

  const handleClickIngredient = async (ingredient: string) => {
    if (showFailedCounter) return;
    setClickedIngredient(ingredient);
    if (currentIngredients) {
      let rightIngredient = levelConfig.ingredients.find(
        (ingredient) =>
          ingredient.name ===
          currentIngredients[user.UserCurrentPortion.current_ingredient_index]
      );
      if (rightIngredient) {
        if (rightIngredient.name !== ingredient) {
          setWrongAttempt(true);
          setTimeout(() => {
            setWrongAttempt(false);
          }, 100);
        }

        const result = await axiosInterface.post("portion/click-ingredient", {
          id: user.t_user_id,
          ingredient,
        });

        if (result.data.success) dispatch(setUserPortion(result.data.result));
      }
    }
  };

  const ShowAdButton = () => {
    const onReward = useCallback(() => {
      skipWrongAttempTime("ad");
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
      <button
        className="h-[7.46vw] flex items-center px-[2.13vw] gap-[2.13vw] border-[0.26vw] border-[#AAAAAA] bg-[#FAB648] rounded-[1.06vw]"
        onClick={() => showAd()}
      >
        <span className="text-[2.4vw] font-extrabold text-[#221E33]">
          Watch an ad
        </span>
        <CameraMovieIcon className="w-[4vw] h-[4vw] flex-none" />
      </button>
    );
  };

  const skipWrongAttempTime = async (type: string) => {
    let canSkip = true;
    if (type === "ad") {
      if (user.coin_balance < 10000) {
        canSkip = false;
      }
    }

    if (canSkip) {
      const result = await axiosInterface.post(
        "portion/skip-wrong-attempt-time",
        {
          id: user.t_user_id,
          type,
        }
      );
      if (result.data.success) {
        dispatch(setUserPortion(result.data.result));
        if (type === "coin")
          dispatch(updateCoinBalance({ balance: result.data.balance }));
      }
    }
  };

  const handleCraftPortion = async () => {
    const result = await axiosInterface.post("portion/craft", {
      id: user.t_user_id,
    });
    if (result.data.success) dispatch(setUserPortion(result.data.result));
  };

  const handleCollectPortion = async () => {
    const result = await axiosInterface.post("portion/collect", {
      id: user.t_user_id,
    });
    if (result.data.success) dispatch(setUserPortion(result.data.result));
  };

  return (
    <MainLayout bg="gradient-color">
      <div className="p-[6.13vw] text-center">
        <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
          Find the formula
        </div>
        <div className="text-[3.2vw] font-medium text-[#AAAAAA] mb-[5.6vw] leading-none">
          Find all 5 secret ingredients
          <br />
          and craft a magical potion
        </div>
        <div className="flex justify-between gap-[2.6vw] mb-[5.3vw]">
          {currentIngredients &&
            currentIngredients.map((ingredient, index) => {
              if (index < user.UserCurrentPortion.current_ingredient_index) {
                return (
                  <div
                    className="w-[15.7vw] h-[15.7vw] bg-[#149d5427] border-[0.53vw] border-[#119D52] flex items-center justify-center"
                    key={index}
                  >
                    <Ingredient
                      name={ingredient}
                      className="w-[13.06vw] h-[13.06vw] flex-none"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-[15.7vw] h-[15.7vw] bg-white"
                    key={index}
                  ></div>
                );
              }
            })}
        </div>
        {showCraft ? (
          <div className="relative w-full pt-[8vw] pb-[6.4vw]">
            <div className="relative z-20 flex flex-col items-center">
              <img
                src={CraftJarImage}
                alt="Craft Jar"
                className="w-[46.13vw] h-[64.53vw] mb-[6.4vw]"
              />
              {user.UserCurrentPortion.is_crafted ? (
                showCollect ? (
                  <button
                    className="w-[39.2vw] h-[11.2vw] rounded-[2.6vw] bg-[#FAB648] flex items-center justify-center border-none outline-none"
                    onClick={() => handleCollectPortion()}
                  >
                    <span className="text-[6.4vw] font-bold text-[#221E33] uppercase">
                      Collect
                    </span>
                  </button>
                ) : (
                  <button className="w-[39.2vw] h-[11.2vw] rounded-[2.6vw] bg-[#EAEAEA] flex items-center justify-center border-none outline-none">
                    <span className="text-[6.4vw] font-bold text-[#AAAAAA] uppercase">
                      Collect
                    </span>
                  </button>
                )
              ) : (
                <button
                  className="w-[39.2vw] h-[11.2vw] rounded-[2.6vw] bg-[#FAB648] flex items-center justify-center border-none outline-none"
                  onClick={() => handleCraftPortion()}
                >
                  <span className="text-[6.4vw] font-bold text-[#221E33] uppercase">
                    Craft
                  </span>
                </button>
              )}
            </div>
            <div className="w-[64vw] h-[64vw] absolute top-[10.13vw] left-1/2 -translate-x-1/2 opacity-[0.26] rounded-full bg-white">
              <img
                src={CraftAuraImage}
                alt="Craft Aura"
                className="w-full h-full animate-spin"
                style={{ animationDuration: "5s" }}
              />
            </div>
            {!showCollect && user.UserCurrentPortion.is_crafted && (
              <div className="text-[16vw] font-bold text-[#EAEAEA] absolute w-full text-center left-0 top-[12vw]">
                {craftTimeCounter}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="relative pt-[9.06vw] pb-[4.8vw] px-[16.23vw] flex items-center justify-center mb-[4vw]">
              <div className="w-[54.93vw] h-[54.93vw] bg-[#ffffff18] rounded-full border-[0.26vw] border-[#B5B4B4] flex-none flex items-center justify-center">
                {showFailedCounter && (
                  <div className="text-[18.66vw] font-extrabold text-[#EAEAEA]">
                    {60 -
                      moment
                        .tz(time, user.serverTimezone)
                        .diff(
                          moment.tz(
                            user.UserCurrentPortion.wrong_attempt_time,
                            user.serverTimezone
                          ),
                          "seconds"
                        )}
                  </div>
                )}
              </div>
              {randomIngredients.length > 0 && (
                <>
                  <Ingredient
                    name={randomIngredients[0]?.name}
                    className={`w-[18.66vw] h-[18.66vw] absolute top-[0vw] left-[34.4vw] ${
                      clickedIngredient === randomIngredients[0]?.name &&
                      wrongAttempt
                        ? "wrong-attempt"
                        : ""
                    }`}
                    onClick={() =>
                      handleClickIngredient(randomIngredients[0]?.name)
                    }
                  />
                  <Ingredient
                    name={randomIngredients[1]?.name}
                    className={`w-[18.66vw] h-[18.66vw] absolute top-[21.3vw] left-[7.73vw] ${
                      clickedIngredient === randomIngredients[1]?.name &&
                      wrongAttempt
                        ? "wrong-attempt"
                        : ""
                    }`}
                    onClick={() =>
                      handleClickIngredient(randomIngredients[1]?.name)
                    }
                  />
                  <Ingredient
                    name={randomIngredients[2]?.name}
                    className={`w-[18.66vw] h-[18.66vw] absolute top-[21.3vw] left-[61.33vw] ${
                      clickedIngredient === randomIngredients[2]?.name &&
                      wrongAttempt
                        ? "wrong-attempt"
                        : ""
                    }`}
                    onClick={() =>
                      handleClickIngredient(randomIngredients[2]?.name)
                    }
                  />
                  <Ingredient
                    name={randomIngredients[3]?.name}
                    className={`w-[18.66vw] h-[18.66vw] absolute top-[49.06vw] left-[17.33vw] ${
                      clickedIngredient === randomIngredients[3]?.name &&
                      wrongAttempt
                        ? "wrong-attempt"
                        : ""
                    }`}
                    onClick={() =>
                      handleClickIngredient(randomIngredients[3]?.name)
                    }
                  />
                  <Ingredient
                    name={randomIngredients[4]?.name}
                    className={`w-[18.66vw] h-[18.66vw] absolute top-[49.06vw] left-[51.73vw] ${
                      clickedIngredient === randomIngredients[4]?.name &&
                      wrongAttempt
                        ? "wrong-attempt"
                        : ""
                    }`}
                    onClick={() =>
                      handleClickIngredient(randomIngredients[4]?.name)
                    }
                  />
                </>
              )}
            </div>
            {showFailedCounter ? (
              <div className="">
                <div className="text-[4.26vw] font-medium text-[#EAEAEA] mb-[4vw] leading-none">
                  Don't want to wait?
                </div>
                <div className="flex items-center gap-[2.13vw] w-full justify-center">
                  <ShowAdButton />
                  <span className="text-[4.26vw] font-medium text-[#EAEAEA]">
                    OR
                  </span>
                  <button
                    className="h-[7.46vw] flex items-center px-[2.13vw] gap-[1.6vw] border-[0.26vw] border-[#AAAAAA] bg-[#FAB648] rounded-[1.06vw]"
                    onClick={() => skipWrongAttempTime("coin")}
                  >
                    <span className="text-[2.4vw] font-extrabold text-[#221E33]">
                      Pay
                    </span>
                    <DragonIcon
                      className="w-[3.2vw] h-[3.2vw] flex-none"
                      fill="#221E33"
                    />
                    <span className="text-[2.4vw] font-extrabold text-[#221E33]">
                      10 000
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-[4.26vw] font-medium text-[#EAEAEA]">
                You have{" "}
                {showFailedCounter
                  ? 3
                  : 3 - user.UserCurrentPortion.wrong_attempt_count}{" "}
                attempts left
                <br />
                to find the secret ingredient.
              </div>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default PortionPage;
