import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({position, children}) => {
  return (
    <h2 class={`heading heading-${position}`}>
      {children}
    </h2>
  )
}

Heading.propTypes = {
  color: PropTypes.oneOf(['left', 'right']).isRequired
}

export default Heading
