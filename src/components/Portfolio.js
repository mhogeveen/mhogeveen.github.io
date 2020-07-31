import React from 'react'

import ExternalLinkIcon from './icons/ExternalLinkIcon'
import CodeIcon from './icons/CodeIcon'
import ReduxIcon from './icons/ReduxIcon'
import ReactIcon from './icons/ReactIcon'

import dnd_dice_roller from '../assets/dnd_dice_roller.png'

const Portfolio = () => {
   return (
      <section id='portfolio' className='grid'>
         <div className='portfolio-title'>
            <h2>Portfolio</h2>
         </div>
         <div className='project'>
            <div className='project-title'>
               <h3>DnD Dice Roller</h3>
            </div>
            <div className='project-buttons'>
               <a
                  href='https://mhogeveen.github.io/dnd_dice_roller/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='button-website'
                  role='button'
               >
                  <ExternalLinkIcon />
               </a>
               <a
                  href='https://github.com/mhogeveen/dnd_dice_roller'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='button-code'
                  role='button'
               >
                  <CodeIcon />
               </a>
            </div>
            <div className='project-image'>
               <img src={dnd_dice_roller} alt='DnD Dice Roller' />
            </div>
            <div className='project-technologies'>
               <div className='tech-icon'>
                  <ReactIcon />
               </div>
               <div className='tech-icon'>
                  <ReduxIcon />
               </div>
               <div className='tech-icon'>
                  <ReduxIcon />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Portfolio
