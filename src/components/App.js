import React from 'react'

import Navbar from './Navbar'
import Borders from './Borders'

const App = () => {
   return (
      <>
         <Navbar />
         <div
            style={{
               height: '200vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <span>ello</span>
         </div>
         <Borders />
      </>
   )
}

export default App
