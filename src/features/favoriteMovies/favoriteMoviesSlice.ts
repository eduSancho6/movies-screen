import { createSlice } from '@reduxjs/toolkit';
import MovieInterface from '../../model';

type InitialState = {
  movies: MovieInterface[];
};
const initialState: InitialState = {
  movies: [],
};

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavoriteMovie: (state, { payload }) => {
      state.movies.push({ ...payload, isFavorite: true });
      const newState = state.movies.filter((mov) => mov.isFavorite);
      state.movies = newState;
    },
    removeFavoriteMovie: (state, { payload }) => {
      const newState = state.movies.filter((movie) => movie.id !== payload);
      state.movies = newState;
    },
    toggleFavoriteMovie: (state, { payload }) => {},
  },
});

export default favoriteMoviesSlice.reducer;
export const { addFavoriteMovie, removeFavoriteMovie, toggleFavoriteMovie } =
  favoriteMoviesSlice.actions;
export const selectFavoritesMovies = (state: any) =>
  state.favoriteMovies.movies;
