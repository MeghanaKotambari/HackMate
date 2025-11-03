import LoginPage from '@/components/Auth/LoginPage'
import ProfilePage from '@/components/Auth/ProfilePage'
import RegisterPage from '@/components/Auth/RegisterPage'
import CreateTeam from '@/Pages/Createteam'
import HomePage from '@/Pages/HomePage'
import JoinTeam from '@/Pages/Jointeam'
import LandingPage from '@/Pages/LandingPage'
import UserDashboard from '@/Pages/UserDashboard'
import ViewDetails from '@/Pages/ViewDetails'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
         <Route path="/home" element={<HomePage/>}/>
              <Route path="/createteam" element={<CreateTeam/>}/>
              <Route path="/jointeam" element={<JoinTeam/>}/>
              <Route path="/viewdetails" element={<ViewDetails/>}/>
              <Route path="/user" element={<UserDashboard/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
