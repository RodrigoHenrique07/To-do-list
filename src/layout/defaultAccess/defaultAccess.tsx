import { Outlet } from 'react-router-dom';
import { ContainerAccessDefault } from '../styled';

export function DefaultAccess() {
  return (
    <>
      <ContainerAccessDefault>
        <Outlet />
      </ContainerAccessDefault>
    </>
  );
}
