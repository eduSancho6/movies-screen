import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';

export const fetchAsyncTopRatedMovies: any = createAsyncThunk(
  'topRatedMovies/fetchAsyncTopRatedMovies',
  async (page: number) => {
    const response = await urlApi.get(
      `/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    return response.data.results;
  }
);

const initialState: any = {
  movies: [],
};

const allTopRatedMoviesSlice = createSlice({
  name: 'topRatedMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncTopRatedMovies.pending]: () => {
      console.log('Esperando respuesta para las mejore valoradas');
    },
    [fetchAsyncTopRatedMovies.fulfilled]: (state, { payload }) => {
      console.log('Top Rated Movies Conseguido');
      return { ...state, movies: payload };
    },
    [fetchAsyncTopRatedMovies.rejected]: () => {
      console.error('Rejected en Top Rated!');
    },
  },
});

export default allTopRatedMoviesSlice.reducer;

export const selectAllTopRatedMovies = (state: any) =>
  state.topRatedMovies.movies;
