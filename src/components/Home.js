import React from 'react'

const Home = () => {
   return (
      <section id='home' className='grid'>
         <div className='home-intro'>
            <p>
               Hoi, mijn naam is <span className='home-intro-name'>Maarten Hogeveen</span>.
               <br />
               Front-end web developer / designer
            </p>
         </div>
         <div className='home-button'>
            <a href='#home' className='button' role='button'>
               Bekijk mijn werk
            </a>
         </div>
      </section>
   )
}

export default Home
