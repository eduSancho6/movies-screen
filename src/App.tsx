import React from 'react';
import api_key from './api_key';

function App() {
  const findMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${'the lord'}`
      );
      if (res.ok) {
        const body = await res.json();
        console.log('List of Movies', body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  findMovies();

  return <main className='movies-screen_container'></main>;
}

export default App;
