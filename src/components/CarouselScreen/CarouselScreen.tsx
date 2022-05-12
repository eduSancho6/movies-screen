import React, { useState } from 'react';
import MovieInterface from '../../model';
import './carouselScreen.css';

import useGetTopRatedMovies from '../../hooks/useGetTopRatedMovies';
import Carousel from '../Carousel/Carousel';
export interface ICarousel {
  allMovies: MovieInterface[];
  children: string;
  indexMov: number;
  setIndexMov: React.Dispatch<React.SetStateAction<number>>;
  link?: string;
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
