import styled from 'styled-components';
import { Imagem } from '../Galeria/Imagem';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DiologEstilizado = styled.dialog`
  position: fixed;
  top: 294px;
`

export const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          (
          <Overlay />
          <DiologEstilizado open={!!foto}>
            <Imagem foto={foto} expandida={true} />
            <form method="diolog">
              <button>OK</button>
            </form>
          </DiologEstilizado>
          )
        </>
      )}
    </>
  );
};
