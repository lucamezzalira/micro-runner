import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Button } from '../Navbar/navbar.style';

const InnerWrapper = styled.div`
  min-height: 100vh;
  padding: 30px;
`;

export const SpreadButton = styled(Button)`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: calc(100% - 60px);
    width: calc(100% - 80px);
    position: absolute;
    left: 40px;
    bottom: 40px;
    min-height: 54px;
    border-radius: 10px;
    font-size: 15px;
    overflow: hidden;
    z-index: 1;
    img {
      margin-left: 13px;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      background: repeating-linear-gradient(
        -45deg,
        ${themeGet('colors.primary', '#FCF22B')},
        ${themeGet('colors.primary', '#FCF22B')} 10px,
        ${themeGet('colors.primaryHover', '#ECF22B')} 10px,
        ${themeGet('colors.primaryHover', '#ECF22B')} 20px
      );
      transition: all 0.45s ease;

      @media only screen and (max-width: 1440px) {
        background: repeating-linear-gradient(
          -45deg,
          ${themeGet('colors.primary', '#FCF22B')},
          ${themeGet('colors.primary', '#FCF22B')} 8px,
          ${themeGet('colors.primaryHover', '#ECF22B')} 8px,
          ${themeGet('colors.primaryHover', '#ECF22B')} 16px
        );
      }
    }

    &:hover {
      background-color: ${themeGet('colors.primary', '#FCF22B')};

      &::before {
        left: 0;
        opacity: 0.8;
        visibility: visible;
      }
    }
  }
`;

export default InnerWrapper;
