import React from 'react'

const renderIndicator = (arr) => {
   return arr.map((item) => (
      <a href={`#${item.id}`} className='indicator-dot' key={item.id}>
         <div className='dot-inactive'></div>
         <div className='dot-active'></div>
      </a>
   ))
}

const ScrollIndicator = ({ sections }) => {
   return <div className='indicator'>{renderIndicator(sections)}</div>
}

export default ScrollIndicator
