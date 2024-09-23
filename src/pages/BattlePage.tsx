import React from 'react'
import MainLayout from '../layout/MainLayout'

const BattlePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="pt-[7.2vw] px-[6.13vw] pb-[3.46vw]">
        <div className="flex flex-col items-center mb-[9.06vw]">
          <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[8.53vw]">
            Easy rider
          </div>
          <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center">
            In order to enter the battle mode you need to hold 5<br /> fully
            grown hero cards. Yes, yes, that isn’t easy to
            <br /> achieve but you know how the sayin goes:
            <br /> “The harder the battle, the sweeter the victory.”
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BattlePage
