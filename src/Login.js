import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';
export default function Login() {
    const LoginSchema=yup.object({
        email:yup.string().email().required().min(10),
        password:yup.string().required().min(10),
    });
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:LoginSchema,
        onSubmit:(values)=>{
            console.log(values);
        },
    });
  return (
    <form className="loginform" onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
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
        <Button variant="outlined" type="submit">Login</Button>
        <h4>Don't have an account? Click here <Link to="/">Register</Link></h4>
    </form>
  )
}
