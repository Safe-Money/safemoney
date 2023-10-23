import styled from "styled-components";
import MinhasContas from "./Componentes/MinhasContas";
import CartaoCredito from "./Componentes/CartaoCredito";
import AcessoRapido from "./Componentes/AcessoRapido";
import UltimosGastos from "./Componentes/UltimosGastos";
import Previsao from "./Componentes/Previsao";
import LateralHeader from "./Componentes/LateralHeader";
import "./../../index.css"

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  overflow-y:none;

  *{
    box-sizing: border-box;
  }
`;



const Social = styled.div`
display:flex;
width:95.6%;
height:100%;
padding:10px 20px;
justify-content:space-between;
background-color:#DBE7E0;


.bloco1{
    width:54%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.bloco2{
    width:44%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
`



function Geral() {
    return (

        <AllContainers className="geral">
            <LateralHeader selecionado="VisaoGeral"/>

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

            </Social>
        </AllContainers>


    )
}

export default Geral;
