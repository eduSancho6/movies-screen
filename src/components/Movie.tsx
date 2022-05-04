import { useNavigate } from 'react-router';
import MovieInterface from '../model';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFavoriteMovie,
  selectFavoritesMovies,
} from '../features/favoriteMovies/favoriteMoviesSlice';
import { addFavoriteMovie } from '../features/favoriteMovies/favoriteMoviesSlice';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

const Movie: React.FC<MovieInterface> = ({
  original_title,
  poster_path,
  backdrop_path,
  id,
  vote_average,
}: MovieInterface) => {
  const [isFavorite, setIsFavorite] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesMovies);

  console.log('Favoritas', favorites);

  let movieEstructure: MovieInterface = {
    id,
    original_title,
    poster_path,
    backdrop_path,
    vote_average,
  };

  return (
    <article className='movie_card' key={id}>
      <img
        onClick={(e) => navigate(`/movie/${id}`)}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `https://image.tmdb.org/t/p/w300${backdrop_path}`
        }
        alt={`${original_title}`}
      ></img>
      <section className='movie_card_footer'>
        <h2> {original_title} </h2>
        <div className='icons_container'>
          {isFavorite ? (
            <AiFillHeart
              onClick={() => {
                dispatch(removeFavoriteMovie(id));
                setIsFavorite(false);
              }}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                dispatch(addFavoriteMovie(movieEstructure));
                setIsFavorite(true);
              }}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </section>
      <div className='valoration_container'>
        <span>{vote_average ? vote_average : ''}</span>
      </div>
    </article>
  );
};

export default Movie;
