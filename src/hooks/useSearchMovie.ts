import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, URL } from '../api/api_key';
import MovieInterface from '../model';

const useSearchMovie = (query: string | undefined) => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

  const searchMovie = async () => {
    const controller = new AbortController();

    try {
      const { data } = await axios.get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setAllMovies(data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
    controller.abort();
  };
  useEffect(() => {
    searchMovie();
  }, []);

  return [allMovies];
};

export default useSearchMovie;
