import { Sidebar } from '@/components/Sidebar/sidebar';
import * as S from './styled';
import { FilterTasks } from '@/components/FilterTasks/filterTasks';
import { useEffect, useState } from 'react';
import { Loadind } from '@/components/Loading/loading';

export function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  
  return (
    <>
      {loading ? (
        <Loadind />
      ) : (
        <>
          <S.ContainerHome>
            <Sidebar />

            <S.Main>
              <FilterTasks />
            </S.Main>
          </S.ContainerHome>
        </>
      )}
    </>
  );
}
