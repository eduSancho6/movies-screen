import React, { useState } from 'react';
import MovieInterface from '../../model';
import './carouselScreen.css';
import Carousel from './Carousel';
import useGetTopRatedMovies from '../../hooks/useGetTopRatedMovies';
export interface ICarousel {
  allMovies: MovieInterface[];
  children: string;
  indexMov: number;
  setIndexMov: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselScreen = () => {
  const [indexMov, setIndexMov] = useState(0);

  const [allMovies] = useGetTopRatedMovies();

  return (
    <React.Fragment>
      <Carousel
        allMovies={allMovies}
        indexMov={indexMov}
        setIndexMov={setIndexMov}
      >
        Las películas mejor valoradas
      </Carousel>
    </React.Fragment>
  );
};

export default CarouselScreen;
