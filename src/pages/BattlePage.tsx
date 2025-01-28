import React, { Fragment, useMemo } from "react";
import MainLayout from "../layout/MainLayout";
import { User } from "../types/types";
import { useAppSelector } from "../hooks";
import { Unity, useUnityContext } from "react-unity-webgl";

const BattlePage: React.FC = () => {
  const user = useAppSelector((state) => state.app.game?.user) as User;

  const { unityProvider } = useUnityContext({
    loaderUrl: "build/Build/Game.loader.js",
    dataUrl: "build/Build/Game.data",
    frameworkUrl: "build/Build/Game.framework.js",
    codeUrl: "build/Build/Game.wasm",
  });

  const showBattle = useMemo(() => {
    let userIds = [6469354442, 813830716, 458862687, 1790465451];
    console.log(
      "show portion",
      userIds,
      user.t_user_id,
      userIds.find((e) => e == user.t_user_id)
    );

    if (userIds.find((e) => e == user.t_user_id)) {
      return true;
    } else {
      return false;
    }
  }, [user]);

  return (
    <MainLayout>
      <div className="pt-[7.2vw] px-[6.13vw] pb-[3.46vw]">
        {showBattle ? (
          <div className="w-full">
            <Fragment>
              <Unity
                unityProvider={unityProvider}
                className="unity-desktop"
                style={{ width: "100%", aspectRatio: "1 / 2" }}
              />
            </Fragment>
          </div>
        ) : (
          <div className="flex flex-col items-center mb-[9.06vw]">
            <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[8.53vw]">
              Easy rider
            </div>
            <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center">
              Maximize your heroes and be prepared for Wallachia’s grand
              <br />
              opening. Gaining early access offers significant advantages.
              <br />
              Make sure to be there from day one. Stay tuned for updates
              <br />
              and don’t miss out!
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default BattlePage;
