import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';
import MovieInterface from '../../model';

export const fetchAsyncNowPlayingMovies: any = createAsyncThunk(
  'latestMovies/fetchAsyncLatestMovies',
  async () => {
    const response = await urlApi.get(
      `3/movie/now_playing?api_key=${API_KEY}&language=es-ES`
    );

    return response.data.results;
  }
);

type InitialState = {
  movies: MovieInterface[];
};

const initialState: InitialState = {
  movies: [],
};

const latestMoviesSlice = createSlice({
  name: 'latestMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncNowPlayingMovies.pending]: () => {
      console.log('We are waiting for the latest movies');
    },
    [fetchAsyncNowPlayingMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncNowPlayingMovies.rejected]: () => {
      console.error('Latest mvoi9es rejected');
    },
  },
});

export default latestMoviesSlice.reducer;

export const selectNowPlayingMovies = (state: any) => state.latestMovies.movies;
