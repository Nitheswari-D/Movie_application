import AddMovie from './AddMovie.js'
import Register from './Register.js'
import Login from './Login.js'
import Portal from './Portal.js'
import Notfound from './Notfound.js'
import Home from './Home.js'
import {Routes,Route} from "react-router-dom"
import './App.css';
import Movielist from './Movielist.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react'
import Countertask from './Countertask.js'
import MovieDetail from './MovieDetail.js'
import EditMovie from './EditMovie.js'
function App() {
  const[mode,setmode]=useState("light");
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
      <Routes>
        <Route path="countertask" element={<Countertask />} />
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal mode={mode} setmode={setmode}/>}>
          {/* content changes dynamically so no / */}
          <Route path="addmovie" element={<AddMovie />} /> 
          <Route path="home" element={<Home />}/>
          <Route path="movie" element={<Movielist />}/>
          <Route path="edit/:id" element={<EditMovie />} />
          <Route path="view/:id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
