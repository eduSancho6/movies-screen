import HomeScreen from '../pages/HomeScreen';
import MovieInfoScreen from '../pages/MovieInfoScreen';
import FavoriteScreen from '../pages/FavoriteScreen';
import React from 'react';

const routes = [
  { name: 'home', path: '/', component: <HomeScreen /> },
  { name: 'movie', path: '/movie/:id', component: <MovieInfoScreen /> },
  { name: 'favorites', path: '/favs', component: <FavoriteScreen /> },
];

export default routes;
