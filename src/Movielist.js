import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function Movielist() {
   const [movie,setmovie]=useState([]);
   const getMovies=()=>{
    fetch("https://65f16b79034bdbecc762703b.mockapi.io/movie",{
        method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setmovie(mvs));
   }
//    console.log(movie);
   useEffect(()=>{
    getMovies()
   },[]); //happens only at auto refresh
  return (
    <div className='movie-list'>
      {
        movie.map((list,index)=>(
            <div key={index}>
                <Movie getMovies={getMovies} movieTake={list}/>
            </div>
        ))
      }      
    </div>
  )
}
