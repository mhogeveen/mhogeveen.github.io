import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updatePos } from '../actions'

const ScrollIndicator = ({ sections, positions, updatePos }) => {
   useEffect(() => {
      observer.observe(document.querySelector('#home'))
      observer.observe(document.querySelector('#over'))
      observer.observe(document.querySelector('#portfolio'))
   }, [])

   var observer = new IntersectionObserver(
      function (entries) {
         if (entries[0].isIntersecting === true) {
            updatePos(entries[0].target.id)
         }
      },
      { threshold: [0.6] }
   )

   const renderIndicator = (arr) => {
      return arr.map((item) => (
         <a href={`#${item.id}`} className='indicator-dot' key={item.id}>
            <div className='dot-inactive'></div>
            <div className={positions[item.id] ? 'dot-active dot-full' : 'dot-active'}></div>
         </a>
      ))
   }

   return <div className='indicator'>{renderIndicator(sections)}</div>
}

const mapStateToProps = (state) => ({
   positions: state.positions,
})

export default connect(mapStateToProps, { updatePos })(ScrollIndicator)
