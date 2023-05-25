import React, { useEffect } from 'react'
import axios from "axios"

const Home = () => {
    

    useEffect(() => {
        const response = axios.get(['https://api.themoviedb.org/3/movie/popular?api_key=bc593757d55de13708c256dad97776c2'])

    })
  return (
    <div>Home</div>
  )
}

export default Home