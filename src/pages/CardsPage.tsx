import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import levelConfig from "../config/config.json";
import HeroComponent from "../components/CardsPage/HeroComponent";
import HeroModal from "../components/CardsPage/HeroModal";

const CardsPage: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<
    (typeof levelConfig.heros)[0] | null
  >(null);

  return (
    <MainLayout>
      <div className="py-[7.2vw] px-[5.6vw] w-screen flex flex-col items-center">
        <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
          Build your deck
        </div>
        <div className="text-[3.2vw] font-medium text-[#AAAAAA] mb-[4.8vw] text-center">
          Train your skills to explore and conquer the amazing
          <br /> world of Puzzles Crusade and mint NFT Heroes.
        </div>
        <div className="relative">
          <div className="w-screen">
            <div className="grid grid-cols-2 gap-x-[8.26vw] gap-y-[6.93vw] w-fit m-auto">
              {levelConfig.heros.map((hero, index) => (
                <HeroComponent
                  hero={hero}
                  onClick={() => {
                    document.querySelector(".main-layout")?.scrollTo({
                      top: 0,
                      behavior: "auto",
                    });
                    setSelectedHero(hero);
                  }}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedHero && (
        <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
      )}
    </MainLayout>
  );
};

export default CardsPage;
