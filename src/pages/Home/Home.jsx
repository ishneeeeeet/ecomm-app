import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=bc593757d55de13708c256dad97776c2"
        );
        setPopularMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
          to={`/movie/${movie && movie.backdrop}`}
          ></Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
