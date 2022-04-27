import MovieInterface from '../model';
import Movie from './Movie';

interface AllMovies {
  allMovies: MovieInterface[];
}

const ListOfMovies: React.FC<AllMovies> = ({ allMovies }: AllMovies) => {
  return (
    <section className='movies-results_container'>
      {allMovies
        ? allMovies.map((movie) => {
            return (
              <Movie
                original_title={movie.original_title}
                id={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                overview={movie.overview}
              />
            );
          })
        : ''}
    </section>
  );
};

export default ListOfMovies;
