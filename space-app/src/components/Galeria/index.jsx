import styled from 'styled-components';
import { Titulo } from '../Titulo';
import { Populares } from './Populares';
import { Tags } from './Tags';

const GaleriaContainer = styled.div`
  display: flex;
`

const SessaoFluida = styled.section`
  flex-grow: 1;
`

export const Galeria = () => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFluida>
          <Titulo>Galeria</Titulo>
        </SessaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
