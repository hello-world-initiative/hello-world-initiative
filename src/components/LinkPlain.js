import React from 'react';
import PropTypes from 'prop-types';

const LinkPlain = ({ to, text }) => (
  <a href={to} rel="noopener noreferrer" className="linkPlain">
    <span className="linkPlain-text">{text}</span>
  </a>
);

LinkPlain.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default LinkPlain;
