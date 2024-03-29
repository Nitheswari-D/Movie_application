import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
export default function AddMovie() {
    const movieValidationSchema=yup.object({
        name:yup.string().required(),
        poster:yup.string().required().min(10).url(),
        trailer:yup.string().required().min(10).url(),
        rating:yup.number().required().min(1).max(10),
        summary:yup.string().required().min(20),
    });
    const formik=useFormik({
        initialValues:{
            name:"",
            poster:"",
            trailer:"",
            rating:"",
            summary:""
        },
        validationSchema:movieValidationSchema,
        onSubmit:(values)=>{
            console.log(values);
            addMovie(values)
        },
    });
    const navigate=useNavigate();
    const addMovie=(values)=>{
      fetch("https://65f16b79034bdbecc762703b.mockapi.io/movie",{
        method:"POST",
        body:JSON.stringify(values),
        headers:{"Content-Type":"application/json"},
      }).then (()=>navigate("/portal/movie"));
    }
  return (
    <form className="formstyle" onSubmit={formik.handleSubmit}>
      <h1>Add Movie</h1>
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
      <Button variant="outlined" type="submit">Add Movie</Button>
    </form>
  )
}
