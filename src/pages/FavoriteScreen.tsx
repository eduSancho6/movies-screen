import React, { useState } from 'react';
import MovieInterface from '../model';
import { useSelector } from 'react-redux';
import { selectFavoritesMovies } from '../features/favoriteMovies/favoriteMoviesSlice';
import Movie from '../components/Movie/Movie';
import '../index.css';

const FavoriteScreen = () => {
  const favorites = useSelector(selectFavoritesMovies);

  return (
    <section className='favorite-movies_container'>
      <h2 className='favorite-movies_title'>
        Estas son tus películas favoritas
      </h2>

      <div className='movies-results_container'>
        {favorites.map((fav: MovieInterface, key: number) => {
          return (
            <Movie
              key={key}
              id={fav.id}
              original_title={fav.original_title}
              backdrop_path={fav.backdrop_path}
              poster_path={fav.poster_path}
              overview={fav.overview}
              isFavorite={fav.isFavorite}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FavoriteScreen;
