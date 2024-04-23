import styled from 'styled-components';

export const ContainerSignUp = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSignUp = styled.form`
  width: 100%;
  margin-top: 30px;
  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const ContainerInputSignUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;

export const WrapperInput = styled.div``;

export const BackHome = styled.button`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 480px) {
    margin-top: 40px;
  }

  color: ${({ theme }) => theme.GREEN_200};
`;

export const MenssageError = styled.span`
  font-size: 12px;
  color: red;
`;
