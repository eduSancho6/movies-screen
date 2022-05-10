import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from '../features/favoriteMovies/favoriteMoviesSlice';
import popularMoviesReducer from '../features/allMovies/popularMoviesSlice.ts';
import topRatedMoviesSlice from '../features/topRated/topRatedMoviesSlice';
import upcomingMoviesSlice from '../features/upcomingMovies/upcomingMovies';
import latestMoviesSlice from '../features/latestMovies/latestMoviesSlice';

export default configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesSlice,
    upcomingMovies: upcomingMoviesSlice,
    latestMovies: latestMoviesSlice,
  },
});
