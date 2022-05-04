import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from '../features/favoriteMovies/favoriteMoviesSlice';

export default configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});
