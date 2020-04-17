import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import footerBg from 'common/src/assets/image/charity/footer-bg.png';

const shake = keyframes`
0% {
  transform: translateX(-1px);
}
50% {
  transform: translateX(5px);
}
100% {
  transform: translateX(0);
}
`;

/* Charity global style */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${themeGet('colors.heading', '#060F1E')};
    font-family: 'Open Sans', sans-serif;
  }

  section {
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: ${themeGet('colors.secondaryText', '#616970')};
  }

  /* Drawer menu style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }

      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 30px;

        > button {
          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
          transition: all 0.3s ease;

          svg {
            width: 22px;
            height: 22px;
          }

          &:hover {
            opacity: 0.9;
          }
        }
      }

      .scrollspy__menu {
        padding: 50px 40px;
        max-height: 505px;
        overflow-x: auto;

        @media only screen and (max-width: 480px) {
          padding: 30px 10px;
        }

        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }

        li {
          margin: 35px 0;
          @media only screen and (max-width: 480px) {
            margin: 25px 0;
          }

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          a {
            display: block;
            color: ${themeGet('colors.heading', '#060F1E')};
            font-size: 18px;
            font-weight: 600;
            transition: all 0.3s ease;
            @media only screen and (max-width: 480px) {
              font-size: 16px;
            }
            &:hover {
              color: ${themeGet('colors.secondary', '#D50032')};
            }
          }

          &.active {
            a {
              color: ${themeGet('colors.secondary', '#D50032')};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 20px;
                height: 2px;
                border-radius: 5px;
                background-color: ${themeGet('colors.secondary', '#D50032')};
                position: absolute;
                top: calc(50% - 1px);
                left: -30px;
              }
            }
          }
        }
      }
    }
  }
`;

/* Charity wrapper style */
const CharityWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-size: 100% 1310px;
  background-position: bottom center;
  overflow-x: hidden;

  .container {
    @media only screen and (min-width: 1220px) and (max-width: 1440px) {
      max-width: 1170px;
    }
  }

  .navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 22px 0;
    transition: padding 0.2s ease, background-color 0.1s ease;

    &::before {
      width: calc(100% - 650px);
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      background: linear-gradient(#0000006e, rgba(0, 0, 0, 0));
      right: 0;
      top: 0;
      z-index: -1;
      @media only screen and (max-width: 1440px) {
        width: calc(100% - 620px);
      }
      @media only screen and (max-width: 1360px) {
        width: calc(100% - 500px);
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
  }

  .sticky-nav-active {
    .navbar {
      padding: 16px 0;
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      &::before {
        display: none;
      }

      .smooth_scroll {
        color: ${themeGet('colors.heading', '#060F1E')};
        transition: color 0.3s ease;

        &:hover {
          color: ${themeGet('colors.text', '#294859')};
        }
      }
    }
  }

  .learn__more-btn {
    display: inline-flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    color: ${themeGet('colors.heading', '#060F1E')};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    height: 50px;
    min-width: 151px;
    padding: 0 20px;
    position: relative;
    @media only screen and (max-width: 1360px) {
      font-size: 13px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 40px;
      width: 72px;
      background-color: ${themeGet('colors.primary', '#FCF22B')};
      transition: all 0.3s ease-out;
    }

    .btn_text {
      z-index: 1;
    }

    .hyphen {
      width: 20px;
      height: 2px;
      margin-right: 9px;
      background-color: ${themeGet('colors.heading', '#060F1E')};
      transform-origin: 50% 50%;
      z-index: 1;
    }

    &:hover {
      &::before {
        width: 100%;
      }

      .hyphen {
        animation: ${shake} 1s linear;
      }
    }
  }

  .reusecore-drawer__handler {
    .drawer_btn {
      border: 0;
      width: 80px;
      height: 100px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: fixed;
      top: 0;
      right: 60px;
      z-index: 99999;
      background-color: ${themeGet('colors.secondary', '#D50032')};
      transition: background-color 0.2s ease;
      @media only screen and (max-width: 1440px) {
        width: 75px;
      }
      @media only screen and (max-width: 1360px) {
        right: 30px;
      }

      &:hover {
        background-color: #e00032;
      }

      &:hover,
      &:focus {
        outline: 0;
      }

      ul {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 5px;
        height: 22px;
        width: 26px;
        transition: all 0.35s ease;
        @media only screen and (max-width: 1440px) {
          transform: scale(0.9);
        }
        @media only screen and (max-width: 667px) {
          transform: scale(0.8);
        }

        li {
          width: 5px;
          height: 4px;
          background-color: ${themeGet('colors.white', '#ffffff')};
        }
      }

      i {
        font-size: 22px;
        position: absolute;
        font-weight: 900;
        color: ${themeGet('colors.white', '#ffffff')};
        transform: scale(0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.35s ease;
      }

      &.active {
        ul {
          opacity: 0;
          transform: scale(0.1);
        }

        i {
          opacity: 1;
          transform: rotate(45deg) scale(1);
          visibility: visible;
        }
      }
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export { GlobalStyle, CharityWrapper, ContentWrapper };
