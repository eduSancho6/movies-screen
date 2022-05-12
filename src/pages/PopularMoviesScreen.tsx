import React, { useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { API_KEY, URL } from '../api/api_key';
import PopularMovies from '../components/PopularMovies/PopularMovies';

export type AllMovies = {
  allMovies: MovieInterface[];
  setAllMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
};

const PopularMoviesScreen = () => {
  return (
    <React.Fragment>
      <SearchEngine />
      <PopularMovies />
    </React.Fragment>
  );
};

export default PopularMoviesScreen;
