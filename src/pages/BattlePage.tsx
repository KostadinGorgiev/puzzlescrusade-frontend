import React from "react";
import MainLayout from "../layout/MainLayout";

const BattlePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="pt-[7.2vw] px-[6.13vw] pb-[3.46vw]">
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
      </div>
    </MainLayout>
  );
};

export default BattlePage;
