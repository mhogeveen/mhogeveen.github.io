import React from 'react'

import ReduxIcon from './ReduxIcon'
import ReactIcon from './ReactIcon'
import JavaScriptIcon from './JavaScriptIcon'
import SassIcon from './SassIcon'

const components = {
   redux: <ReduxIcon />,
   react: <ReactIcon />,
   javascript: <JavaScriptIcon />,
   sass: <SassIcon />,
}

const TechIcon = ({ icons }) => {
   return icons.map((icon) => (
      <div className='tech-icon' key={icon}>
         {components[icon]}
      </div>
   ))
}

export default TechIcon
