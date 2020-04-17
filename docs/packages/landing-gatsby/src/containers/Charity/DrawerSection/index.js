import React, { useState, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Drawer from 'common/src/components/Drawer';
import Image from 'common/src/components/Image';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import InnerWrapper, { SpreadButton } from './drawerSection.style';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

const DrawerSection = () => {
  const [toggleState, setToggleState] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE',
    });
    handleActiveClass();
  };

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        menuItems {
          path
          label
          offset
        }
      }
    }
  `);

  const scrollItems = [];

  data.charityJson.menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? 'active' : ''}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <Scrollspy
          className="scrollspy__menu"
          items={scrollItems}
          offset={-81}
          currentClassName="active"
        >
          {data.charityJson.menuItems.map((menu, index) => (
            <li key={`menu_key${index}`}>
              <AnchorLink
                href={menu.path}
                offset={menu.offset}
                onClick={handleDrawerToggle}
              >
                {menu.label}
              </AnchorLink>
            </li>
          ))}
        </Scrollspy>
        <SpreadButton>
          <span className="text">SPREAD</span>
          <Image src={heartImage} alt="Charity Landing" />
        </SpreadButton>
      </InnerWrapper>
    </Drawer>
  );
};

export default DrawerSection;
