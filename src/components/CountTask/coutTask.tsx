import * as S from './styled';

interface TypeTask {
  _id: number;
  description: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  tasks: TypeTask[];
}

export function CountTaks({ tasks }: TaskItemProps) {
  const TotalTask = tasks.length;

  const doneTaks = tasks.filter(task => task.isCompleted === true).length;

  return (
    <>
      <S.ContainerCountTask>
        <S.CountTotal>
          Total de tarefas:
          <S.CountTask>
            {doneTaks}/{TotalTask}
          </S.CountTask>
        </S.CountTotal>
      </S.ContainerCountTask>
    </>
  );
}
