import { createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api_key';

const searchMovie = async (search: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  );
  return data.json();
};

const allMoviesSlice = createSlice({
  name: 'allMovies',
  initialState: {
    movies: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

console.log('EDU AQUÍ', searchMovie('Hey'));
