import styled from 'styled-components';
import { themeGet } from 'styled-system';

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
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -120px -35px 0;
  @media only screen and (max-width: 1440px) {
    margin: -70px -30px 0;
  }
  @media only screen and (max-width: 1360px) {
    margin: -50px -15px 0;
  }

  .blog_post {
    width: calc(100% / 3);
    padding: 0 35px;
    display: flex;
    align-items: flex-start;
    margin-top: 120px;
    @media only screen and (max-width: 1440px) {
      margin-top: 70px;
      padding: 0 30px;
    }
    @media only screen and (max-width: 1360px) {
      margin-top: 50px;
      padding: 0 15px;
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2);
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }

    .thumbnail {
      width: 60px;
      margin-right: 29px;
      flex-shrink: 0;
      @media only screen and (max-width: 1360px) {
        width: 42px;
        margin-right: 20px;
      }
    }

    .content {
      h3 {
        margin: 0 0 14px;
        font-size: 24px;
        font-weight: 400;
        @media only screen and (max-width: 1440px) {
          font-size: 22px;
          margin: 0 0 10px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 18px;
        }
      }

      p {
        margin: 0;
        font-size: 18px;
        line-height: 28px;
        color: ${themeGet('colors.text', '#294859')};
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
          line-height: 26px;
        }
      }
    }
  }
`;

export default SectionWrapper;
