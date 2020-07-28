import React from 'react'

import Navbar from './Navbar'
import GridLines from './GridLines'
import Home from './Home'

const App = () => {
   return (
      <>
         <Navbar />
         <main>
            <Home />
         </main>
         <GridLines />
      </>
   )
}

export default App
