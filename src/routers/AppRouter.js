import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/logIn' element={<LoginScreen />} />
        <Route path='/*' element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
