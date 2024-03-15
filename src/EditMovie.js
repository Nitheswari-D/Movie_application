import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
export default function EditMovie() {
    const { id }=useParams();
    console.log(id);
    const [movie,setMovie]=useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        fetch(`https://65f16b79034bdbecc762703b.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv))
        .then(()=> setShow(true))
    },[id])
  return (
    <div>
      {show ? <EditForm movie={movie} /> :"Loading............." }
    </div>
  )
}

function EditForm({movie}){
    const movieValidationSchema=yup.object({
        name:yup.string().required(),
        poster:yup.string().required().min(10).url(),
        trailer:yup.string().required().min(10).url(),
        rating:yup.number().required().min(1).max(10),
        summary:yup.string().required().min(20),
    });
    const formik=useFormik({
        initialValues:{
            name:movie.name,
            poster:movie.poster,
            trailer:movie.trailer,
            rating:movie.rating,
            summary:movie.summary
        },
        validationSchema:movieValidationSchema,
        onSubmit:(va)=>{
            editMovie(va);
        },
    });
    const navigate=useNavigate();
    const editMovie=(va)=>{
        fetch(`https://65f16b79034bdbecc762703b.mockapi.io/movie/${movie.id}`,{
            method:"PUT",
            body:JSON.stringify(va),
            headers:{"Content-Type":"application/json"},
        })
        .then(()=> navigate("/portal/movie"))
    }
    return(
        <form className="formstyle" onSubmit={formik.handleSubmit}>
            <h1>Edit Movie</h1>
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                value={formik.values.name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name?formik.errors.name:null}
                name="name"
            />
            <TextField 
                id="outlined-basic" 
                label="Poster" 
                variant="outlined" 
                value={formik.values.poster} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.poster && formik.errors.poster}
                helperText={formik.touched.poster && formik.errors.poster ?formik.errors.poster:null}
                name="poster"
            />
            <TextField 
                id="outlined-basic" 
                label="Trailer" 
                variant="outlined" 
                value={formik.values.trailer} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.trailer && formik.errors.trailer}
                helperText={formik.touched.trailer && formik.errors.trailer?formik.errors.trialer:null}
                name="trailer"
            />
            <TextField 
                id="outlined-basic" 
                label="Rating" 
                variant="outlined" 
                value={formik.values.rating} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.rating&& formik.errors.rating}
                helperText={formik.touched.rating && formik.errors.rating?formik.errors.rating:null} 
                name="rating"
            />
            <TextField 
                id="outlined-basic" 
                label="Summary" 
                variant="outlined" 
                value={formik.values.summary} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.summary && formik.errors.summary}
                helperText={formik.touched.summary && formik.errors.summary?formik.errors.summary:null}
                name="summary"
            />
            <Button variant="outlined" type="submit">Edit Movie</Button>
        </form>
    )
}
