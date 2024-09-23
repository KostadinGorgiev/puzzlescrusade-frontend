import React from 'react'
import { LayoutBackground } from '../../types/types'

interface BackgroundComponentProps {
  bg: LayoutBackground
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ bg }) => {
  if (bg === 'image') {
    return (
      <>
        <div
          className="w-screen h-screen bg-center bg-cover bg-no-repeat absolute top-0 left-0 z-10"
          style={{ backgroundImage: 'url(/assets/images/bg.jpg)' }}
        ></div>
        <div className="w-[50vw] h-screen absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-[50vw] h-screen absolute top-0 left-[50vw] z-10 bg-gradient-to-l from-black to-transparent"></div>
        <div className="w-[100vw] h-[100vw] absolute bottom-0 left-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
        <div className="w-screen h-screen absolute top-0 left-0 z-10 bg-[#221e33cb]"></div>
      </>
    )
  } else {
    return (
      <div className="w-screen h-fit min-h-screen bg-[radial-gradient(#4B4955,#171819)] absolute top-0 left-0 z-10"></div>
    )
  }
}

export default BackgroundComponent
