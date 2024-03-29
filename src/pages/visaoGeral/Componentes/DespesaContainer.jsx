import React from "react";
import { Icon } from "../funcoes/icons";


function DespesaContainer(props) {

    function removerAcentos(str) {
        return str
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      }


    return (    
        <>
            <div className="container-lista-gastos">
                <span className="icone-lista">
                    <img src={Icon(removerAcentos(props.categoria))} />
                </span>
                <span className="descricao-lista">{props.nome}</span>
                <span className="valor-lista">{props.valor}</span>
                <span className="data-lista">{props.data}</span>
                <span className="parcelas-lista">{props.parcelaAtual}/{props.parcelas}</span>
                <span className="conta-lista">{props.conta != null ? props.conta : props.cartao}</span>
            </div>
        </>
    )

}

export default DespesaContainer;