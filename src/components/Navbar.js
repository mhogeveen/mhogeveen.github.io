import React from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../actions'

import Drawer from './Drawer'
import ScrollIndicator from './ScrollIndicator'
import SocialIcons from './SocialIcons'

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

const Navbar = ({ menu, toggleMenu }) => {
   const handleToggleMenu = () => {
      toggleMenu()
   }

   return (
      <header>
         <div
            className={menu ? 'navbar-menu-button active-menu' : 'navbar-menu-button'}
            onClick={handleToggleMenu}
            role='button'
         >
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
            <div className='menu-button-bar'></div>
         </div>
         <ScrollIndicator sections={sections} />
         <SocialIcons />
         <Drawer sections={sections} menu={menu} handleToggleMenu={handleToggleMenu} />
      </header>
   )
}

const mapStateToProps = (state) => ({
   menu: state.menu,
})

export default connect(mapStateToProps, { toggleMenu })(Navbar)
