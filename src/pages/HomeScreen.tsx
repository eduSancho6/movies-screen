import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel/Carousel';
import SearchEngine from '../components/SearchEngine/SearchEngine';

import {
  fetchAsyncPopularMovies,
  selectAllPopularMovies,
} from '../features/allMovies/popularMoviesSlice.ts';
import {
  fetchAsyncTopRatedMovies,
  selectAllTopRatedMovies,
} from '../features/topRated/topRatedMoviesSlice';
import {
  fetchAsyncUpcomingMovies,
  selectUpcomingMovies,
} from '../features/upcomingMovies/upcomingMovies';

const HomeScreen = () => {
  const [indexPopular, setIndexPopular] = useState(0);
  const [indexRated, setIndexRated] = useState(0);
  const [indexUpcoming, setIndexUpcoming] = useState(0);

  const dispatch = useDispatch();

  /*   useEffect(() => {
  }, [dispatch]); */

  useEffect(() => {
    dispatch(fetchAsyncPopularMovies());
    dispatch(fetchAsyncTopRatedMovies());
    dispatch(fetchAsyncUpcomingMovies());
  }, []);

  const popularMovies = useSelector(selectAllPopularMovies);
  const topRatedMovies = useSelector(selectAllTopRatedMovies);
  const [upcomingMovies] = useSelector(selectUpcomingMovies);

  console.log('POPULAR', popularMovies);
  console.log('TOP RATED', topRatedMovies);
  console.log('UPCOMING', upcomingMovies);

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
    </React.Fragment>
  );
};

export default HomeScreen;
