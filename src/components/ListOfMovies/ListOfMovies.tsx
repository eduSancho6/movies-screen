import React from 'react';
import MovieInterface from '../../model';
import Movie from '../Movie/Movie';

type IListOfMovies = {
  movies: MovieInterface[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  nameOfList: string;
};

const ListOfMovies = ({ movies, page, setPage, nameOfList }: IListOfMovies) => {
  return (
    <React.Fragment>
      <h3 id='homescreen_title'> {nameOfList} </h3>

      <section className='movies-results_container  '>
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
          </button>
        </div>

        {movies &&
          movies.map((movie: MovieInterface) => {
            return (
              <Movie
                id={movie.id}
                original_title={movie.original_title}
                backdrop_path={movie.backdrop_path}
                poster_path={movie.poster_path}
                overview={movie.overview}
                isFavorite={movie.isFavorite}
                vote_average={movie.vote_average}
              />
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default ListOfMovies;
