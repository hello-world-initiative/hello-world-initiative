import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ position, text, highlight, children }) => {
  // First create an array of "wrapping" text by splitting on the word intended to be highlighted
  // The heading gets reconstructed using this split array and the highlight text
  // in the return JSX
  if (text && highlight) {
    const regularText = text.split(highlight);
    return (
      <div className={`heading-container heading-container-${position}`}>
        <h2 className={`heading heading-${position}`}>
          {regularText[0]}
          <span className="heading-highlight">{highlight}</span>
          {regularText[1]}
        </h2>
      </div>
    );
  } else {
    return (
      <div className={`heading-container heading-container-${position}`}>
        <h2 className={`heading heading-${position}`}>{children}</h2>
      </div>
    );
  }
};

Heading.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  text: PropTypes.string,
  highlight: PropTypes.string
};

export default Heading;

// Alternate heading to be used in light sections
export const AlternateHeading = ({ position, children }) => (
  <div className="heading-container">
    <h2 className={`heading heading-alt heading-alt-${position}`}>
      {children}
    </h2>
  </div>
);

AlternateHeading.propTypes = {
  position: PropTypes.oneOf(['left', 'center']).isRequired
};
