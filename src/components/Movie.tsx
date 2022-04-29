import { useNavigate } from 'react-router';
import MovieInterface from '../model';

const Movie: React.FC<MovieInterface> = ({
  original_title,
  poster_path,
  backdrop_path,
  id,
}: MovieInterface) => {
  let navigate = useNavigate();

  return (
    <article
      className='movie_card'
      key={id}
      onClick={(e) => navigate(`/movie/${id}`)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `https://image.tmdb.org/t/p/w300${backdrop_path}`
        }
        alt={`${original_title}`}
      ></img>
      <h2> {original_title} </h2>
    </article>
  );
};

export default Movie;
