import React from 'react'

import Project from './Project'

import { projectsArray } from '../assets/projects'

const Portfolio = () => {
   return (
      <section id='portfolio' className='grid'>
         <div className='portfolio-title'>
            <h2>Portfolio</h2>
         </div>
         {projectsArray.map((projectItem) => (
            <Project project={projectItem} key={projectItem.name} />
         ))}
      </section>
   )
}

export default Portfolio
