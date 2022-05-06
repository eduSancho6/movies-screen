import React, { useEffect, useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { API_KEY, URL } from '../api_key';
import Movie from '../components/Movie/Movie';
import { useParams } from 'react-router';

export type AllMovies = {
  allMovies: MovieInterface[];
  setAllMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
};

const SearchScreen = () => {
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);
  const { query } = useParams();

  const searchMovie = async () => {
    // e.preventDefault();
    const controller = new AbortController();

    try {
      const { data } = await axios.get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setAllMovies(data.results);
      console.log('Info', data.results);
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

  return (
    <React.Fragment>
      <SearchEngine searchMovie={searchMovie} />
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
