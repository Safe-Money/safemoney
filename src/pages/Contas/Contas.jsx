import styled from "styled-components";
import Conta from "./Componentes/Conta"
import UltimosGastos from "./Componentes/UltimosGastos"
import Balanco from "./Componentes/Balanco"
import SaldoProjetado from "./Componentes/SaldoProjetado"
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api";
import ContasAPagar from "./Componentes/ContasAPagar";

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  width:100%;
  box-sizing: border-box;
  overflow-y:hidden;
  background-color:#DBE7E0;

  *{
    box-sizing: border-box;
  }
`;

const Social = styled.div`
display:flex;
width:86%;
padding:10px 20px;
justify-content:space-between;
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
    const {id} = useParams();
    const [conta, setConta] = useState({});
    const [saldoConta, setSaldoConta ]= useState(0);

    useEffect(() => {
        api.get(`/contas/${id}`).
        then((response) => {
            const saldoParaReal = parseFloat(response.data.saldo)
            .toLocaleString('pt-br',
            {style: 'currency', currency: 'BRL'});
   
            setConta(response.data);
            setSaldoConta(saldoParaReal);
        }).catch((error) => {
            console.log(error);
        }
        )
    }, []);


    const [dados, setDados] = useState([]);

    useEffect(() => {
        listarInfoConta();
    }, []);

    function listarInfoConta() {
        api.get(`contas/info-conta/${id}`)
            .then((respostaObtida) => {
                console.log(respostaObtida.data);
                setDados(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    return (

        <AllContainers>
            <LateralHeader selecionado="geral" />

            <Social>
                <div className="bloco1">
                    <Conta conta={conta} saldo={saldoConta} info={dados}/>
                </div>
                <div className="bloco2">
                    <UltimosGastos />
                    <Balanco />
                    <ContasAPagar />
                    <SaldoProjetado />
                </div>

            </Social>
        </AllContainers>


    )
}

export default Contas;
