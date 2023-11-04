import Index from "./pages/Institucional/Index"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Login/Cadastro";
import Config from "./pages/visaoGeral/Config";
import Contas from "./pages/Contas/Contas";
import LancGeral from "./pages/Lancamentos/Funcoes/LancGeral";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Painel from "./pages/Painel/Painel";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/visao-geral" element={<Painel/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
