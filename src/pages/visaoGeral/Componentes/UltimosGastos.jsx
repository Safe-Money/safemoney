import styled from "styled-components";
import { Icon } from "../funcoes/icons";

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
}
.titulos-categoria .categoria{
    display:flex;
    width:10%;
    justify-content:center;
}
.titulos-categoria .descricao{
    display:flex;
    width:30%;
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



.container-lista{
    display:flex;
    width:95.5%;
    height:45px; 
    justify-content:center;
    align-items:center;
    font-size:13px;
    border-bottom: solid 1px rgba(119, 119, 119, 0.3);
}

.container-lista:hover{
    background-color:rgb(214, 214, 214);
}

.container-lista .icone-lista{
    width:10%;
    display:flex;
    align-items:center;
}
.icone-lista img{
    width:50%;
    margin-left:14px;
}
.container-lista .descricao-lista{
    width:30%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
}
.container-lista .valor-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
}
.container-lista .data-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
}
.container-lista .parcelas-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
}
.container-lista .conta-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
}
`


function UltimosGastos() {

    return (
        <>
            <ContainerUltimosGastos>
                {/* {ouvido.map((conta) =>(
                    <div>{conta.nome}</div>
                ))} */}

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
                    <div className="titulos-categoria">
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

                    </div>
                    <div className="container-lista-scroll">


                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('lazerIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('comidaIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('comidaIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('medicoIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('lazerIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('lazerIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                        <div className="container-lista">
                            <span className="icone-lista">
                                <img src={Icon('lazerIcon')} />
                            </span>
                            <span className="descricao-lista">Carrefour Express</span>
                            <span className="valor-lista">R$50,00</span>
                            <span className="data-lista">22/08</span>
                            <span className="parcelas-lista">1/2</span>
                            <span className="conta-lista">Itaú</span>
                        </div>
                    </div>

                </div>
            </ContainerUltimosGastos>
        </>
    )
}



export default UltimosGastos;