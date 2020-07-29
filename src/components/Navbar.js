import React, { useState } from 'react'

import Drawer from './Drawer'
import ScrollIndicator from './ScrollIndicator'

const sections = [
   {
      name: 'Home',
      id: 'home',
   },
   {
      name: 'Over mij',
      id: 'over',
   },
   {
      name: 'Portfolio',
      id: 'portfolio',
   },
   {
      name: 'Contact',
      id: 'contact',
   },
]

const Navbar = ({ sectionPos }) => {
   const [navOut, setNavOut] = useState(false)

   const handleNav = () => {
      setNavOut(!navOut)
   }

   return (
      <header>
         <div
            className={navOut ? 'navbar-menu-button active-menu' : 'navbar-menu-button'}
            onClick={handleNav}
            role='button'
         >
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
         </div>
         <ScrollIndicator sections={sections} sectionPos={sectionPos} />
         <Drawer navOut={navOut} handleNav={handleNav} sections={sections} />
      </header>
   )
}

export default Navbar
