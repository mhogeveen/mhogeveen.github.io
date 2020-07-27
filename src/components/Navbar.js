import React, { useState } from 'react'

import Drawer from './Drawer'

const Navbar = () => {
   const [navOut, setNavOut] = useState(false)

   const handleNav = () => {
      setNavOut(!navOut)
   }

   return (
      <>
         <nav className='navbar'>
            <div
               className={navOut ? 'navbar-menu-button active' : 'navbar-menu-button'}
               onClick={handleNav}
            >
               <div className='menu-button-bar'></div>
               <div className='menu-button-bar'></div>
               <div className='menu-button-bar'></div>
            </div>
         </nav>
         <Drawer navOut={navOut} />
      </>
   )
}

export default Navbar
