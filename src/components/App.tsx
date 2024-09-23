import React, { useEffect, useState } from 'react'
import BattlePage from '../pages/BattlePage'
import CardsPage from '../pages/CardsPage'
import DailyCheckInPage from '../pages/DailyCheckInPage'
import EarnPage from '../pages/EarnPage'
import FriendsPage from '../pages/FriendsPage'
import MinePage from '../pages/MinePage'
import ProfilePage from '../pages/ProfilePage'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useInitData, User } from '@telegram-apps/sdk-react'
import { initializeUser } from '../store/appSlice'
import useRecoverEnergy from '../hooks/useRecoverEnergy'

const App: React.FC = () => {
  const activePage = useAppSelector((state) => state.app.activePage)
  const [initUser, setInitUser] = useState<User | null>(null);
  const initData = useInitData();

  const loading = useAppSelector((state) => state.app.loading)
  const user = useAppSelector((state) => state.app.game?.user);

  const setupEnergyRecover = useRecoverEnergy();

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (initData?.user) {
      console.log(initData);
      
      setInitUser(initData.user)
    }
  }, [initData?.user])

  useEffect(() => {
    if (initUser)
      dispatch(initializeUser(initUser))
  }, [initUser])



  if (loading) {
    return <div className="">loading</div>
  } else if (!user) {
    return <div className="">Error when fetch user data</div>
  } else {
    switch (activePage) {
      case 'mine':
        return <MinePage />
      case 'boost':
        return <MinePage showBoost={true} />
      case 'profile':
        return <ProfilePage />
      case 'cards':
        return <CardsPage />
      case 'friends':
        return <FriendsPage />
      case 'earn':
        return <EarnPage />
      case 'daily-checkin':
        return <DailyCheckInPage />
      case 'battle':
        return <BattlePage />
      default:
        return <MinePage />
    }
  }
}

export default App
