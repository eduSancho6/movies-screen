import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { GiCircle, GiPlainCircle } from 'react-icons/gi'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'
import MovieInterface from '../../model'
import './hero.css'

type IListOfMovies = {
    listOfMovies: MovieInterface[]
}

const Hero = ({listOfMovies}:IListOfMovies) => {
    const [counter, setCounter] = useState(0);
  
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
          <div className="name-hero_container">
            <h2 className="title-hero"> {listOfMovies[counter].original_title}</h2>
          </div>
  
          <article className="upcoming-movie_container" >
            <div className="buttons-hero_container">
                <button disabled={counter === 0} onClick={() => {
                  setCounter(counter - 1)
                }} className="btn-arrow arrow-left"> <BsArrowLeftCircleFill className="icon-arrow"/> </button>
                <button disabled={ counter === 19} onClick={() => {
                  setCounter(counter + 1)
                }} className="btn-arrow arrow-right"> <BsArrowRightCircleFill className={`icon-arrow `} /> </button>
  
            </div>
            <div className="litle-buttons-hero_container">
              <button className="mini-arrow mini-arrow-left" onClick={() => {
                if( counter === 0) {
                  setCounter(19)
                } else {
                  setCounter(counter - 1)
                }
                }}
                ><AiOutlineArrowLeft /></button>

                {
                  listOfMovies.map((movie, key) => {
                    return(
                      
                      <button key={key} className="little-button" onClick={() => setCounter(key)} type='submit'><GiCircle className={`little-icon ${counter ===  key ? "red" : ""}`} /> </button>
                    )
                  })
                }
              <button className="mini-arrow mini-arrow-right" onClick={() =>{
                                if( counter === 19 ) {
                                  setCounter(0)
                                } else {
                                  setCounter(counter +1)
                                }
              }}><AiOutlineArrowRight /></button>
 

            </div>
        {
          listOfMovies[2].backdrop_path &&  <img alt="movie" src={`https://image.tmdb.org/t/p/w1280${listOfMovies[counter].backdrop_path}`} ></img>
        }
  
          </article>
          
        </section>
      )
    }
  
  
  
export default Hero