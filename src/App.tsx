import React, { useState } from 'react';
import api_key from './api_key';

interface MovieInterface {
  original_title: string;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
}

function App() {
  const [search, setSearch] = useState<string>('the lord');
  const [allMovies, setAllMovies] = useState<MovieInterface[]>();

  const findMovies = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
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
      <section className='search-engine_container'>
        <h2 className='header_title'>¿Qué vemos hoy?</h2>
        <form className='search_form' onSubmit={findMovies}>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='search_input'
          ></input>
          <button type='submit' className='search_button'>
            Buscar
          </button>
        </form>
      </section>
      <section className='movies-results_container'>
        {allMovies
          ? allMovies.map((movie, index) => {
              console.log('movie', movie);
              return (
                <article className='movie_card' key={index}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
                    }
                    alt={`${movie.original_title}`}
                  ></img>
                  <h2> {movie.original_title} </h2>
                </article>
              );
            })
          : ''}
      </section>
    </main>
  );
}

export default App;
