import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { LayoutBackground } from '../types/types'
import BackgroundComponent from '../components/Layout/Background'

interface MainLayoutProps {
  children: React.ReactNode
  bg?: LayoutBackground
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  bg = 'image',
}) => {
  return (
    <div className="relative bg-black min-h-screen w-screen">
      <BackgroundComponent bg={bg} />
      <div className="relative z-20 h-screen overflow-auto">
        <Header />
        <div className="pb-[18.93vw]">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
