import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updatePos } from '../actions'

const ScrollIndicator = ({ sections, positions, updatePos }) => {
   useEffect(() => {
      const config = {
         root: null,
         rootMargin: '-30% 0px -30% 0px',
         threshold: 0.1,
      }

      const observer = new IntersectionObserver(function (entries) {
         entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
               updatePos(entry.target.id)
            }
         })
      }, config)

      observer.observe(document.querySelector('#home'))
      observer.observe(document.querySelector('#over'))
      observer.observe(document.querySelector('#portfolio'))
   }, [updatePos])

   const renderIndicator = (arr) => {
      return arr.map((item) => (
         <a href={`#${item.id}`} className='indicator-dot' key={item.id} role='button'>
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
