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
      state.movies.push(payload);
    },
    removeFavoriteMovie: (state, { payload }) => {
      state.movies = state.movies.filter((movie) => movie.id !== payload);
    },
  },
});

export default favoriteMoviesSlice.reducer;
export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;
export const selectFavoritesMovies = (state: any) =>
  state.favoriteMovies.movies;
