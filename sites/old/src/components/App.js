import React from 'react'

import Navbar from './Navbar'
import GridLines from './GridLines'
import Home from './Home'
import Over from './Over'
import Portfolio from './Portfolio'

const App = () => {
   return (
      <>
         <Navbar />
         <main>
            <Home />
            <Over />
            <Portfolio />
         </main>
         <GridLines />
      </>
   )
}

export default App
