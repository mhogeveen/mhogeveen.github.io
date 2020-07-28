import React from 'react'
import ReactDOM from 'react-dom'

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
   return ReactDOM.createPortal(
      <div className={navOut ? 'drawer active' : 'drawer'}>
         {sections.map((section) => (
            <a key={section.id} className='drawer-item' href={`#${section.id}`}>
               <span className='drawer-item_title'>{section.name}</span>
            </a>
         ))}
      </div>,
      document.querySelector('#modal')
   )
}

export default Drawer
