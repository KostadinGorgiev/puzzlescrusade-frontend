import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import levelConfig from "../config/config.json";
import { recoverEnergy } from "../store/appSlice";

const useRecoverEnergy = (): boolean => {
  const user = useAppSelector((state) => state.app.game?.user);
  const dispatch = useAppDispatch();

  let isStarted = useMemo(() => {
    return user !== undefined;
  }, [user]);

  let recoverTime = useMemo(() => {
    if (user) {
      let recoverMins = levelConfig.recovery[user.energy_recovery_level].to;
      let energySize = levelConfig.energySize[user.energy_size_level].to;
      return (recoverMins * 60) / energySize;
    } else {
      return 0;
    }
  }, [user]);

  useEffect(() => {
    if (recoverTime !== 0) {
      let interval: NodeJS.Timer | null = null;

      if (interval) {
        clearInterval(interval);
      }

      interval = setInterval(() => {
        dispatch(recoverEnergy());
      }, recoverTime * 1000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [recoverTime]);

  return isStarted;
};

export default useRecoverEnergy;
