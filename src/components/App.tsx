import React, { useEffect, useState } from "react";
import BattlePage from "../pages/BattlePage";
import CardsPage from "../pages/CardsPage";
import DailyCheckInPage from "../pages/DailyCheckInPage";
import EarnPage from "../pages/EarnPage";
import FriendsPage from "../pages/FriendsPage";
import MinePage from "../pages/MinePage";
import ProfilePage from "../pages/ProfilePage";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useInitData, useMiniApp } from "@telegram-apps/sdk-react";
import {
  claimCardProfitSocket,
  initializeUser,
  setLoading,
} from "../store/appSlice";
import useRecoverEnergy from "../hooks/useRecoverEnergy";
import { ExpandedTGUser } from "../types/types";
import Loading from "./Loading/Loading";
import Introduction from "./Introduction/Introduction";
import socketIo from "socket.io-client";

const App: React.FC = () => {
  const activePage = useAppSelector((state) => state.app.activePage);
  const [initUser, setInitUser] = useState<ExpandedTGUser | null>(null);
  const initData = useInitData();
  const miniApp = useMiniApp();

  const loading = useAppSelector((state) => state.app.loading);
  const user = useAppSelector((state) => state.app.game?.user);

  const setupEnergyRecover = useRecoverEnergy();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (miniApp) {
      miniApp.setHeaderColor("#232323");
    }
  }, [miniApp]);

  useEffect(() => {
    if (initData?.user) {
      setInitUser({ ...initData.user, startParam: initData.startParam });
    }
  }, [initData?.user]);

  useEffect(() => {
    if (initUser)
      dispatch(initializeUser(initUser)).then(() => {
        // setTimeout(() => {
        dispatch(setLoading(false));
        // }, 3000);
      });
    initSocket();
  }, [initUser]);

  const initSocket = () => {
    if (initUser) {
      const socket = socketIo(`${process.env.REACT_APP_API_URL}`);

      socket.on("connect", () => {
        socket.emit("addUser", { userId: initUser.id });
      });
      socket.on("card_profit", (data) => {
        dispatch(claimCardProfitSocket(data.coin));
      });
      socket.on("ternimate_session", (data) => {
        miniApp.close();
      });
    }
  };

  if (loading) {
    return <Loading />;
  } else if (!user) {
    return <div className="">Error when fetch user data</div>;
  } else if (user.isNew) {
    return <Introduction />;
  } else {
    switch (activePage) {
      case "mine":
        return <MinePage />;
      case "boost":
        return <MinePage showBoost={true} />;
      case "profile":
        return <ProfilePage />;
      case "cards":
        return <CardsPage />;
      case "friends":
        return <FriendsPage />;
      case "earn":
        return <EarnPage />;
      case "daily-checkin":
        return <DailyCheckInPage />;
      case "battle":
        return <BattlePage />;
      default:
        return <MinePage />;
    }
  }
};

export default App;
