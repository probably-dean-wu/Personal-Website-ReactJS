import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import "../styles/sets.css"
function Logic() {
  return (
    <Grid container justifyContent={"center"} direction={"column"} alignItems="center">
      <Grid item xs={10} sm={10} md ={8} lg={7} xl={5}>
        <h1> Logic </h1>
        <p className='texttitle'> Quantifiers: </p>
      </Grid>
    </Grid>
  )
}

export default Logic