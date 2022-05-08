import React, { useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { API_KEY, URL } from '../api_key';
import PopularMovies from '../components/PopularMovies/PopularMovies';

export type AllMovies = {
  allMovies: MovieInterface[];
  setAllMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
};

const PopularMoviesScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  const searchMovie = async (e: React.FormEvent) => {
    e.preventDefault();

    const controller = new AbortController();

    try {
      const { data } = await axios.get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${search}`
      );
      setAllMovies(data.results);
      console.log('Info', data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
    controller.abort();
  };

  return (
    <React.Fragment>
      <SearchEngine
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
      />
      <PopularMovies />
    </React.Fragment>
  );
};

export default PopularMoviesScreen;
