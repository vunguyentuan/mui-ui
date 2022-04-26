import * as React from 'react'
import { Routes, Route } from "react-router-dom";

import MainLayout from './layout/main'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  )
}

export default App
