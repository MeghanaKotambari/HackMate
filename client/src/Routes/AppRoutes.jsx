import LoginPage from '@/components/Auth/LoginPage'
import ProfilePage from '@/components/Auth/ProfilePage'
import RegisterPage from '@/components/Auth/RegisterPage'
import LandingPage from '@/Pages/LandingPage'
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
      </Routes>
    </div>
  )
}

export default AppRoutes
