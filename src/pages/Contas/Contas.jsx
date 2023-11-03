import styled from "styled-components";
import Conta from "./Componentes/Conta"
import UltimosGastos from "./Componentes/UltimosGastos"
import Balanco from "./Componentes/Balanco"
import ContasAPagar from "./Componentes/ContasAPagar"
import SaldoProjetado from "./Componentes/SaldoProjetado"

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  width:86%;
  box-sizing: border-box;
  overflow-y:hidden;

  *{
    box-sizing: border-box;
  }
`;




const Social = styled.div`
display:flex;
width:100%;
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
    height:80%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
`;




function Contas() {
    return (
        
        <AllContainers>

            <Social>
                <div className="bloco1">
                    <Conta/>
                </div>
                <div className="bloco2">
                    <UltimosGastos/>
                    <Balanco/>
                    <ContasAPagar/>
                    <SaldoProjetado/>
                </div>

            </Social>
        </AllContainers>


    )
}

export default Contas;
