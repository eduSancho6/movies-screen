import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import MovieInterface from '../../model'
import './hero.css'

type IListOfMovies = {
    listOfMovies: MovieInterface[]
}

const Hero = ({listOfMovies}:IListOfMovies) => {
    const [counter, setCounter] = useState(0)
  
  /*   setInterval(() => {
      if(counter !== 19) {
  
        setCounter(counter + 1)
      } else {
        setCounter(0)
      }
    },3500) */
  
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
                <button disabled={ counter === 19} onClick={() => {
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
  
  
  
export default Hero