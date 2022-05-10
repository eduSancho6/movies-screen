import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';

export const fetchAsyncLatestMovies = createAsyncThunk(
  'latestMovies/fetchAsyncLatestMovies',
  async () => {
    const response = await urlApi.get(
      `/movie/latest?api_key=${API_KEY}&language=es-ES`
    );

    return response.data.results;
  }
);
