import styled from "styled-components";
import MinhasContas from "./Componentes/MinhasContas";
import CartaoCredito from "./Componentes/CartaoCredito";
import AcessoRapido from "./Componentes/AcessoRapido";
import UltimosGastos from "./Componentes/UltimosGastos";
import Previsao from "./Componentes/Previsao";
import LateralHeader from "./Componentes/LateralHeader";
import FloatingButton from  '../Cartoes/Components/FloatingButton'; 

const AllContainers = styled.div`
  display: flex;
  margin: 0;
  height:100vh;
  box-sizing: border-box;
  overflow-y:hidden;
  background-color:#DBE7E0;

  *{
    box-sizing: border-box;
  }
`;



const Social = styled.div`
display:flex;
width:88%;
padding:10px 10px;
justify-content:space-between;


.bloco1{
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.bloco2{
    width:49%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
`



function Geral() {
    return (

        <AllContainers>
            <LateralHeader selecionado="geral"/>

            <Social>
                <div className="bloco1">
                    <MinhasContas>

                    </MinhasContas>
                    <CartaoCredito>

                    </CartaoCredito>

                </div>
                <div className="bloco2">
                    <AcessoRapido></AcessoRapido>
                    <UltimosGastos></UltimosGastos>
                    <Previsao></Previsao>

                </div>

             <FloatingButton/>   
            </Social>
        </AllContainers>


    )
}

export default Geral;
