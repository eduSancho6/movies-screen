import SearchScreen from '../pages/SearchScreen';
import MovieInfoScreen from '../components/MovieInfoScreen/MovieInfoScreen';
import FavoriteScreen from '../pages/FavoriteScreen';
import PopularMoviesScreen from '../pages/PopularMoviesScreen';
import CarouselScreen from '../components/CarouselScreen/CarouselScreen';

const routes = [
  { name: 'home', path: '/', component: <PopularMoviesScreen /> },
  { name: 'carousel', path: '/rated', component: <CarouselScreen /> },
  {
    name: 'searchResults',
    path: '/search/:query',
    component: <SearchScreen />,
  },

  { name: 'movie', path: '/movie/:id', component: <MovieInfoScreen /> },
  { name: 'favorites', path: '/favs', component: <FavoriteScreen /> },
];

export default routes;
