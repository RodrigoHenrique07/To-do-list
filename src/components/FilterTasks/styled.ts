import styled from 'styled-components';
interface FilterSelecButtonProps {
  isActiveButton: boolean;
}

export const ContainerFilter = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
`;

export const FilterSelect = styled.ul`
  margin: 30px 0;
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

export const FilterSelectItem = styled.li``;

export const FilterSelecButton = styled.button<FilterSelecButtonProps>`
  display: inline-flex;
  padding: 15px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 32px;
  transition: all 0.3s;
  background-color: ${({ isActiveButton, theme }) =>
    isActiveButton ? theme.GREEN_200 : theme.WHITE_100};
  color: ${({ isActiveButton, theme }) =>
    isActiveButton ? theme.WHITE : theme.GRAY_200};
`;

export const ContainerTasks = styled.div``;

export const TaskInfoBox = styled.div`
  margin-top: 5px;
  padding: 10px 20px;
  border-top: 2px solid #f4f5f7;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
