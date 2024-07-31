import React from 'react'
import "../styles/projects.css";
import Elevator from '../Images/elevatorvid.mp4'
import { Height } from '@mui/icons-material';
import { fontSize, width } from '@mui/system';
function elevator() {
  return (
    <div>
      <h1>
        Elevator with Arudino
      </h1>
      <p style={{fontSize: '30px'}}> Since this is a school project, I do not have the code store on my PC or on Github. Made with Arudino Language (similar to C++) </p>
      <video width="70%" height="70%" controls>
        <source src={Elevator} type="video/mp4" />
      </video>
      </div>
  )
}

export default elevator