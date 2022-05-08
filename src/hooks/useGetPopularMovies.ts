import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, URL } from '../api_key';
import MovieInterface from '../model';

const useGetPopularMovies = (page: number) => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
      );
      setAllMovies(data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, [page]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return [allMovies];
};

export default useGetPopularMovies;
