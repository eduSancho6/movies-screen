import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from '../features/favoriteMovies/favoriteMoviesSlice';
import popularMoviesReducer from '../features/allMovies/popularMoviesSlice.ts';

export default configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    popularMovies: popularMoviesReducer,
  },
});
