import styled from 'styled-components';
import { themeGet } from 'styled-system';
import bgImage from 'common/src/assets/image/charity/milestone-bg.png';

const BlockWrapper = styled.div`
  width: 100%;
  margin: 81px 0;
  padding: 60px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  @media only screen and (max-width: 1440px) {
    margin: 70px 0;
    padding: 50px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 30px;
    margin: 50px 0;
  }
  @media only screen and (max-width: 991px) {
    margin: 40px 0;
    padding-bottom: 10px;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px;
    background-size: cover;
    margin-bottom: 40px;
  }
`;

export const MilestoneCard = styled.div`
  max-width: 323px;
  padding: 62px 55px 70px;
  border-radius: 10px;
  background-color: ${themeGet('colors.primary', '#FCF22B')};
  text-align: center;
  @media only screen and (max-width: 1440px) {
    padding: 56px 45px 56px;
  }
  @media only screen and (max-width: 1360px) {
    max-width: 300px;
    padding: 45px 30px;
  }
  @media only screen and (max-width: 991px) {
    max-width: 280px;
    padding: 40px 30px;
  }

  p {
    font-size: 20px;
    line-height: 32px;
    text-transform: uppercase;
    color: ${themeGet('colors.heading', '#060F1E')};
    margin: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 18px;
      line-height: 30px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
      line-height: 28px;
    }
  }

  h2 {
    font-size: 80px;
    line-height: 70px;
    font-weight: 700;
    color: ${themeGet('colors.heading', '#060F1E')};
    margin: 30px 0;
    @media only screen and (max-width: 1440px) {
      font-size: 56px;
      line-height: 56px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 48px;
      line-height: 40px;
      margin: 28px 0;
    }
    @media only screen and (max-width: 991px) {
      font-size: 44px;
      line-height: 40px;
      margin: 22px 0;
    }
  }

  .learn__more-btn {
    margin-top: 40px;
    @media only screen and (max-width: 1440px) {
      margin-top: 45px;
    }
    @media only screen and (max-width: 1360px) {
      margin-top: 40px;
    }

    &::before {
      background-color: #fffa9a !important;
    }
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 920px;
  width: 100%;
  margin: 0 auto 75px;
  @media only screen and (max-width: 1440px) {
    margin: 0 auto 70px;
  }
  @media only screen and (max-width: 1360px) {
    margin: 0 auto 50px;
  }
  @media only screen and (max-width: 991px) {
    margin: 0 auto 40px;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 auto 15px;
  }
`;

export const CounterItem = styled.div`
  text-align: center;
  @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 50px;
    line-height: 60px;
    font-weight: 300;
    @media only screen and (max-width: 1440px) {
      font-size: 40px;
      line-height: 46px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 13px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
    }
  }
`;

export default BlockWrapper;
