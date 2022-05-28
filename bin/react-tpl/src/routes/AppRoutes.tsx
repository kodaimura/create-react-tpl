import React from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {
  LoginPage,
  SignupPage,
  Home
} from '../components/pages'

import {
  NotFoundPage
} from "../components/pages/errors"


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes