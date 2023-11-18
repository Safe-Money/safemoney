import styled from "styled-components";
import { Icon } from "../funcoes/icons";

const ContainerUltimosGastos = styled.div`
display:flex;
max-height:28%;
width:100%;
border-radius:10px;
padding:10px;
background-color:#FDFDFD;
flex-direction:column;

.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin: 5px 0;

}
.titulo-icone svg{
    margin-left:10px;
    margin-right:10px;

}

.conteudo-lista{
    display:flex;
    width:100%;
    height:95%;
    flex-direction:column;
    margin-top:10px;    
}

.titulos-categoria{
    display:flex;
    width:93%;
    height:25px;
    font-size:12px;
    font-weight:500;
}
.titulos-categoria .categoria{
    display:flex;
    width:20%;
    justify-content:center;
}
.titulos-categoria .descricao{
    display:flex;
    width:25%;
    justify-content:center;
}
.titulos-categoria .valor{
    display:flex;
    width:15%;
    justify-content:center;

}
.titulos-categoria .data{
    display:flex;
    width:15%;
    justify-content:center;

}
.titulos-categoria .parcelas{
    display:flex;
    width:10%;
    justify-content:center;

}
.titulos-categoria .conta{
    display:flex;
    width:20%;
    justify-content:center;

}
.container-lista-scroll{
    display:flex;
    width:100%;
    height:69%;
    overflow-x:hidden;
    flex-direction:column;

    overflow-y: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #08632D #FDFDFD; /* Para navegadores Firefox */
    &::-webkit-scrollbar {
        width: 10px; /* Largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
        background-color: #08632D; /* Cor do polegar da barra de rolagem */
        border-radius: 5px; /* Raio da borda do polegar da barra de rolagem */
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(228, 228, 228, 1);
        border-radius:5px; /* Cor da trilha da barra de rolagem */
    }
}



.container-lista{
    display:flex;
    width:95%;
    height:40%;
    justify-content:center;
    align-items:center;
    font-size:13px;
    border-bottom: solid 1px rgba(119, 119, 119, 1);
}

.container-lista .icone-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.icone-lista img{
    height:100px;
    width:40%;
}
.container-lista .descricao-lista{
    width:15%;
    margin-left:4%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista .valor-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista .data-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista .parcelas-lista{
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista .conta-lista{
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
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
                    </div>

                </div>
            </ContainerUltimosGastos>
        </>
    )
}



export default UltimosGastos;