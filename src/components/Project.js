import React from 'react'

import ExternalLinkIcon from './icons/ExternalLinkIcon'
import CodeIcon from './icons/CodeIcon'
import TechIcon from './icons/TechIcon'

const Project = ({ project }) => {
   return (
      <div className='project'>
         <div className='project-title'>
            <h3>{project.name}</h3>
         </div>
         <div className='project-buttons'>
            <a
               href={project.website}
               target='_blank'
               rel='noopener noreferrer'
               className='button-website'
               role='button'
            >
               <ExternalLinkIcon />
            </a>
            <a
               href={project.code}
               target='_blank'
               rel='noopener noreferrer'
               className='button-code'
               role='button'
            >
               <CodeIcon />
            </a>
         </div>
         <div className='project-image'>
            <img src={project.image} alt='DnD Dice Roller' />
         </div>
         <div className='project-technologies'>
            <TechIcon icons={project.icons} />
         </div>
      </div>
   )
}

export default Project
