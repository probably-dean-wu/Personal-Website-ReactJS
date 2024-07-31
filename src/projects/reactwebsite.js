import React from 'react'
import "../styles/projects.css";
import Grid from '@mui/system/Unstable_Grid';
function reactwebsite() {
  return (
    <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
            <h1 className='title'>
                Building a Website in React
            </h1>
        </Grid>
    </Grid>
  )
}

export default reactwebsite