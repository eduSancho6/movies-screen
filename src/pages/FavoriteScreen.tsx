import React from 'react';
import { useSelector } from 'react-redux';
import ListOfMovies from '../components/ListOfMovies';
import Movie from '../components/Movie';
import { selectFavoritesMovies } from '../features/favoriteMovies/favoriteMoviesSlice';
import MovieInterface from '../model';

const FavoriteScreen = () => {
  const favorites = useSelector(selectFavoritesMovies);
  return (
    <section>
      {favorites.map((fav: MovieInterface) => {
        return <ListOfMovies allMovies={favorites} />;
      })}
    </section>
  );
};

export default FavoriteScreen;
