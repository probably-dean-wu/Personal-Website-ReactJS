import React, { useEffect } from 'react'
import "../styles/projects.css";
import ElevatorVid from '../Images/elevatorvid.mp4'
import Grid from '@mui/system/Unstable_Grid';
function Elevator() {
  useEffect(() => {
    document.title = "Elevator"
  })
  return (
    <div>
      <h1>
        Elevator with Arudino
      </h1>
      <Grid container justifyContent={"center"} direction={"column"} alignItems="center" marginLeft={1.5} marginRight={1.5}>
        <Grid item xs={10} sm={10} md={10} lg={8} xl={6}>
        <p style={{fontSize: '1.5rem', paddingBottom: '1rem'}}> Since this is a school project, I do not have the code store on my PC or on Github. Made with Arudino Language (similar to C++) </p>
        <video width="100%" height="70%" controls>
        <source src={ElevatorVid} type="video/mp4" />
        </video>
        </Grid>
      </Grid>

      </div>
  )
}

export default Elevator