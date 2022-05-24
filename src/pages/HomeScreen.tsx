import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY } from '../api/api_key';
import urlApi from '../api/urlApi';
import Carousel from '../components/Carousel/Carousel';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import {
  fetchAsyncPopularMovies,
  selectAllPopularMovies,
} from '../features/allMovies/popularMoviesSlice.ts';
import {
  fetchAsyncNowPlayingMovies,
  selectNowPlayingMovies,
} from '../features/latestMovies/latestMoviesSlice';
import {
  fetchAsyncTopRatedMovies,
  selectAllTopRatedMovies,
} from '../features/topRated/topRatedMoviesSlice';
import MovieInterface from '../model';

interface IListOIfMovies {
  listOfMovies : MovieInterface[]
}

const HomeScreen = () => {
  const [indexPopular, setIndexPopular] = useState(0);
  const [indexRated, setIndexRated] = useState(0);
  const [indexPlaying, setIndexPlaying] = useState(0);

  const [upcomingMovies, setUpcomingMovies] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncPopularMovies());
    dispatch(fetchAsyncTopRatedMovies());
    dispatch(fetchAsyncNowPlayingMovies());
  }, [dispatch]);

  const popularMovies = useSelector(selectAllPopularMovies);
  const topRatedMovies = useSelector(selectAllTopRatedMovies);
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);

  console.log('Popular movies', popularMovies)

  const linkPopulars = '/popular'; 
  const linkRated = '/rated';



  const getUpcomingMovies = async() => {
    try {
      const {data} = await urlApi.get(`/movie/upcoming?api_key=${API_KEY}&page=1`)
      console.log('Upcoming Movies',data.results)
      setUpcomingMovies(data.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=> {
    getUpcomingMovies()
  },[])



  const Hero = ({listOfMovies}:IListOIfMovies) => {
    const [counter, setCounter] = useState(0)

    return (
      <section className="hero-movies_container">
        <div className="title-hero_container">
          <h2 className="title-hero">Próximamente en los <span className="underline-red">mejores</span>  cines...</h2>
        </div>

        <article className="upcoming-movie_container" >
          <div className="buttons-hero_container">
              <button disabled={counter === 0} onClick={() => {
                setCounter(counter - 1)
              }} className="btn-arrow arrow-left"> <AiOutlineArrowLeft className="icon-arrow"/> </button>
              <button onClick={() => {
                setCounter(counter + 1)
              }} className="btn-arrow arrow-right"> <AiOutlineArrowRight className="icon-arrow" /> </button>

          </div>
      {
        listOfMovies[2].backdrop_path &&  <img alt="movie" src={`https://image.tmdb.org/t/p/w1280${listOfMovies[counter].backdrop_path}`} ></img>
      }

        </article>
        
      </section>
    )
  }



  return (
    <React.Fragment>

{
  upcomingMovies && <Hero listOfMovies={upcomingMovies}/>
}

      <SearchEngine />

      <Carousel
        allMovies={nowPlayingMovies}
        indexMov={indexPlaying}
        setIndexMov={setIndexPlaying}
      >
        En tu cine más cercano
      </Carousel>
      <Carousel
        allMovies={topRatedMovies}
        indexMov={indexRated}
        setIndexMov={setIndexRated}
        link={linkRated}
      >
        Las películas mejor valoradas
      </Carousel>
      <Carousel
        allMovies={popularMovies}
        indexMov={indexPopular}
        setIndexMov={setIndexPopular}
        link={linkPopulars}
      >
        Las películas más populares
      </Carousel>
    </React.Fragment>
  );
};

export default HomeScreen;
