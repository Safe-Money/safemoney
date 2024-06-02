import Index from "../pages/Institucional/Index";
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Login/Cadastro";
import Home from "../pages/visaoGeral/Home.jsx";
import LancGeral from "../pages/Lancamentos/Funcoes/LancGeral";
import Objetivos from "../pages/Objetivos/Objetivos";
import Planejamento from "../pages/Planejamento/Planejamento";
import Config from "../pages/visaoGeral/Config";
import Card from "../pages/Cartoes/Funcoes/CardGeral.jsx";
import Contas from "../pages/Contas/Contas.jsx";
import Cartoes from "../pages/Cartoes/Funcoes/CardGeral.jsx";
import Pagamento from "../pages/Pagamento/Pagamento.jsx";
import Lgpd from "../pages/Login/Lgpd.jsx";

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
          <Route path="/home/" element={<Home/>} />
          <Route path="/lancamentos" element={<LancGeral/>} />
          <Route path="/planejamentos" element={<Planejamento/>} />
          <Route path="/objetivos" element={<Objetivos/>} />
          <Route path="/config" element={<Config/>} />
          <Route path="/conta/:id" element={<Contas/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/cartoes" element={<Cartoes/>} />
          <Route path="/pagamento" element={<Pagamento/>} />
          <Route path="/lgpd" element={<Lgpd/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Rotas;