import { DotsThreeVertical } from '@phosphor-icons/react';
import * as S from './styled';
import { TaskItemModal } from './taskItemModal';
import { useState } from 'react';

interface TypeTask {
  _id: number;
  description: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  tasks: TypeTask[];
  selectTask: string;
}

export function TaskItem({ tasks, selectTask }: TaskItemProps) {
  const [openModalTaskId, setOpenModalTaskId] = useState<number | null>(null);

  const handleToggleModalTask = (taskId: number) => {
    if (openModalTaskId === taskId) {
      setOpenModalTaskId(null);
    } else {
      setOpenModalTaskId(taskId);
    }
  };

  let filteredTasks;

  if (selectTask === 'Feitas') {
    filteredTasks = tasks.filter(task => task.isCompleted === true);
  } else if (selectTask === 'A fazer') {
    filteredTasks = tasks.filter(task => task.isCompleted === false);
  } else {
    filteredTasks = tasks;
  }

  return (
    <>
      <S.Container>
        {filteredTasks.map(task => (
          <S.ContainerTask key={task._id}>
            <S.Task>
              <S.Checkbox type="checkbox" checked={task.isCompleted} />
              <S.Tarefa>{task.description}</S.Tarefa>
            </S.Task>
            <S.TaskBtnOption onClick={() => handleToggleModalTask(task._id)}>
              <DotsThreeVertical size={20} color="#9FA5C0" />
            </S.TaskBtnOption>

            {openModalTaskId === task._id && (
              <TaskItemModal taskId={task._id} />
            )}
          </S.ContainerTask>
        ))}
      </S.Container>
    </>
  );
}
