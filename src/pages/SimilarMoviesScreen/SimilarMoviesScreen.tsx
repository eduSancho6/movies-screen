import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useParams } from 'react-router';
import { API_KEY } from '../../api/api_key';
import urlApi from '../../api/urlApi';
import Movie from '../../components/Movie/Movie';
import MovieInterface from '../../model';

const SimilarMoviesScreen = () => {
  const { idMovie } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('Hey');

  const getSimilarMoviesById = async (id: string | undefined, page: number) => {
    try {
      const response = await urlApi.get(
        `/movie/${id}/similar?api_key=${API_KEY}&language=es-ES&page=${page}`
      );

      setSimilarMovies(response.data.results);
    } catch (error) {
      console.error('Error ', error);
    }
  };

  const getMoviename = async (id: string | undefined) => {
    try {
      const response = await urlApi.get(
        `/movie/${idMovie}?api_key=${API_KEY}&language=es-ES`
      );
      let movieName = response.data.title
        ? response.data.title
        : response.data.original_title;
      setName(movieName);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMoviename(idMovie);
  }, []);

  useEffect(() => {
    getSimilarMoviesById(idMovie, page);
  }, [page]);

  return (
    <React.Fragment>
      <section className='similar-movies-screen_container'>
        <h3 id='homescreen_title' style={{ fontSize: '1.5rem' }}>
          Similares a <span className='green'> {name} </span>{' '}
        </h3>
        <div className='movies-results_container'>
          <div className='buttons_container'>
            <button
              className={page === 1 ? 'disabled btn' : 'btn btn-backward'}
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              {' '}
              Atrás
            </button>
            <button
              className={'btn btn-forward'}
              onClick={() => setPage(page + 1)}
            >
              {' '}
              Siguiente
              <FaLongArrowAltRight className='btn-icon' />
            </button>
          </div>
          {similarMovies.map((mov: MovieInterface, key: number) => {
            return (
              <Movie
                key={key}
                id={mov.id}
                original_title={mov.original_title}
                backdrop_path={mov.backdrop_path}
                poster_path={mov.poster_path}
                overview={mov.overview}
                isFavorite={mov.isFavorite}
                vote_average={mov.vote_average}
              />
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SimilarMoviesScreen;
