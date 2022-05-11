import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movieInfo.css';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa';
import useFindMovieInfo from '../../hooks/useFindMovieInfo';
import axios from 'axios';
import { API_KEY, URL } from '../../api/api_key';
import MovieInterface from '../../model';
import { url } from 'inspector';
import urlApi from '../../api/urlApi';

interface VideoInterface {
  id: number;
  key: string;
  name: string;
}

type SwitchTrailer = {
  switchTrailer: boolean;
  setSwitchTrailer: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieInfoScreen = () => {
  const [video, setVideo] = useState<string>('9djAMds545g');
  const [switchTrailer, setSwitchTrailer] = useState(false);
  const { id } = useParams();

  const idMovie = Number(id);

  const { movie, loading } = useFindMovieInfo(Number(id));

  const findMovieVideo = async (id: number) => {
    try {
      const res = await axios.get(`${URL}/movie/${idMovie}/videos`, {
        params: {
          api_key: API_KEY,
        },
        headers: {
          'content-type': 'application/json',
        },
      });
      setVideo(res.data.results[0].key);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('VIDEO', video);
  useEffect(() => {
    findMovieVideo(Number(id));
  }, []);

  const Trailer = () => {
    return (
      <div className='trailer-iframe_container'>
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title='Hello'
          className='trailer_iframe'
        ></iframe>
      </div>
    );
  };

  const getSimilarMovies = async () => {
    try {
      const response = await urlApi.get(``);
    } catch (error) {
      console.log('ERROR SIMILAR', error);
    }
  };

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
            <div className='trailer_container'>
              <button
                onClick={() => {
                  setSwitchTrailer(!switchTrailer);
                }}
                className='btn-trailer'
              >
                Ver trailer
                <FaYoutube className='youtube_icon_trailer' />
              </button>

              {switchTrailer ? <Trailer /> : ''}
            </div>
          </div>

          {/* Meter géneros */}
        </React.Fragment>
      )}
    </section>
  );
};

export default MovieInfoScreen;
