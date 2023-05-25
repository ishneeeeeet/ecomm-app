import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
    
  return (
    <div>
        <div>
            <Link to="/" >Home</Link>
            <Link to="/movies/popular" >Popular</Link>
            <Link to="/movies/top_rated" >Top Rated</Link>
            <Link to="/movies/upcoming" >Upcoming</Link>
        </div>
    </div>
  )
}

export default Header