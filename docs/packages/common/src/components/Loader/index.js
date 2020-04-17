import React from 'react';
import PropTypes from 'prop-types';
import LoaderStyle from './loader.style';

const Loader = ({ loaderColor, className, ...props }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__loader'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <LoaderStyle
      className={addAllClasses.join(' ')}
      loaderColor={loaderColor}
      {...props}
    />
  );
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: PropTypes.string,

  /** Set loader width in number || string */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Set loader height in number || string */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Set color for loader */
  loaderColor: PropTypes.string,
};

Loader.defaultProps = {};

export default Loader;
