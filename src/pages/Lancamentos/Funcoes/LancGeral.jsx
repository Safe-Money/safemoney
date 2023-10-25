import styled from "styled-components";
import LateralHeader from "../../visaoGeral/Componentes/LateralHeader";
import ContainerGeral from "../Components/Container";
const AllContainers = styled.div`
  display: flex;
  margin: 0;
  height:100vh;
  box-sizing: border-box;
  overflow-y:hidden;
  background-color: #DBE7E0;

  *{
    box-sizing: border-box;
    
  }
`;




function LancGeral() {
    return (

        <AllContainers>
            <LateralHeader selecionado='Lancamentos'/>
            <ContainerGeral></ContainerGeral>
         
        </AllContainers>


    )
}

export default LancGeral;
