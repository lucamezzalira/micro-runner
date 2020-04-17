import styled, { keyframes } from 'styled-components';
import { themeGet } from 'styled-system';

const shake = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(8px);
}
100% {
  transform: translateX(0);
}
`;

const BannerWrapper = styled.div`
  display: flex;
  height: 100vh;
  margin-bottom: 81px;
  @media only screen and (max-width: 1360px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 580px;
    height: auto;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 667px) {
    min-height: 100vh;
    height: auto;
  }

  .leftbar {
    width: 200px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 1440px) {
      width: 170px;
    }
    @media only screen and (max-width: 1360px) {
      display: none;
    }

    .smooth_scroll {
      display: block;
      transform: rotate(-90deg);
      margin-bottom: 74px;
      font-size: 18px;
      font-weight: 600;
      color: #93a2ab;
      transition: all 0.3s ease;
      @media only screen and (max-width: 1440px) {
        font-size: 16px;
        margin-bottom: 66px;
      }
      .btn_text {
        margin-left: 20px;
      }
      i {
        /* transform: translateX(6px); */
        display: inline-flex;
      }
      &:hover {
        color: ${themeGet('colors.text', '#294859')};

        i {
          animation: ${shake} 1s infinite;
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: calc(100% - 200px);
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 170px);
  }
  @media only screen and (max-width: 1360px) {
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  width: 450px;
  align-self: center;
  padding-right: 45px;
  @media only screen and (max-width: 1440px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 1360px) {
    width: 470px;
    margin-left: 30px;
    padding-right: 30px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
  }
  @media only screen and (max-width: 667px) {
    width: calc(100% - 30px);
    max-width: 480px;
    align-self: flex-start;
    padding-top: 160px;
  }

  h2 {
    font-size: 50px;
    line-height: 70px;
    font-weight: 900;
    margin-bottom: 27px;
    @media only screen and (max-width: 1440px) {
      font-size: 46px;
      line-height: 64px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 42px;
      line-height: 50px;
      margin-bottom: 25px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 36px;
      line-height: 46px;
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 25px;
    line-height: 40px;
    font-weight: 400;
    color: ${themeGet('colors.text', '#294859')};
    margin-bottom: 22px;
    @media only screen and (max-width: 1440px) {
      font-size: 22px;
      line-height: 40px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 18px;
      line-height: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 45px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
      margin-bottom: 40px;
    }

    &.highlighted_text {
      margin: 0 0 40px;
      font-size: 14px;
      line-height: 17px;
      color: ${themeGet('colors.heading', '#060F1E')};
      @media only screen and (max-width: 1440px) {
        margin: 0 0 30px;
      }
    }
  }
`;

export const HighlightedText = styled.p`
  display: flex;
  align-items: center;
  max-width: 320px;
  width: 100%;
  min-height: 28px;
  border-radius: 80px;
  padding: 3px 28px 3px 4px;
  background-color: #eff0f0;

  strong {
    display: inline-flex;
    align-items: center;
    min-width: 51px;
    min-height: 20px;
    padding: 3px 11px;
    border-radius: 30px;
    font-size: 10px;
    text-transform: uppercase;
    color: ${themeGet('colors.white', '#ffffff')};
    background-color: ${themeGet('colors.secondary', '#D50032')};
    margin-right: 10px;
  }
`;

export const ImageArea = styled.div`
  width: calc(100% - 450px);
  @media only screen and (max-width: 1360px) {
    width: calc(100% - 500px);
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% - 380px);
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    padding: 70px 0 40px;
  }

  #charitySlide {
    .glide__slides {
      height: 100vh;
      @media only screen and (max-width: 991px) {
        height: 762px;
      }
      @media only screen and (max-width: 667px) {
        height: 380px;
      }
      .glide__slide {
        .slide_image {
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .glide__controls {
      position: absolute;
      bottom: 100px;
      right: calc(100% + 50px);
      display: flex;
      align-items: center;
      @media only screen and (max-width: 1440px) {
        bottom: 50px;
      }
      @media only screen and (max-width: 1360px) {
        right: calc(100% + 40px);
      }
      @media only screen and (max-width: 667px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: inherit;
        right: auto;
        bottom: -40px;
      }

      div {
        cursor: pointer;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        min-height: 17px;
        margin-left: 20px;

        &:first-child {
          margin-left: 0;
        }

        > span {
          display: inline-block;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: ${themeGet('colors.text', '#294859')};
          position: relative;
          transition: all 0.3s ease;

          &::before,
          &::after {
            content: '';
            display: block;
            width: 14px;
            height: 2px;
            border-radius: 4px;
            background-color: ${themeGet('colors.text', '#294859')};
            position: absolute;
            z-index: 1;
            transition: all 0.3s ease;
          }

          &.next_arrow {
            &::before {
              right: 0;
              transform: rotate(42deg);
              transform-origin: top right;
            }
            &::after {
              right: 0;
              transform: rotate(-42deg);
              transform-origin: 14px 7px;
              width: 11px;
            }
          }

          &.prev_arrow {
            &::before {
              left: 0;
              transform: rotate(-42deg);
              transform-origin: top left;
            }
            &::after {
              left: 0;
              transform: rotate(42deg);
              transform-origin: -3px 6px;
              width: 11px;
            }
          }
        }

        &:hover {
          > span {
            width: 100px;
            background-color: ${themeGet('colors.secondary', '#D50032')};
            @media only screen and (max-width: 1440px) {
              width: 70px;
            }

            &::before,
            &::after {
              background-color: ${themeGet('colors.secondary', '#D50032')};
            }
          }
        }
      }
    }
  }
`;

export default BannerWrapper;
