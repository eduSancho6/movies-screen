import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ICarousel } from '../CarouselScreen/CarouselScreen';
import Movie from '../Movie/Movie';
import './carousel.css';

const Carousel = ({
  children,
  allMovies,
  indexMov,
  setIndexMov,
}: ICarousel) => {
  return (
    <section
      className='carousel-screen_container'
      style={{ marginTop: '7rem' }}
    >
      <h4
        style={{
          position: 'absolute',
          top: '-2rem',
          left: '2rem',
          color: 'var(--white)',
        }}
      >
        {children}
      </h4>
      <button
        className='btn-arrow btn-left handle'
        onClick={() => setIndexMov(indexMov + 1)}
        disabled={indexMov === 0}
      >
        <FaChevronLeft />
      </button>
      <div
        className='carousel_container'
        style={{ transform: `translateX(${indexMov * 10}%)` }}
      >
        {allMovies.map((mov, index) => {
          return (
            <Movie
              id={mov.id}
              original_title={mov.original_title}
              poster_path={mov.poster_path}
              vote_average={mov.vote_average}
              key={index}
            />
          );
        })}
      </div>

      <button
        className='btn-arrow btn-right handle'
        onClick={() => setIndexMov(indexMov - 1)}
        disabled={indexMov === -9}
      >
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
