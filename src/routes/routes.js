import SearchScreen from '../pages/SearchScreen';
import MovieInfoScreen from '../components/MovieInfoScreen/MovieInfoScreen';
import FavoriteScreen from '../pages/FavoriteScreen';
import PopularMoviesScreen from '../pages/PopularMoviesScreen';
import CarouselScreen from '../components/CarouselScreen/CarouselScreen';
import HomeScreen from '../pages/HomeScreen';
import SimilarMoviesScreen from '../pages/SimilarMoviesScreen/SimilarMoviesScreen';

const routes = [
  { name: 'home', path: '/', component: <HomeScreen /> },
  { name: 'popular', path: '/popular', component: <PopularMoviesScreen /> },
  { name: 'carousel', path: '/rated', component: <CarouselScreen /> },
  {
    name: 'similar',
    path: '/movies/similar-to/:idMovie',
    component: <SimilarMoviesScreen />,
  },
  {
    name: 'searchResults',
    path: '/search/:query',
    component: <SearchScreen />,
  },
  { name: 'movie', path: '/movie/:id', component: <MovieInfoScreen /> },
  { name: 'favorites', path: '/favs', component: <FavoriteScreen /> },
];

export default routes;
