import styled from 'styled-components';

interface BtnTaskModalProps {
  textColor?: string;
}

export const Container = styled.div`
  overflow-y: auto;
  height: 300px;
  transition: overflow-y 0.3s ease;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (max-width: 600px) {
    max-height: 400px;
  }
`;
export const ContainerTask = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 2px solid #f4f5f7;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Tarefa = styled.label`
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
`;

export const Checkbox = styled.input``;

export const TaskBtnOption = styled.button``;

export const ContainerTaskModal = styled.div`
  width: 167px;
  height: 161px;
  flex-shrink: 0;
  padding: 26px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.WHITE};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 500;
`;

export const ListBtnTaskModal = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnTaskModal = styled.button<BtnTaskModalProps>`
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({ textColor }) => textColor || '#000'};
`;
