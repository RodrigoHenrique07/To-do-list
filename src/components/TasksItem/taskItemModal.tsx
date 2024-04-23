import { CheckCircle, NotePencil, Trash } from '@phosphor-icons/react';
import { UpdateTaskContext } from '@/context/contextUpdateTask';
import {UpdateTask } from '../UpdtadeTaks/updateTask';
import * as S from './styled';
import { api } from '@/server/api';
import { useContext, useState } from 'react';
import { Loadind } from '../Loading/loading';

interface TaskModalProps {
  taskId: number;
}

export function TaskItemModal({ taskId }: TaskModalProps) {
  const { isUpdate, handleUpdateFalse, handleUpdateTrue } =
    useContext(UpdateTaskContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModel = () => {
    setModalVisible(true);
  };

  const closeModel = () => {
    setModalVisible(false);
    if (isUpdate == false) {
      handleUpdateTrue();
    } else {
      handleUpdateFalse();
    }
  };

  const isOpen = () => {
    openModel();
  };

  const handleComplete = async () => {
    setLoading(true)
    const data = {
      isCompleted: true
    };
    try {
      await api.patch(`/tasks/${taskId}`, data);
      if (isUpdate == false) {
        handleUpdateTrue();
      } else {
        handleUpdateFalse();
      }
    } catch (error: any) {
      alert(error.message);
    } finally{
      setLoading(false)
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/tasks/${taskId}`);

      if (isUpdate == false) {
        handleUpdateTrue();
      } else {
        handleUpdateFalse();
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loadind />
      ) : (
        <>
          <S.ContainerTaskModal>
            <S.ListBtnTaskModal>
              <S.BtnTaskModal textColor="#9FA5C0" onClick={isOpen}>
                <NotePencil size={20} color="#9FA5C0" />
                Editar
              </S.BtnTaskModal>

              <S.BtnTaskModal textColor="#39C4A5" onClick={handleComplete}>
                <CheckCircle size={20} color="#39C4A5" />
                Concluir
              </S.BtnTaskModal>

              <S.BtnTaskModal
                textColor="#FF6464"
                onClick={handleDelete}
                type="button"
              >
                <Trash size={20} color="#FF6464" />
                Excluir
              </S.BtnTaskModal>
            </S.ListBtnTaskModal>
          </S.ContainerTaskModal>
          {isModalVisible && (
            <UpdateTask
              isOpen={openModel}
              isVisible={isModalVisible}
              onClose={closeModel}
              taskId={taskId}
            />
          )}
        </>
      )}
    </>
  );
}
