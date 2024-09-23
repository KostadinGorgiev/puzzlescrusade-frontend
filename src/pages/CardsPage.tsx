import React from 'react'
import MainLayout from '../layout/MainLayout'
import CardImage from '../assets/images/Card_back.png'

const CardsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="pt-[19.73vw] px-[5.6vw] w-screen flex flex-col items-center">
        <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
          Build your deck
        </div>
        <div className="text-[3.2vw] font-medium text-[#AAAAAA] mb-[4.8vw]">
          Train your skills to explore and conquer the amazing
          <br /> world of Puzzles Crusade and mint NFT Heroes.
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45.33vw] h-[22.13vw] rounded-[2.66vw] border-[#FAB648] border-[0.26vw] flex items-center justify-center z-10 leading-tight">
            <div className="text-[6.4vw] font-bold text-[#FA6648] text-center">
              Comming soon
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[8.26vw] gap-y-[6.93vw]">
            <div className="flex justify-center rounded-[2.6vw] blur-[5px] overflow-hidden">
              <img
                src={CardImage}
                alt="Card"
                className="w-[40.26vw] h-[57.33vw]"
              />
            </div>
            <div className="flex justify-center rounded-[2.6vw] blur-[5px] overflow-hidden">
              <img
                src={CardImage}
                alt="Card"
                className="w-[40.26vw] h-[57.33vw]"
              />
            </div>
            <div className="flex justify-center rounded-[2.6vw] blur-[5px] overflow-hidden">
              <img
                src={CardImage}
                alt="Card"
                className="w-[40.26vw] h-[57.33vw]"
              />
            </div>
            <div className="flex justify-center rounded-[2.6vw] blur-[5px] overflow-hidden">
              <img
                src={CardImage}
                alt="Card"
                className="w-[40.26vw] h-[57.33vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CardsPage
