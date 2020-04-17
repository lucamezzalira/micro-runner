import React from 'react';
import PropTypes from 'prop-types';
import NavbarStyle from './navbar.style';

const Navbar = ({ className, children, navbarStyle, ...props }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <NavbarStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: PropTypes.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: PropTypes.element,

  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),

  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),

  space: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),

  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),

  boxShadow: PropTypes.string,

  color: PropTypes.string,

  display: PropTypes.string,

  alignItems: PropTypes.string,

  justifyContent: PropTypes.string,

  flexDirection: PropTypes.string,

  flexWrap: PropTypes.string,
};

/** Navbar default proptype */
Navbar.defaultProps = {};

export default Navbar;
