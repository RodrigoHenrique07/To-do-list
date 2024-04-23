import styled from 'styled-components';

export const ContainerInput = styled.input`
  width: 100%;
  padding: 0px 25px;
  border-radius: 32px;
`;

export const Wrapper = styled.div``;

export const Container = styled.div`
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.GRAY_300};
  width: 100%;
  display: flex;
  justify-content: space-between;

  height: 50px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.03);

  margin: 3px 0;
`;

export const ContainerInputPassword = styled.input`
  width: 100%;
  padding: 0px 25px;
  border-radius: 32px;
`;

export const Label = styled.label`
  margin-left: 25px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
