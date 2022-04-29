import React, { useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import Header from '../components/ui/Header/Header';
import SearchEngine from '../components/SearchEngine';
import ListOfMovies from '../components/ListOfMovies';
import API_KEY from '../api_key';

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('the lord');
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
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
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
      <ListOfMovies allMovies={allMovies} />
    </React.Fragment>
  );
};

export default HomeScreen;
