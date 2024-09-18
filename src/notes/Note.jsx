import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid';
import "../styles/Note.css"
import Link from '@mui/material/Link';

function Note() {
  useEffect(() => {
    document.title = "Notes"
    })
  return (

    <div>
        <h1> Notes </h1>
    <Grid container justifyContent={"center"} direction={"column"} alignItems="center" marginLeft={1.5} marginRight={1.5}>
        <Grid item xs={10} sm={10} md={8} lg={7} xl={3} margin={1}>
            <li className='lists'>
              <Link href="/intro-to-proof" color={"#87CEEB"} underline='hover' > Introduction to Mathmatical Proof </Link>
            </li>
        </Grid>
    </Grid>    
    
    </div>
  )
}

export default Note