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
         <a href='#home' className='button home-button' role='button'>
            Bekijk mijn werk
         </a>
      </section>
   )
}

export default Home
