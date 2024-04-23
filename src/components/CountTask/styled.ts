import styled from 'styled-components';

export const ContainerCountTask = styled.div``;

export const CountTotal = styled.p`
  font-size: 17px;
  display: flex;
  gap: 10px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.5px;
`;

export const CountTask = styled.span`
  color: ${({ theme }) => theme.GREEN_200};
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
`;
