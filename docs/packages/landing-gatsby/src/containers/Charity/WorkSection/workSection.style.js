import styled from 'styled-components';
import { themeGet } from 'styled-system';
import pattern1 from 'common/src/assets/image/charity/pattern1.svg';
import pattern2 from 'common/src/assets/image/charity/pattern2.svg';

const SectionWrapper = styled.section`
  width: 100%;
  padding: 81px 0;
  @media only screen and (max-width: 1440px) {
    padding: 70px 0 50px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 45px 0 30px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0 25px;
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
    @media only screen and (max-width: 767px) {
      font-size: 28px;
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
    @media only screen and (min-width: 668px) and (max-width: 991px) {
      padding: 0 60px;
    }
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -25px;
  padding: 0 51px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 1440px) {
    padding: 0;
  }
  @media only screen and (max-width: 1360px) {
    margin: 0 -15px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 422px;
    height: 262px;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
  }

  &::before {
    top: 8px;
    left: 0;
    background-image: url(${pattern1});
  }

  &::after {
    bottom: 40px;
    right: 0;
    background-image: url(${pattern2});
  }

  .blog_post {
    width: calc(100% / 3 - 50px);
    border-radius: 20px;
    padding: 50px 37px 54px;
    box-shadow: 0 0 100px rgba(175, 182, 194, 0.2);
    background-color: ${themeGet('colors.white', '#ffffff')};
    margin: 0 25px 25px;
    text-align: center;
    @media only screen and (max-width: 1360px) {
      width: calc(100% / 3 - 30px);
      border-radius: 15px;
      padding: 45px 30px 40px;
      margin: 0 15px 25px;
    }
    @media only screen and (max-width: 991px) {
      border-radius: 10px;
      padding: 30px 18px;
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 30px);
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding: 45px 30px;
    }

    .thumbnail {
      img {
        height: 100px;
        width: auto;
        margin-bottom: 38px;
        @media only screen and (max-width: 1440px) {
          height: 90px;
          margin-bottom: 35px;
        }
        @media only screen and (max-width: 1360px) {
          height: 80px;
          margin-bottom: 27px;
        }
        @media only screen and (max-width: 991px) {
          height: 67px;
          margin-bottom: 20px;
        }
      }
    }

    .content {
      h3 {
        margin: 0 0 10px;
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        @media only screen and (max-width: 1440px) {
          font-size: 18px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 16px;
          line-height: 28px;
        }
        @media only screen and (max-width: 991px) {
          font-size: 15px;
          line-height: 26px;
          margin-bottom: 8px;
        }
      }

      p {
        margin: 0;
        font-size: 16px;
        line-height: 28px;
        color: ${themeGet('colors.text', '#294859')};
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
        @media only screen and (max-width: 991px) {
          line-height: 25px;
          /* color: #616970; */
        }
      }
    }
  }
`;

export default SectionWrapper;
