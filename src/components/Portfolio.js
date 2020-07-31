import React from 'react'

import ExternalLink from './icons/ExternalLink'
import Code from './icons/Code'

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
                  <ExternalLink />
               </a>
               <a
                  href='https://github.com/mhogeveen/dnd_dice_roller'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='button-code'
                  role='button'
               >
                  <Code />
               </a>
            </div>
            <div className='project-image'>
               <img src={dnd_dice_roller} alt='DnD Dice Roller' />
            </div>
            <div className='project-technologies'>
               <div></div>
            </div>
         </div>
      </section>
   )
}

export default Portfolio
