import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movieInfo.css';
import { IoArrowBackOutline } from 'react-icons/io5';
import useFindMovieInfo from '../../hooks/useFindMovieInfo';

const MovieInfoScreen: React.FC = () => {
  const { id } = useParams();
  const { movie, loading } = useFindMovieInfo(Number(id));

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
