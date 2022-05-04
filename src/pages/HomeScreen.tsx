import React, { useEffect, useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { API_KEY, URL } from '../api_key';
import Movie from '../components/Movie/Movie';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);
  const [page, setPage] = useState<number>(1);

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

  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
      );
      setAllMovies(data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <React.Fragment>
      <SearchEngine
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
      />

      <h3 id='homescreen_title'>
        {' '}
        Las más populares <span className='green'>... </span>{' '}
      </h3>

      <div className='movies-results_container'>
        {allMovies.map((mov: MovieInterface, key: number) => {
          return (
            <Movie
              key={key}
              id={mov.id}
              original_title={mov.original_title}
              backdrop_path={mov.backdrop_path}
              poster_path={mov.poster_path}
              overview={mov.overview}
              isFavorite={mov.isFavorite}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HomeScreen;
