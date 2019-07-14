import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkButton = ({to, text, icon, type}) => (
  <a href={to} className={`linkButton linkButton-${type}`}>
    <span className="linkButton-text">{text}</span>
    <span className="linkButton-icon">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
)

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired, // Could be an array or string, depending on the icon - see https://www.npmjs.com/package/@fortawesome/react-fontawesome
  type: PropTypes.oneOf(['regular, solid']).isRequired
}

export default LinkButton
