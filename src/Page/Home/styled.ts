import styled from 'styled-components';

export const ContainerHome = styled.section`
  display: flex;

  @media (max-width: 600px) {
    height: 100vh;
    flex-direction: column-reverse;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  padding: 60px 30px;
  width: 100%;
  height: 100vh;

  @media (max-width: 600px) {
    padding: 40px 20px 20px 20px;
  }
`;
