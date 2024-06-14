import styled from 'styled-components';
import { Titulo } from '../Titulo';
import { Populares } from './Populares';
import { Tags } from './Tags';
import { Imagem } from './Imagem';

const GaleriaContainer = styled.div`
  display: flex;
`;

const SessaoFluida = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFluida>
          <Titulo>Galeria</Titulo>
          <div>
            {fotos.map((foto) => (
              <Imagem aoZoomSolicitado={aoFotoSelecionada} key={foto.id} foto={foto}>
                {foto.titulo}
              </Imagem>
            ))}
          </div>
        </SessaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
