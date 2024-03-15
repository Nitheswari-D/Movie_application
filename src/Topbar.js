import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
export default function Topbar({mode,setmode}) {
  const Navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" onClick={()=>Navigate("home")}>Home</Button>
          <Button color="inherit" onClick={()=>Navigate("/portal/movie")}>Movie</Button>
          <Button color="inherit" onClick={()=>Navigate("addmovie")}>addmovie</Button>
          <Button color="inherit" onClick={()=>Navigate("/login")}>Login</Button>
          <Button
            style={{marginLeft:"60%"}}
            startIcon={mode==="light" ?<Brightness4Icon />:<Brightness7Icon />}
            color="inherit"
            onClick={()=>setmode(mode==="light"?"dark":"light")}
          >
            {mode==="light"?"dark":"light"} Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}