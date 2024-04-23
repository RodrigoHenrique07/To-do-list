import { HouseLine, PlusCircle, SignOut } from '@phosphor-icons/react';
import { CreatedTask } from '../CreatedTask/created';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as S from './styled';

export function Sidebar() {
  const navigate = useNavigate();
  const [modalTask, setModalTask] = useState(false);

  function handleToggleModal() {
    setModalTask(!modalTask);
  }

  function handleHome() {
    navigate('/');
  }

  return (
    <>
      {modalTask && <CreatedTask toggleModal={handleToggleModal} />}

      <S.ContainerSidebar>
        <S.List>
          <S.ListItem>
            <S.ListButton>
              <HouseLine size={32} color="#9FA5C0" />
              Home
            </S.ListButton>
          </S.ListItem>

          <S.ListItem>
            <S.ListButton onClick={handleToggleModal}>
              <PlusCircle size={32} color="#9FA5C0" />
              Adicionar tarefa
            </S.ListButton>
          </S.ListItem>

          <S.ListItem>
            <S.ListButton onClick={handleHome}>
              <SignOut size={32} color="#9FA5C0" />
              Sair
            </S.ListButton>
          </S.ListItem>
        </S.List>
      </S.ContainerSidebar>
    </>
  );
}
