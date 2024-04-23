import { useContext, useState } from 'react';
import * as S from './styled';
import { api } from '@/server/api';
import { UpdateTaskContext } from '@/context/contextUpdateTask';

interface Props {
  taskId: number;
  isOpen: () => void;
  onClose: () => void;
  isVisible: boolean;
}

export function UpdateTask({ taskId, onClose, isVisible }: Props) {
  const [newDescription, setNewDescription] = useState('');
  const { handleUpdateFalse, handleUpdateTrue, isUpdate } = useContext(UpdateTaskContext);

  const handleUpdateDescription = async () => {
    const data = {
      description: newDescription
    };

    if (newDescription.length === 0) {
      alert('A tarefa precisa de uma descrição para ser atualizada');
    }
    try {
      await api.patch(`/tasks/${taskId}`, data);
      if (isUpdate == false) {
        handleUpdateTrue();
      } else {
        handleUpdateFalse();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <S.Overlay>
      <S.Dropdown>
        <S.FormCreated>
          <S.TitleCreated>Editar tarefa</S.TitleCreated>
          <S.InputCreated
            placeholder="Descrição"
            onChange={e => setNewDescription(e.target.value)}
          />
          <S.ContainerButton>
            <S.ButtonForm active={false} type="button" onClick={onClose}>
              Cancelar
            </S.ButtonForm>
            <S.ButtonForm
              active={true}
              onClick={handleUpdateDescription}
              type="button"
            >
              Salvar
            </S.ButtonForm>
          </S.ContainerButton>
        </S.FormCreated>
      </S.Dropdown>
    </S.Overlay>
  );
}
