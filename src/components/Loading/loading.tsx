import { PuffLoader } from 'react-spinners';
import { OverlayLoadind } from './styled';

export function Loadind() {
  return (
    <>
      <OverlayLoadind>
        <PuffLoader color="#36d7b7" />
      </OverlayLoadind>
    </>
  );
}
