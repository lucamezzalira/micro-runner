import styled from 'styled-components';
import { themeGet } from 'styled-system';

const NavbarWrapper = styled.nav`
  .container {
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 1220px) and (max-width: 1440px) {
      max-width: 1170px !important;
    }
    @media only screen and (max-width: 1440px) {
      padding: 0 30px;
    }
  }

  .logo {
    max-width: 107px;
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 1360px) {
    padding-right: calc(75px + 20px);
  }
  @media only screen and (max-width: 1260px) {
    padding-right: calc(75px + 30px);
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }

  a {
    font-size: 16px;
    font-weight: 600;
    margin-right: 46px;
    color: ${themeGet('colors.white', '#ffffff')};
    transition: all 0.25s ease;
    @media only screen and (max-width: 1440px) {
      margin-right: 40px;
    }
    @media only screen and (max-width: 1360px) {
      margin-right: 30px;
    }

    &:hover {
      color: ${themeGet('colors.primary', '#FCF22B')};
    }
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  min-width: 150px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: ${themeGet('colors.heading', '#060F1E')};
  background-color: ${themeGet('colors.primary', '#FCF22B')};
  transition: all 0.3s ease;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 14px;
  }

  &:hover {
    background-color: ${themeGet('colors.primaryHover', '#ECF22F')};
  }

  img {
    margin-left: 11px;
    @media only screen and (max-width: 1440px) {
      margin-left: 10px;
    }
  }

  &:hover,
  &:focus {
    content: 0;
    box-shadow: none;
  }
`;

export default NavbarWrapper;
