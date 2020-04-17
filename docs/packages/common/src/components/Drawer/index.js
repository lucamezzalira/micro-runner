import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={addAllClasses.join(' ')}
        {...props}
      >
        <div
          className="reusecore-drawer__close"
          onClick={toggleHandler}
          style={closeButtonStyle}
        >
          {closeButton}
        </div>
        {children}
      </RcDrawer>
      <div
        className="reusecore-drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: PropTypes.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: PropTypes.element,

  /** Set drawer width. Default value is 300px. */
  width: PropTypes.string,

  /** Set drawer position left || right || top || bottom. */
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  // drawerHandler: PropTypes.element.isRequired
  drawerHandler: PropTypes.element,
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null,
};

export default Drawer;
