import React, { useState } from 'react'
import Counter from './Counter'
import { Card, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Movie({movieTake,getMovies}) {
  const[show,setshow]=useState(false);
  const navigate=useNavigate();
  const deleteMovie =(movieid)=>{
    console.log(movieid);
    fetch(`https://65f16b79034bdbecc762703b.mockapi.io/movie/${movieid}`,{
      method:"DELETE",
    })
    .then(()=>getMovies())
    .then(()=> alert("this card gets deleted"))
  }
  return (
    <Card className="movie-container">
      <center><img className="movie-poster" src={movieTake.poster} alt=""/></center>
      <CardContent>
      <div className="movie-spec">
        <h2 className="movie-title">{movieTake.name}
        <IconButton color="primary" aria-label="Toggle-Description" onClick={()=>setshow(!show)}>
            {show? <ExpandLessIcon fontSize='medium' />:<ExpandMoreIcon fontSize='medium' />}
        </IconButton>
        <IconButton color="tertiary" aria-label="Movie-Info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)}>
           <InfoIcon/>
        </IconButton>
        </h2>
        <h3 className="movie-rating">⭐{movieTake.rating}</h3>
      </div>
      </CardContent>
      {show ? <p className="movie-summary">{movieTake.summary}</p>:null}
      <CardActions>
        <Counter />
        <IconButton
          sx={{marginLeft:"auto"}}
          aria-label="editMovie"
          onClick={()=> navigate(`/portal/edit/${movieTake.id}`)}
        >
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton
          sx={{marginLeft:"auto"}}
          aria-label="editMovie"
          onClick={()=> deleteMovie(movieTake.id)}
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  )
}
