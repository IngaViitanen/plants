import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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
      <div>hello</div>
    </>
  )
}

export default App
