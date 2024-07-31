import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import "../styles/projects.css";
import A from "../Images/A-key.png";
import jump from "../Images/jump-to-point.png";
import sprite from "../Images/set-sprite.png";
import global from "../Images/global-value.png";
import nokey from "../Images/no-key.png";
function springfieldvillage() {
  return (
    <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
            <h1 className='title'>
                Building SpringField Village
            </h1>
            
        </Grid>
    </Grid>
  )
}

export default springfieldvillage