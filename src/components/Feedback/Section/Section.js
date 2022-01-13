import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
};

Section.defaultProps = {
  children: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Section;