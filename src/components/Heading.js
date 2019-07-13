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
  color: PropTypes.oneOf(['left', 'right']).isRequired
}

export default Heading
