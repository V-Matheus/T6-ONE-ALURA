import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './paginas/Inicio';
import { SobreMim } from './paginas/SobreMim';
import { Menu } from './components/Menu';
import { Rodape } from './components/Rodape';
import { PadginaPadrao } from './components/PaginaPadrao';
import { Post } from './paginas/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PadginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path='posts/:id' element={<Post />}/>
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
