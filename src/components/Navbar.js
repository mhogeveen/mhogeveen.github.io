import React, { useState } from 'react'

import Drawer from './Drawer'

const Navbar = () => {
   const [navOut, setNavOut] = useState(false)

   const handleNav = () => {
      setNavOut(!navOut)
   }

   return (
      <header>
         <div
            className={navOut ? 'navbar-menu-button active' : 'navbar-menu-button'}
            onClick={handleNav}
         >
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
         </div>
         <Drawer navOut={navOut} />
      </header>
   )
}

export default Navbar
