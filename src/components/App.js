import React, { useState } from 'react'

import Navbar from './Navbar'
import GridLines from './GridLines'
import Home from './Home'
import Over from './Over'

let currentPos = 0
window.onscroll = () => {
   currentPos = window.scrollY
}

const App = () => {
   const [sectionPos, setSectionPos] = useState({
      home: 0,
      over: 0,
      portfolio: 0,
      contact: 0,
   })

   const handleSetPos = (section, value) => {
      switch (section) {
         case 'over':
            setSectionPos({ ...sectionPos, [section]: value })
            break
         default:
            break
      }
   }

   const findCurrentSection = () => {}

   return (
      <>
         <Navbar sectionPos={sectionPos} />
         <main>
            <Home />
            <Over handleSetPos={handleSetPos} />
         </main>
         <GridLines />
      </>
   )
}

export default App
