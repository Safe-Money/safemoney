import Index from "../pages/Institucional/Index";
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Login/Cadastro";
import Geral from "../pages/visaoGeral/Geral";
import LancGeral from "../pages/Lancamentos/Funcoes/LancGeral";
import Objetivos from "../pages/Objetivos/Objetivos";
import Config from "../pages/visaoGeral/Config";
import Card from "../pages/Cartoes/Funcoes/CardGeral";
import NotFound from "../pages/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Rotas() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/visao-geral" element={<Geral/>} />
          <Route path="/lancamentos" element={<LancGeral/>} />
          <Route path="/objetivos" element={<Objetivos/>} />
          <Route path="/config" element={<Config/>} />
          <Route path="/cartoes" element={<Card/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;
