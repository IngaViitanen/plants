import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Plants = () => {
    const [plants, setPlants] = useState([])
    const api_key = import.meta.env.VITE_API_KEY


    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`https://perenual.com/api/species-list?key=${api_key}`);
          setPlants(response.data)
        //   CONNECTED TO TODO
          console.log(response.data.data.map((d) => d.default_image?.original_url))
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [])

    // console.log(plants?.data.map((plant) => {
    //     plant
    // }))
  return (
    <>
    {plants !== null ? 
        <div>
            {plants?.data?.map((plant, i) => (
                <>
                <p>{plant.common_name}</p>
                {/* TODO: FIX MAPPING */}
                {/* <img src={plant?.default_image?.thumbnail} alt={plant?.common_name} /> */}
                </>
            ))}
        </div>
        : <p>loading...</p>
    }
    </>
  )
}

export default Plants