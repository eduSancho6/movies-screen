import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';

const initialState: any = {
  movies: [],
};

export const fetchAsyncPopularMovies: any = createAsyncThunk(
  'allMovies/fetchAsyncMovies',
  async () => {
    const response = await urlApi.get(`/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  }
);

const allMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncPopularMovies.pending]: () => {
      console.log('Esperando');
    },

    [fetchAsyncPopularMovies.fulfilled]: (state, action) => {
      console.log('Request Popular Fulfilled');
      console.log('state popular', state);
      return { ...state, movies: action.payload };
    },
    [fetchAsyncPopularMovies.rejected]: () => {
      console.log('Rejected!');
    },
  },
});

export default allMoviesSlice.reducer;

export const { addMovies } = allMoviesSlice.actions;
export const selectAllPopularMovies = (state: any) =>
  state.popularMovies.movies;
