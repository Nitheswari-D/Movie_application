import React, { useState } from 'react'
import { Badge, IconButton } from '@mui/material';
export default function Counter() {
    const [like,setlike]=useState(0);
    const [dislike,setdislike]=useState(0);
    const incrementlike=()=>setlike(like+1);
    const incrementdislike=()=>setdislike(dislike+1);
  return (
    <div>
        <IconButton aria-label="like" color="tertiary" onClick={incrementlike}>
            <Badge badgeContent={like} color="success">
                👍
            </Badge>
        </IconButton>
        <IconButton aria-label="like" color="tertiary" onClick={incrementdislike}>
            <Badge badgeContent={dislike} color="error">
                👎
            </Badge>
        </IconButton>
        
    </div>
  )
}
