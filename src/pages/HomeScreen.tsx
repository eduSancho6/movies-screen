import React, { useEffect, useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine';
import ListOfMovies from '../components/ListOfMovies';
import { API_KEY, URL } from '../api_key';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([
    {
      original_title: '',
      id: 1,
    },
  ]);

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
        ' https://api.themoviedb.org/3/movie/popular?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=es-ES&page=1'
      );
      setAllMovies(data.results);
      console.log(data);
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
      <ListOfMovies allMovies={allMovies} />
    </React.Fragment>
  );
};

export default HomeScreen;
