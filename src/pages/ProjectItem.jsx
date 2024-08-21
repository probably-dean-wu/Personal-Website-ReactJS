import React from 'react'
function ProjectItem({ image, name, date, id }) {
  return (
    <div className="projectItem" >
      <a href={id} style={{ textDecoration: 'none' }} >
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <p> {date} </p>
        <h1>
            {name}
        </h1>
      </a>
    </div>
  )
}

export default ProjectItem