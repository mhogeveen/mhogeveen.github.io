import React from 'react'

const Drawer = ({ menu, handleToggleMenu, sections }) => {
   return (
      <nav className={menu ? 'drawer active' : 'drawer'}>
         <div className='drawer-background'></div>
         {sections.map((section) => (
            <a
               key={section.id}
               className='drawer-item'
               href={`#${section.id}`}
               onClick={handleToggleMenu}
            >
               <span className='drawer-item-title'>{section.name}</span>
               <div className='drawer-item-dot'></div>
            </a>
         ))}
      </nav>
   )
}

export default Drawer
