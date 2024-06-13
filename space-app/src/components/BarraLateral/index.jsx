import styled from 'styled-components';
import { ItemNavegacao } from '../ItemNavegacao';

const ListaEstilizada = styled.ul`
  width: 212px;
`;

export const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo
          >
            Início
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
          >
            Mais vistos
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};
