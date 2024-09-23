import levelConfig from "../config/config.json";
import { UserLevel } from "../types/types";

export function coinsNeedLevelUp(level_point: number): number {
  let nextLevel = levelConfig.level.find(
    (level) => level.from <= level_point && level.to > level_point
  );

  if (nextLevel) {
    return nextLevel.to - level_point;
  }
  return 0;
}

export function userLevel(level_point: number): UserLevel {
  let currentLevelIndex = levelConfig.level.findIndex(
    (level) => level.from <= level_point && level.to > level_point
  );
  return {
    ...levelConfig.level[currentLevelIndex],
    index: currentLevelIndex,
  } as UserLevel;
}

export function userEnergySize(energy_size_level: number): number {
  return levelConfig.energySize[energy_size_level].to;
}
