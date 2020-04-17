import styled, { keyframes } from 'styled-components';

const slideShow = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 81px 0;
  @media only screen and (max-width: 1360px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 30px 0 40px;
  }
`;

export const ImageSlider = styled.div`
  max-width: 524px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 991px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 767px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(to right, #fafbfe, rgba(255, 255, 255, 0));
    z-index: 1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotateZ(180deg);
  }
`;

export const ImageSlide = styled.div`
  height: 30px;
  flex-shrink: 0;
  animation: ${slideShow} 20s linear infinite;

  a {
    margin: 0 22px;
    transition: all 0.3s ease;
    filter: brightness(0.85);

    img {
      @media only screen and (max-width: 1360px) {
        max-width: 90%;
      }
      @media only screen and (max-width: 991px) {
        max-width: 80%;
      }
    }

    &:hover {
      filter: brightness(0.3);
    }
  }
`;

export default SectionWrapper;
