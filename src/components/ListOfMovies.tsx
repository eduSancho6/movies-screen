import MovieInterface from '../model';
import Movie from './Movie/Movie';

interface AllMovies {
  allMovies: MovieInterface[];
}

const ListOfMovies: React.FC<AllMovies> = ({ allMovies }: AllMovies) => {
  return (
    <section className='movies-results_container'>
      {allMovies
        ? allMovies.map((movie, key) => {
            return (
              <Movie
                key={key}
                original_title={movie.original_title}
                id={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                overview={movie.overview}
                vote_average={movie.vote_average}
              />
            );
          })
        : ''}
    </section>
  );
};

export default ListOfMovies;
