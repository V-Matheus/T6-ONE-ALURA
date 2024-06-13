import { styled } from 'styled-components';
import EstilosGlobais from './components/EstilosGlobais';
import { Cabecalho } from './components/Cabecalho';
import { BarraLateral } from './components/BarraLateral';

const FundoGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
    </FundoGradient>
  );
}

export default App;
