import React from 'react';
import MovieInterface from '../model';
import SearchEngine from '../components/SearchEngine/SearchEngine';
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
