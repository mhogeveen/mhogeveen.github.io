import React from 'react'

import Navbar from './Navbar'
import GridLines from './GridLines'
import Home from './Home'
import Over from './Over'

const App = () => {
   return (
      <>
         <Navbar />
         <main>
            <Home />
            <Over />
         </main>
         <GridLines />
      </>
   )
}

export default App
