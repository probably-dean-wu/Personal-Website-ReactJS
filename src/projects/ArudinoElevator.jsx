import React, { useEffect } from 'react'
import "../styles/projects.css";
import ElevatorVid from '../Images/elevatorvid.mp4'
function Elevator() {
  useEffect(() => {
    document.title = "Elevator"
  })
  return (
    <div>
      <h1>
        Elevator with Arudino
      </h1>
      <p style={{fontSize: '30px'}}> Since this is a school project, I do not have the code store on my PC or on Github. Made with Arudino Language (similar to C++) </p>
      <video width="70%" height="70%" controls>
        <source src={ElevatorVid} type="video/mp4" />
      </video>
      </div>
  )
}

export default Elevator