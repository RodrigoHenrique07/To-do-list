import { useContext, useEffect, useState } from 'react';
import { UpdateTaskContext } from '@/context/contextUpdateTask';
import { DateAtual } from '../DateAtual/dateAtual';
import { CountTaks } from '../CountTask/coutTask';
import { TaskItem } from '../TasksItem/taskItem';
import { Loadind } from '../Loading/loading';
import { api } from '@/server/api';

import * as S from './styled';

export function FilterTasks() {
  const [activeButton, setActiveButton] = useState('Todas');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const { isUpdate } = useContext(UpdateTaskContext);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get('/tasks');

      setTasks(response.data);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [isUpdate]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      {loading ? (
        <Loadind />
      ) : (
        <>
          <S.ContainerFilter>
            <S.Title>Filtrar</S.Title>

            <S.FilterSelect>
              <S.FilterSelectItem>
                <S.FilterSelecButton
                  isActiveButton={activeButton === 'Todas'}
                  onClick={() => handleButtonClick('Todas')}
                >
                  Todas
                </S.FilterSelecButton>
              </S.FilterSelectItem>

              <S.FilterSelectItem>
                <S.FilterSelecButton
                  isActiveButton={activeButton === 'A fazer'}
                  onClick={() => handleButtonClick('A fazer')}
                >
                  A fazer
                </S.FilterSelecButton>
              </S.FilterSelectItem>

              <S.FilterSelectItem>
                <S.FilterSelecButton
                  isActiveButton={activeButton === 'Feitas'}
                  onClick={() => handleButtonClick('Feitas')}
                >
                  Feitas
                </S.FilterSelecButton>
              </S.FilterSelectItem>
            </S.FilterSelect>

            <S.TaskInfoBox>
              <DateAtual />
              <CountTaks tasks={tasks} />
            </S.TaskInfoBox>

            <TaskItem tasks={tasks} selectTask={activeButton} />
          </S.ContainerFilter>
        </>
      )}
    </>
  );
}
