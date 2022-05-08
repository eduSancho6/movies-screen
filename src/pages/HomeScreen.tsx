import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY } from '../api/api_key';
import urlApi from '../api/urlApi';
import {
  addMovies,
  fetchAsyncMovies,
  selectAllMovies,
} from '../features/allMovies/popularMoviesSlice.ts';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  console.log('ALL POPULAR MOVIES', movies);
  return <div>HomeScreen</div>;
};

export default HomeScreen;
