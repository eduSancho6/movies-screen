import React, { useState } from 'react';
import API_KEY from './api_key';
import ListOfMovies from './components/ListOfMovies';
import SearchEngine from './components/SearchEngine';
import MovieInterface from './model';
import axios from 'axios';
import Header from './components/ui/Header/Header';

function App() {
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
    <body className='movies-screen_container'>
      <Header />
      <SearchEngine
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
      />
      <ListOfMovies allMovies={allMovies} />
    </body>
  );
}

export default App;
