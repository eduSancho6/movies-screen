import React, { useState } from 'react';
import ListOfMovies from '../components/ListOfMovies';
import MovieInterface from '../model';
import { useSelector } from 'react-redux';
import { selectFavoritesMovies } from '../features/favoriteMovies/favoriteMoviesSlice';
import Movie from '../components/Movie';

const FavoriteScreen = () => {
  const favorites = useSelector(selectFavoritesMovies);

  return (
    <section className='favorite-movies_container'>
      <h2 className='favorite-movies_title'>
        Estas son tus películas favortias
      </h2>

      {favorites.map((fav: MovieInterface, key: number) => {
        return (
          <Movie
            key={key}
            id={fav.id}
            original_title={fav.original_title}
            backdrop_path={fav.backdrop_path}
            poster_path={fav.poster_path}
            overview={fav.overview}
          />
        );
      })}
    </section>
  );
};

export default FavoriteScreen;
