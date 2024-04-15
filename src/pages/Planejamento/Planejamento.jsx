import styled from "styled-components";
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import Card from "./Componentes/Cards"
import Tabela from "./Componentes/Tabela"
import "../../assets/css/pages/planejamento.css"


function Planejamento() {

    return (
        <>
            <div className="geral-planejamento">
                <LateralHeader selecionado="planejamentos" />
                <div className="container">
                    <div className="bloco1">
                        <Card></Card>
                    </div>
                    <div className="bloco2">
                        <Tabela></Tabela>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Planejamento;
