import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';

export const fetchAsyncUpcomingMovies: any = createAsyncThunk(
  'upcomingMovies/fetchAsyncUpcomingMovies',
  async () => {
    const response = await urlApi.get(
      `3/movie/upcoming?api_key=${API_KEY}&language=es-ES`
    );
    return response.data.results;
  }
);

const initialState: any = {
  movies: [],
};

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncUpcomingMovies.pending]: () => {
      console.log('Esperando a las llegadas...');
    },
    [fetchAsyncUpcomingMovies.fulfilled]: (state, { payload }) => {
      console.log('Estrenos aceptados... (fulfilled)');
      return { ...state, movies: payload };
    },
    [fetchAsyncUpcomingMovies.rejected]: () => {
      console.error('Upcomings rejected');
    },
  },
});

export default upcomingMoviesSlice.reducer;

export const selectUpcomingMovies = (state: any) => state.upcomingMovies.movies;
