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

const Drawer = ({ navOut }) => {
   return (
      <nav className={navOut ? 'drawer active' : 'drawer'}>
         {sections.map((section) => (
            <a key={section.id} className='drawer-item' href={`#${section.id}`}>
               <span className='drawer-item_title'>{section.name}</span>
            </a>
         ))}
      </nav>
   )
}

export default Drawer
