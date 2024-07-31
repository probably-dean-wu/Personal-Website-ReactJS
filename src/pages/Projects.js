import React from 'react'
import ProjectItem from './ProjectItem'
import "../styles/Project.css"
import { ProjectList } from "../helpers/ProjectList"

function Projects() {
  return (
    <div className='projects'> 
      <h1> Personal Projects</h1> 
      <div className='projectList'> 
      {ProjectList.map((project) => {
        return <ProjectItem id = {project.id} name={project.name} image={project.image} date={project.date}/>
      })}
      </div>
    </div>
  )
}
export default Projects