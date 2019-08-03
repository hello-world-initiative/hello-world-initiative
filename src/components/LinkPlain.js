import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkPlain = ({ to, text }) => (
  <a href={to} rel="noopener noreferrer" className="linkPlain">
    <span className="linkPlain-text">{text}</span>
    <span className="linkPlain-icon">
      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
    </span>
  </a>
);

LinkPlain.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default LinkPlain;
