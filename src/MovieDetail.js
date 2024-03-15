import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
export default function MovieDetail() {
    const {id}=useParams(); //use the same path keyword /view/:id *so pass id to params*
    console.log(id);
    const [movie,setMovie]=useState([]);
    const Navigate=useNavigate();
    useEffect(()=>{
        fetch(`https://65f16b79034bdbecc762703b.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv));
    },[id]);
    console.log(movie);
    const ratingStyles={
        color:movie.rating>=8?"green":"red",
    };
  return (
    <div>
      <iframe width="853" height="480" src={movie.trailer} title="Ice Cream | Funny Episodes | Mr Bean Cartoon World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
            <h2 className="movie-name">{movie.name}</h2>
            <h2 style={ratingStyles} className="movie-rating">
                ⭐{movie.rating}
            </h2>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=>{Navigate(-1)}}>Back</Button>
    </div>
  )
}
