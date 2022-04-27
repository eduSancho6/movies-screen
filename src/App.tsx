import React, { useState } from 'react';
import api_key from './api_key';

interface MovieInterface {
  original_title: string;
  backdrop_path: string;
  overview?: string;
}

function App() {
  const [search, setSearch] = useState<string>('the lord');
  const [allMovies, setAllMovies] = useState<MovieInterface>();

  const findMovies = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
      );
      if (res.ok) {
        const body = await res.json();
        console.log('List of Movies', body.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='movies-screen_container'>
      <header>
        <h2 className='header_title'> ¿Qúe vemos hoy? </h2>
        <form className='search_form' onSubmit={findMovies}>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='search_input'
          ></input>
          <button type='submit' className='search_button'>
            Search
          </button>
        </form>
      </header>
    </main>
  );
}

export default App;
