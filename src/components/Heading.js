import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({position, children}) => {
  return (
    <div className={`heading-container heading-container-${position}`}>
      <h2 className={`heading heading-${position}`}>
        {children}
      </h2>
    </div>
  )
}

Heading.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired
}

export default Heading

// Alternate heading to be used in light sections
export const AlternateHeading = ({position, children}) => (
  <div className="heading-container">
    <h2 className={`heading heading-alt heading-alt-${position}`}>
      {children}
    </h2>
  </div>
)

AlternateHeading.propTypes = {
  position: PropTypes.oneOf(['left', 'center']).isRequired
}