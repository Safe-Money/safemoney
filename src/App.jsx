import Index from "./pages/Institucional/Index"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Login/Cadastro";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
