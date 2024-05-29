import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import YourPlants from './components/YourPlants'
import About from './components/About'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/yourPlants" element={<YourPlants />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
