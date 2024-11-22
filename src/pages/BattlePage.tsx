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
            Make sure you max your heroes and be ready when we
            <br />
            open Wallachia for you. First day when we open the gates
            <br />
            comes with a great advantage. Follow closely our updates
            <br />
            and don't miss out
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BattlePage;
