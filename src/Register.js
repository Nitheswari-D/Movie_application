import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';
export default function Register() {
    const registrationSchema=yup.object({
        username:yup.string().required(),
        email:yup.string().email().required().min(10),
        password:yup.string().required().min(10),
    });
    const formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:registrationSchema,
        onSubmit:(values)=>{
            console.log(values);
        },
    });
  return (
    <form className="registerform" onSubmit={formik.handleSubmit}>
        <h1>Registration</h1>
        <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined" 
            value={formik.values.username} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
            helperText={formik.touched.username && formik.errors.username?formik.errors.username:null}
            name="username"
        />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            value={formik.values.email} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email?formik.errors.email:null}
            name="email"
        />
        <TextField 
        id="outlined-basic" 
        label="password" 
        variant="outlined" 
        value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password?formik.errors.password:null}
        name="password"
        />
        <Button variant="outlined" type="submit">Register</Button>
        <h4>If You already have an account <Link to='/login'>Login</Link></h4>
    </form>
  )
}
