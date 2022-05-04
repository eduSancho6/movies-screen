import React from 'react';
import ListOfMovies from '../components/ListOfMovies';
import MovieInterface from '../model';
import { useSelector } from 'react-redux';
import { selectFavoritesMovies } from '../features/favoriteMovies/favoriteMoviesSlice';

const FavoriteScreen = () => {
  const favorites = useSelector(selectFavoritesMovies);
  return (
    <section className='favorite-movies_container'>
      <h2 className='favorite-movies_title'>
        Estas son tus películas favortias
      </h2>

      {favorites.map((fav: MovieInterface, key: number) => {
        return <ListOfMovies allMovies={favorites} key={key} />;
      })}
    </section>
  );
};

export default FavoriteScreen;
