import { useState } from "react";
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import Geral from "../visaoGeral/Geral";
import LancGeral from "../Lancamentos/Funcoes/LancGeral";
import styled from "styled-components";
import Config from "../visaoGeral/Config";

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  overflow-y:none;

  *{
    box-sizing: border-box;
  }
`;

function Painel() {
  const [selecionado, setSelecionado] = useState("geral");
  
  return (
    <>
      <AllContainers>
        <LateralHeader selecionado={selecionado} setSelecionado={setSelecionado}/>

        {selecionado === "geral" && <Geral />}
        {selecionado === "lancamentos" && <LancGeral />}
        {selecionado === "config" && <Config />}


      </AllContainers>
    </>
  )

}

export default Painel;