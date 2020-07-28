import React from 'react'

const Home = () => {
   return (
      <section id='home' className='grid'>
         <div className='home-tekst'>
            <p>
               Hoi, mijn naam is <span className='home-tekst-name'>Maarten Hogeveen</span>.
               <br />
               Ik ben een front-end web-developer.
            </p>
         </div>
         <div className='home-button'>
            <a href='#home' className='button button_home' role='button'>
               Bekijk mijn werk
            </a>
         </div>
      </section>
   )
}

export default Home
