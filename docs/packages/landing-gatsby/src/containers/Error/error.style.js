import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding: 80px 15px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ErrorConatent = styled.div`
  width: 450px;
  max-width: 100%;
  margin: 0 auto;

  .image-wrapper {
    @media (max-width: 1480px) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const ButtonWrapper = styled.div`
  font-family: 'roboto';
  text-align: center;
  > * {
    margin: 0 8px;
  }
`;
