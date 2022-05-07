import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, URL } from '../api_key';
import MovieInterface from '../model';

const useGetTopRatedMovies: () => MovieInterface[][] = () => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
      );
      setAllMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return [allMovies];
};

export default useGetTopRatedMovies;
