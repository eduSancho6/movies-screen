import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { API_KEY, URL } from '../../api_key';
import Movie from '../Movie/Movie';
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
