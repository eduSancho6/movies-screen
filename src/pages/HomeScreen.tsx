import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel/Carousel';
import SearchEngine from '../components/SearchEngine/SearchEngine';

import {
  fetchAsyncPopularMovies,
  selectAllPopularMovies,
} from '../features/allMovies/popularMoviesSlice.ts';
import {
  fetchAsyncNowPlayingMovies,
  selectNowPlayingMovies,
} from '../features/latestMovies/latestMoviesSlice';
import {
  fetchAsyncTopRatedMovies,
  selectAllTopRatedMovies,
} from '../features/topRated/topRatedMoviesSlice';

const HomeScreen = () => {
  const [indexPopular, setIndexPopular] = useState(0);
  const [indexRated, setIndexRated] = useState(0);
  const [indexPlaying, setIndexPlaying] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncPopularMovies());
    dispatch(fetchAsyncTopRatedMovies());
    dispatch(fetchAsyncNowPlayingMovies());
  }, [dispatch]);

  const popularMovies = useSelector(selectAllPopularMovies);
  const topRatedMovies = useSelector(selectAllTopRatedMovies);
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);

  console.log('LAtestMovies', nowPlayingMovies);

  return (
    <React.Fragment>
      <SearchEngine />

      <Carousel
        allMovies={popularMovies}
        indexMov={indexPopular}
        setIndexMov={setIndexPopular}
      >
        Las películas más populares
      </Carousel>
      <Carousel
        allMovies={topRatedMovies}
        indexMov={indexRated}
        setIndexMov={setIndexRated}
      >
        Las películas mejor valoradas
      </Carousel>
      <Carousel
        allMovies={nowPlayingMovies}
        indexMov={indexPlaying}
        setIndexMov={setIndexPlaying}
      >
        Ahora en cines
      </Carousel>
    </React.Fragment>
  );
};

export default HomeScreen;
