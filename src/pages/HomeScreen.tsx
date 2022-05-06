import React, { useEffect, useState } from 'react';
import MovieInterface from '../model';
import axios from 'axios';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { API_KEY, URL } from '../api_key';
import Movie from '../components/Movie/Movie';
import PopularMovies from '../components/PopularMovies/PopularMovies';

export type AllMovies = {
  allMovies: MovieInterface[];
  setAllMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
};

const HomeScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const searchMovie = async (e: React.FormEvent) => {
    e.preventDefault();

    const controller = new AbortController();

    try {
      const { data } = await axios.get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${search}`
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

  return (
    <React.Fragment>
      <SearchEngine
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
        setIsSearched={setIsSearched}
      />

      {isSearched ? (
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
      ) : (
        <PopularMovies allMovies={allMovies} setAllMovies={setAllMovies} />
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
