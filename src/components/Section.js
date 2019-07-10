import React from 'react'
import PropTypes from 'prop-types'

const Section = ({color, children}) => {
  return (
    <section className={`section section-${color}`}>
      <div className="inside-container">
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
}

export default Section
