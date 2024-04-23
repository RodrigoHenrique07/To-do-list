import styled from 'styled-components';

export const ContainerLogin = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 50px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;


`;

export const ForgotPasswor = styled.button`
  font-size: 15px;
  font-weight: 450;
  line-height: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 25px;
  
`;

export const Register = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 50px;
`;

export const NewRegister = styled.button`
  color: ${({ theme }) => theme.GREEN_200};
  font-size: 15px;
  font-weight: 700;
`;

export const TextRegister = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  color: ${({ theme }) => theme.BLACK};
`;

export const MenssageError = styled.span`

  font-size: 12px;
  color: red;

`;
