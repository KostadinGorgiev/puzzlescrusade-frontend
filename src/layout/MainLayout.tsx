import React, { useMemo } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { LayoutBackground, User } from "../types/types";
import BackgroundComponent from "../components/Layout/Background";
import moment from "moment";
import { useAppSelector } from "../hooks";

interface MainLayoutProps {
  children: React.ReactNode;
  bg?: LayoutBackground;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, bg = "image" }) => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const showDailylCheckIn = useMemo((): boolean => {
    return !moment(user.serverTime, "YYYY-MM-DD").isSame(
      moment(user.DailyCheckIn.last_check_in, "YYYY-MM-DD"),
      "day"
    );
  }, [user]);
  return (
    <div className="relative bg-black min-h-screen w-screen">
      <BackgroundComponent bg={bg} />
      <div
        className={`relative z-20 h-screen ${
          showDailylCheckIn ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        <Header />
        <div className="pb-[18.93vw]">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
