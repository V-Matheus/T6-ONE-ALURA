import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);
  console.log(colaboradores);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(nome) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.nome !== nome),
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          time={time}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
    </div>
  );
}

export default App;
