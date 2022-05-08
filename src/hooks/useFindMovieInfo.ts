import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, URL } from '../api/api_key';

const useFindMovieInfo = (id: number) => {
  const [movie, setMovie] = useState({
    original_title: 'Waiting for the movie',
    poster_path: '',
    overview: 'Please, Wait until the movie is completely upload',
    vote_average: 10,
    release_date: '2022-02-22',
  });
  const [loading, setLoading] = useState(true);

  const findMovieInfo = async (id: number) => {
    try {
      const res = await axios.get(`${URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
        headers: {
          'content-type': 'application/json',
        },
      });
      setMovie(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findMovieInfo(Number(id));
  }, []);

  return { movie, loading };
};

export default useFindMovieInfo;
