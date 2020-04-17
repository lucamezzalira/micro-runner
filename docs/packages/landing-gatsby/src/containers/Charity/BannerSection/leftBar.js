import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const LeftBar = ({ sectionId, offset, onClick, text }) => {
  return (
    <div className="leftbar">
      <AnchorLink
        className="smooth_scroll"
        href={sectionId}
        offset={offset}
        onClick={onClick}
      >
        <i className="flaticon-left-arrow" />
        <span className="btn_text">{text}</span>
      </AnchorLink>
    </div>
  );
};

export default LeftBar;
