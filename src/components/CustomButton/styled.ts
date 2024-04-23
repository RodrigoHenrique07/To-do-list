import styled from 'styled-components';

export const ContainerButton = styled.button`
  display: flex;
  width: 100%;
  max-width: 300px;
  padding: 19px 32px;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.WHITE};
  background-color: ${({ theme }) => theme.GREEN_200};
  border-radius: 32px;
  font-weight: 700;
  font-size: 15px;
  margin: 0 auto;

  &[disabled] {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
