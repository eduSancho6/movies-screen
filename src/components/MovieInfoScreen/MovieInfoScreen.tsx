import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../api_key';
import './movieInfo.css';
import { IoArrowBackOutline } from 'react-icons/io5';

const URL: string = 'https://api.themoviedb.org/3';

interface MovieInterface {
  original_title: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  release_date?: string;
}

const MovieInfoScreen: React.FC = () => {
  const [movie, setMovie] = useState<MovieInterface>({
    original_title: 'Waiting for the movie',
    poster_path: '',
    overview: 'Please, Wait until the movie is completely upload',
    vote_average: 10,
    release_date: '2022-02-22',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

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
      console.log('A ver que pasa', res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findMovieInfo(Number(id));
  }, []);

  return (
    <section className='movie-info-screen_container'>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <React.Fragment>
          <Link to='/' className='nav_item nav_comeback'>
            {' '}
            <IoArrowBackOutline />
            Atrás{' '}
          </Link>
          <div className='img_container'>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
          </div>
          <div className='description_container'>
            <h1 className='movie_original-title'>{movie.original_title} </h1>
            <h2 className='description_title'> Descripción</h2>
            <p className='description'> {movie.overview} </p>
            <span className='puntuation'>
              Puntuación: {movie.vote_average}{' '}
            </span>
            <p className='release_day'>
              Fecha de estreno: {movie.release_date}{' '}
            </p>
          </div>
          {/* Meter géneros */}
        </React.Fragment>
      )}
    </section>
  );
};

export default MovieInfoScreen;
