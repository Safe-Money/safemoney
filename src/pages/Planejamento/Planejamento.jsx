import styled from "styled-components";
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import Card from "./Componentes/Cards"
import Tabela from "./Componentes/Tabela"

const AllContainers = styled.div`
  display: flex;
  margin: 0;
  height:100vh;
  box-sizing: border-box;
  overflow-y:hidden;

  *{
    box-sizing: border-box;
  }
`;

const Social = styled.div`
display:flex;
width:88%;
padding:10px 20px;
justify-content:space-between;
background-color:#DBE7E0;
flex-direction:column;


.bloco1{
    width:100%;
    height:20%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.bloco2{
    width:100%;
    height:85%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
`



function Planejamento() {

    return (
        <>
        <AllContainers>
        <LateralHeader selecionado="planejamentos" />
        <Social>
            <div className="bloco1">
                <Card></Card>
            </div>
            <div className="bloco2">
            <Tabela></Tabela>
            </div>

        </Social>
        </AllContainers>
        </>
    )
}

export default Planejamento;
