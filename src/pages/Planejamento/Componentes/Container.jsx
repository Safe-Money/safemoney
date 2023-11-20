import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { Icon } from "../../visaoGeral/funcoes/icons";
import Tabela from "./Tabela"




const createContainer = ({ id, categoria, valor, data, progresso, excluirConta,sweetEditar }) => {
    const [containerIds, setContainerIds] = useState([]);
    progresso = ((parseFloat(data.replace('R$', '').replace(',', '.')) / parseFloat(valor.replace('R$', '').replace(',', '.'))) * 100).toFixed(2) + "%";


    let teste = progresso = parseFloat(progresso.replace('R$', '').replace('%', ''));



    useEffect(() => {
        const newContainerId = `container-lista-${containerIds.length + 1}`;
        setContainerIds((prevIds) => [...prevIds, newContainerId]);
    }, []); // Run this effect only once, similar to componentDidMount

    console.log(progresso);
    const progressoStyle = {
    };

    if(isNaN(progresso) || !isFinite(progresso)){
        progresso = 0;
        teste = 0.1;
    }

    if(progresso > 100){
        teste= 100;
    }


    const progressoStyle2 = {
        width:`${teste}%`,
        backgroundColor: teste > 100 ? 'red' : 'rgba(152, 211, 137, 1)',

    };


    return (
        <>
            <div className="container-lista" id={`container-lista-${id}`}>
        <span className="icone-lista">
            <img src={Icon(`${categoria}Icon`)}  />
        </span>
        <span className="valor-lista">{valor}</span>
        <span className="data-lista">{data}</span>
        <span className="conta-lista">
            <span className="barra" >
                <span className="progressoBarra" style={progressoStyle2}>
                    
                </span>
            </span>
            {progresso}
        </span>
        <span className="acoes-lista">
        <img src={Icon('editar1Icon')} alt="Editar" onClick={() => sweetEditar({ categoria, valor, data, progresso })} />
            <img src={Icon('botaoApagarIcon')} onClick={() => excluirConta('someContainerId')}/>
        </span>
        </div> 
    </>
    );

};



export default createContainer;