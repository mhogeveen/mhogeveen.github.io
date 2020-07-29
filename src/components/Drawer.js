import React from 'react'

const sections = [
   {
      name: 'Home',
      id: 'home',
   },
   {
      name: 'Over mij',
      id: 'over-mij',
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

const Drawer = ({ navOut, handleNav }) => {
   return (
      <nav className={navOut ? 'drawer active' : 'drawer'}>
         <div className='drawer-background'></div>
         {sections.map((section) => (
            <a key={section.id} className='drawer-item' href={`#${section.id}`} onClick={handleNav}>
               <span className='drawer-item-title'>{section.name}</span>
               <div className='drawer-item-dot'></div>
            </a>
         ))}
      </nav>
   )
}

export default Drawer
