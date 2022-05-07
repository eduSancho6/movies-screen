import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { API_KEY, URL } from '../../api_key';
import Movie from '../Movie/Movie';
import MovieInterface from '../../model';
import './carouselScreen.css';
import SearchEngine from '../SearchEngine/SearchEngine';

const CarouselScreen = () => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
      );

      console.log(data);
      setAllMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <React.Fragment>
      <section className='carousel-screen_container'>
        <button className='btn-arrow btn-left handle'>
          <FaChevronLeft />
        </button>
        <div className='carousel_container'></div>
        {allMovies.map((mov) => {
          return (
            <Movie
              id={mov.id}
              original_title={mov.original_title}
              poster_path={mov.poster_path}
              vote_average={mov.vote_average}
            />
          );
        })}
        <button className='btn-arrow btn-right handle'>
          <FaChevronRight />
        </button>
      </section>
    </React.Fragment>
  );
};

export default CarouselScreen;
