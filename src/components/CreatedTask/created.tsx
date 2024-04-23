import { UpdateTaskContext } from '@/context/contextUpdateTask';
import { useContext, useState } from 'react';
import * as S from './styled';

import { api } from '@/server/api';

interface CreatedTaks {
  toggleModal: () => void;
}

export function CreatedTask({ toggleModal }: CreatedTaks) {
  const [newTask, setNewTask] = useState('');
  const { isUpdate, handleUpdateFalse, handleUpdateTrue } =
    useContext(UpdateTaskContext);

  const handleCreatedTask = async () => {
    const data = {
      description: newTask
    };
    if (newTask.length === 0) {
      alert('A tarefa precisa de uma descriçao para ser adicionada');
    }
    try {
      await api.post('/tasks', data);
      if (isUpdate == false) {
        handleUpdateTrue();
      } else {
        handleUpdateFalse();
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      toggleModal();
    }
  };
  return (
    <>
      <S.Overlay>
        <S.Dropdown>
          <S.FormCreated>
            <S.TitleCreated>Criar nova tarefa</S.TitleCreated>
            <S.InputCreated
              placeholder="Descrição"
              onChange={e => setNewTask(e.target.value)}
            />

            <S.ContainerButton>
              <S.ButtonForm active={false} onClick={toggleModal}>
                Cancelar
              </S.ButtonForm>

              <S.ButtonForm
                active={true}
                onClick={handleCreatedTask}
                type="button"
              >
                Criar
              </S.ButtonForm>
            </S.ContainerButton>
          </S.FormCreated>
        </S.Dropdown>
      </S.Overlay>
    </>
  );
}
