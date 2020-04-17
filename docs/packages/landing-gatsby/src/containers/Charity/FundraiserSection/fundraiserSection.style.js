import styled from 'styled-components';
import { themeGet } from 'styled-system';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SectionWrapper = styled.section`
  width: 100%;
  padding: 81px 0;
  @media only screen and (max-width: 1440px) {
    padding: 70px 0;
  }
  @media only screen and (max-width: 1360px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 90px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 54px;
  }

  h2 {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 12px;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 34px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  @media only screen and (max-width: 991px) {
    width: 42%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding-left: 100px;
  @media only screen and (max-width: 1440px) {
    padding-left: 70px;
  }
  @media only screen and (max-width: 1360px) {
    padding-left: 60px;
  }
  @media only screen and (max-width: 991px) {
    width: 48%;
    padding-left: 40px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-left: 0;
    margin-top: 30px;
  }

  h3 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 22px;
    @media only screen and (max-width: 1440px) {
      font-size: 26px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 22px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 36px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 28px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
  }
`;

export const TextAndLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 15px;
  }

  h4 {
    color: ${themeGet('colors.secondary', '#D50032')};
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 26px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 13px;
    }
  }

  .text_btn {
    color: ${themeGet('colors.heading', '#060F1E')};
    font-weight: 600;
    font-size: 18px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 13px;
    }

    i {
      margin-left: 5px;
    }
  }
`;

export const DonationProgressbar = styled.div`
  width: 100%;
  margin-top: 50px;
  @media only screen and (max-width: 991px) {
    margin-top: 40px;
  }

  p {
    margin-top: 0;
    @media only screen and (max-width: 991px) {
      margin: 0 0 10px;
    }
  }

  h5 {
    font-size: 18px;
    line-height: 31px;
    font-weight: 400;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 28px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
  }
`;

export const BarArea = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 23px;
  @media only screen and (max-width: 991px) {
    margin-bottom: 20px;
  }

  &::before,
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: ${themeGet('colors.lightGray', '#f0f0f0')};
    position: absolute;
    bottom: -7px;
    left: 0;
  }

  &::after {
    width: 56%;
    background-color: ${themeGet('colors.secondary', '#D50032')};
  }

  p {
    line-height: 30px;
    &:last-child {
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
  }
`;

export const CurrentStatus = styled.p`
  color: ${themeGet('colors.heading', '#060F1E')} !important;
  margin-top: -6px !important;

  strong {
    color: ${themeGet('colors.secondary', '#D50032')};
    font-size: 40px;
    line-height: 28px;
    font-weight: 700;
    @media only screen and (max-width: 991px) {
      font-size: 32px;
    }
  }
`;

export const ShareArea = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1360px) {
    margin-top: 45px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const DonateButton = styled(AnchorLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 230px;
  height: 65px;
  border: 0;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: ${themeGet('colors.heading', '#060F1E')};
  background-color: ${themeGet('colors.primary', '#FCF22B')};
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    height: 56px;
    min-width: 200px;
    font-size: 14px;
  }

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
    &::before {
      left: 0;
      opacity: 0.8;
      visibility: visible;
    }
  }
`;

export const ShareList = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    margin-top: 20px;
  }
`;

export const Item = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 400;
  color: ${themeGet('colors.heading', '#060F1E')};
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 15px;
    margin-right: 25px;
  }

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 20px;
    fill: ${themeGet('colors.heading', '#060F1E')};
    transition: all 0.3s ease;
  }

  a {
    &:hover {
      &.twitter {
        svg {
          fill: ${themeGet('colors.twitter', '#38A1F3')};
        }
      }
      &.facebook {
        svg {
          fill: ${themeGet('colors.facebook', '#38A1F3')};
        }
      }
    }
  }
`;

export default SectionWrapper;
