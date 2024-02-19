import styled from "styled-components";
import DespesaContainer from "./DespesaContainer";
import React, { useEffect, useState } from 'react';
import api from "../../../api";

const ContainerUltimosGastos = styled.div`
display:flex;
height:37%;
width:100%;
border-radius:10px;
padding:10px 10px 5px 20px;
background-color:#FDFDFD;
flex-direction:column;
fill: #FDFDFD;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

*{
    box-sizing:border-box;
}

.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin: 5px 0;
    font-size:15px;
}

.titulo-icone svg{
    margin-right:10px;

}

.conteudo-lista{
    display:flex;
    width:98%;
    height:79%;
    flex-direction:column;
    margin-left:1%;
    flex-shrink: 0;
    margin-top:1%;
}

.titulos-categoria{
    display:flex;
    width:95%;
    height:15%;
    font-size:12px;
    font-weight:500;
    justify-content: space-evenly;
}
.titulos-categoria .categoria{
    display:flex;
    width:10%;
    justify-content:center;
}
.titulos-categoria .descricao{
    display:flex;
    width:20%;
    justify-content:center;
}
.titulos-categoria .valor{
    display:flex;
    width:20%;
    justify-content:center;

}
.titulos-categoria .data{
    display:flex;
    width:10%;
    justify-content:center;

}
.titulos-categoria .parcelas{
    display:flex;
    width:20%;
    justify-content:center;

}
.titulos-categoria .conta{
    display:flex;
    width:10%;
    justify-content:center;

}

.container-lista-scroll{
    // display:flex;
    width:100%;
    height:85%;
    overflow-x:hidden;
    flex-direction:column;

    overflow-y: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #08632D #FDFDFD; /* Para navegadores Firefox */

    &::-webkit-scrollbar {
        width: 7px; /* Largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
        background-color: #08632D; /* Cor do polegar da barra de rolagem */
        border-radius: 5px; /* Raio da borda do polegar da barra de rolagem */
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(228, 228, 228, 1);
        border-radius:5px; /* Cor da trilha da barra de rolagem */
        margin-bottom:10px;
    }
}



.container-lista-gastos{
    display:flex;
    width:95%;
    height:25%;
    justify-content:space-evenly;
    align-items:center;
    font-size:15px;
    border-bottom: solid 1px #D4D4D4;
}

.container-lista:hover{
    background-color:rgb(214, 214, 214);
}

.container-lista-gastos .icone-lista{
    width:10%;
    display:flex;
    align-items:center;
}
.icone-lista img{
    width:50%;
    margin-left:14px;
}
.container-lista-gastos .descricao-lista{
    width:20%;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista-gastos .valor-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista-gastos .data-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista-gastos .parcelas-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista-gastos .conta-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align: center;
}
`


function UltimosGastos() {
    const idUser = sessionStorage.getItem('id');
    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        listarGastos();
    }, []);

    function listarGastos() {
        api
            .get(`transacoes/listar-gastos/${idUser}`)
            .then((respostaObtida) => {
                console.log("Últimos gastos", respostaObtida.data);
                setGastos(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    let dados = <p>Nenhuma transação realizada.</p>;

    if (gastos.length > 0) {
        dados = gastos?.map((gasto) => (
            <DespesaContainer
                key={gasto.id}
                nome={gasto.nome}
                valor={gasto.valor}
                data={gasto.data}
                parcelas={gasto.conta == null ? gasto.parcelas : 0}
                parcelaAtual={gasto.conta == null ? gasto.parcelaAtual : 0}
                cartao={gasto.conta == null ? gasto.fatura.fkCartao.nome : gasto.conta.banco}
                id={gasto.id}
                categoria={gasto.categoria.nome}
            />
        ))

    }


    return (
        <>
            <ContainerUltimosGastos>
                <div className="titulo-icone">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="8" fill="#2FED42" fillOpacity="0.3" />
                        <path d="M6 7H14" stroke="#08632D" strokeLinecap="round" />
                        <path d="M6 10H14" stroke="#08632D" strokeLinecap="round" />
                        <path d="M6 13H14" stroke="#08632D" strokeLinecap="round" />
                    </svg>
                    Últimos gastos
                </div>

                <div className="conteudo-lista">
                    {dados > 0 && <div className="titulos-categoria">
                        <div className="categoria">
                            Categoria
                        </div>
                        <div className="descricao">
                            Descrição
                        </div>
                        <div className="valor">
                            Valor
                        </div>
                        <div className="data">
                            Data
                        </div>
                        <div className="parcelas">
                            Parcelas
                        </div>
                        <div className="conta">
                            Conta
                        </div>

                    </div>}
                    <div className="container-lista-scroll">
                        
                        {dados}
                        
                    </div>

                </div>
            </ContainerUltimosGastos>
        </>
    )
}


export default UltimosGastos;