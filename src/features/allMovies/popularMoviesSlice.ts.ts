import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';

const initialState: any = {
  movies: {},
};

export const fetchAsyncMovies: any = createAsyncThunk(
  'allMovies/fetchAsyncMovies',
  async () => {
    console.log('Hola');
    const response = await urlApi.get(`3/movie/popular?api_key=${API_KEY}`);
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
    [fetchAsyncMovies.pending]: () => {
      console.log('Esperando');
    },

    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('Al final se pudo patrón');
      console.log(action);
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected!');
    },
  },
});

export default allMoviesSlice.reducer;

export const { addMovies } = allMoviesSlice.actions;
export const selectAllMovies = (state: any) => state.popularMovies.movies;
