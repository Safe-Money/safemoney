import { useState } from "react";
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import Geral from "../visaoGeral/Geral";
import LancGeral from "../Lancamentos/Funcoes/LancGeral";
import styled from "styled-components";
import Config from "../visaoGeral/Config";
import Objetivos from "../Objetivos/Objetivos";

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
        {selecionado === "objetivos" && <Objetivos data="10/10/2023" saldo="10.000.000"/>}


      </AllContainers>
    </>
  )

}

export default Painel;