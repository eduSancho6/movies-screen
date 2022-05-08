import React from 'react';
import MovieInterface from '../model';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import Movie from '../components/Movie/Movie';
import { useParams } from 'react-router';
import useSearchMovie from '../hooks/useSearchMovie';

export type AllMovies = {
  allMovies: MovieInterface[];
  setAllMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
};

const SearchScreen = () => {
  const { query } = useParams();

  const [allMovies] = useSearchMovie(query);

  return (
    <React.Fragment>
      <SearchEngine />
      <div className='movies-results_container'>
        {allMovies.map((mov: MovieInterface, key: number) => {
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
      )
    </React.Fragment>
  );
};

export default SearchScreen;
