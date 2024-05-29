import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import YourPlants from './components/YourPlants'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  const api_key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://perenual.com/api/species-list?key=${api_key}`);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [])

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
