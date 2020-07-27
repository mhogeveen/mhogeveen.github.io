import React, { useState } from 'react'

const Navbar = () => {
   const [nav, setNav] = useState(false)

   const handleNav = () => {
      setNav(!nav)
   }

   return (
      <nav className='navbar'>
         <div
            className={nav ? 'navbar-menu-button active' : 'navbar-menu-button'}
            onClick={handleNav}
         >
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
         </div>
      </nav>
   )
}

export default Navbar
