import React, { useState } from 'react';
import API_KEY from './api_key';
import ListOfMovies from './components/ListOfMovies';
import SearchEngine from './components/SearchEngine';
import MovieInterface from './model';

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
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );
      if (res.ok) {
        const body = await res.json();
        setAllMovies(body.results);
        console.log('List of Movies', body.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='movies-screen_container'>
      <SearchEngine
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
      />
      <ListOfMovies allMovies={allMovies} />
    </main>
  );
}

export default App;
