import styled from 'styled-components';
import { themeGet } from 'styled-system';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 90px 0 40px;
  @media only screen and (max-width: 1360px) {
    padding: 60px 0 30px;
  }
  @media only screen and (max-width: 991px) {
    padding: 50px 0 30px;
  }

  .col-one {
    .logo {
      display: inline-block;
      width: 110px;
      margin: 0 0 45px;
      @media only screen and (max-width: 1440px) {
        margin-bottom: 40px;
      }
      @media only screen and (max-width: 1360px) {
        margin-bottom: 30px;
      }
      @media only screen and (max-width: 991px) {
        margin-bottom: 20px;
      }
    }

    .mail {
      font-size: 18px;
      color: ${themeGet('colors.secondary', '#D50032')};
      @media only screen and (max-width: 1440px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 15px;
      }
    }
  }

  .widget_title {
    color: ${themeGet('colors.heading', '#060F1E')};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 24px;
    @media only screen and (max-width: 1440px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .text {
    color: ${themeGet('colors.secondaryText', '#616970')};
    font-size: 18px;
    margin-bottom: 20px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
  }

  .copyright {
    align-items: center;
    justify-content: space-between;
    padding-top: 156px;
    @media only screen and (max-width: 1360px) {
      padding-top: 125px;
    }
    @media only screen and (max-width: 991px) {
      padding-top: 60px;
    }
    @media only screen and (max-width: 480px) {
      padding-top: 30px;
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 104px;
  margin-top: 45px;
  position: relative;
  min-height: 24px;
  @media only screen and (max-width: 1440px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 1360px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 20px;
  }

  select {
    border: 0;
    outline: none;
    background: transparent;
    appearance: none;
    color: ${themeGet('colors.select', '#525F7F')};
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    z-index: 1;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
  }

  svg {
    position: absolute;
    top: 1px;
    right: 10px;
    path {
      fill: ${themeGet('colors.secondaryText', '#616970')};
    }
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  a {
    color: ${themeGet('colors.secondaryText', '#616970')};
    font-size: 18px;
    line-height: 38px;
    transition: all 0.3s ease;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 36px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: ${themeGet('colors.text', '#294859')};
    }
  }
`;

export const CopyrightText = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0 !important;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin: 0 auto;
  }

  li {
    margin: 0 5px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      line-height: 1;
      color: ${themeGet('colors.secondaryText', '#616970')};
      position: relative;
      @media only screen and (max-width: 480px) {
        width: 20px;
        heigt: 40px;
        margin-bottom: 10px;
      }

      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${themeGet('colors.text', '#294859')};
        position: absolute;
        z-index: 0;
        opacity: 0;
        transform: scale(0.01);
        transition: all 0.35s ease;
      }

      i {
        position: relative;
        z-index: 1;

        svg {
          width: 18px;
          height: auto;
          @media only screen and (max-width: 1360px) {
            width: 16px;
          }
          @media only screen and (max-width: 580) {
            width: 14px;
          }
        }
      }
    }

    &.linkedin {
      a {
        &::before {
          background-color: ${themeGet('colors.linkedin', '#0077B5')};
        }
      }
    }

    &.facebook {
      a {
        &::before {
          background-color: ${themeGet('colors.facebook', '#3b5998')};
        }
      }
    }

    &.twitter {
      a {
        &::before {
          background-color: ${themeGet('colors.twitter', '#38A1F3')};
        }
      }
    }

    &.github {
      a {
        &::before {
          background-color: ${themeGet('colors.github', '#211f1f')};
        }
      }
    }

    &:hover {
      a {
        color: ${themeGet('colors.white', '#ffffff')};
        &::before {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`;

export default FooterWrapper;
