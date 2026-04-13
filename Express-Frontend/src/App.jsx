import React from 'react'

import { Router , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import JoinUs from './pages/JoinUs'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/JoinUs" element={<JoinUs />} />
      <Route path="/Profile" element={<Profile />} />
      
    </Routes>
    </>
  )
}

export default App
