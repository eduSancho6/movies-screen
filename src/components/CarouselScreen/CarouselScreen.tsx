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
  const [indexMov, setIndexMov] = useState(0);

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
      <section
        className='carousel-screen_container'
        style={{ marginTop: '5rem' }}
      >
        <h2 style={{ position: 'absolute', top: '-2rem', left: '2rem' }}>
          {' '}
          Películas más populares
        </h2>
        <button
          className='btn-arrow btn-left handle'
          onClick={() => setIndexMov(indexMov + 1)}
          disabled={indexMov === 0}
        >
          <FaChevronLeft />
        </button>
        <div
          className='carousel_container'
          style={{ transform: `translateX(${indexMov * 10}%)` }}
        >
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
        </div>

        <button
          className='btn-arrow btn-right handle'
          onClick={() => setIndexMov(indexMov - 1)}
          disabled={indexMov === -9}
        >
          <FaChevronRight />
        </button>
      </section>
    </React.Fragment>
  );
};

export default CarouselScreen;
