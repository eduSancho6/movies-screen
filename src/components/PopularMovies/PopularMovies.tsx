import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncPopularMovies,
  selectAllPopularMovies,
} from '../../features/allMovies/popularMoviesSlice.ts';
import useGetPopularMovies from '../../hooks/useGetPopularMovies';
import MovieInterface from '../../model';

import Movie from '../Movie/Movie';

const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // Old way to get the popular movies
  const [allMovies] = useGetPopularMovies(page);

  const movies = useSelector(selectAllPopularMovies);
  useEffect(() => {
    dispatch(fetchAsyncPopularMovies());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 id='homescreen_title'>
        {' '}
        Las más populares <span className='green'>... </span>{' '}
      </h3>
      <div className='movies-results_container'>
        <div className='buttons_container'>
          <button
            className={page === 1 ? 'disabled btn' : 'btn btn-backward'}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {' '}
            Atrás
          </button>
          <button
            className={'btn btn-forward'}
            onClick={() => setPage(page + 1)}
          >
            {' '}
            Siguiente
          </button>
        </div>
        {movies.map((mov: MovieInterface, key: number) => {
          return (
            <Movie
              key={key}
              id={mov.id}
              original_title={mov.original_title}
              backdrop_path={mov.backdrop_path}
              poster_path={mov.poster_path}
              overview={mov.overview}
              isFavorite={mov.isFavorite}
              vote_average={mov.vote_average}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PopularMovies;
