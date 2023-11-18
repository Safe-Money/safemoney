import styled from "styled-components";
import { Icon } from "../funcoes/icons";

const ContainerAcessoRapido = styled.div`
display:flex;
height:32%;
width:100%;
border-radius:10px;
padding:20px 10px 20px 10px;
background-color:#FDFDFD;
flex-direction:column;

.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin-bottom:10px;

}
.titulo-icone svg{
    margin-left:10px;
    margin-right:10px;

}

.area-conteudo{
    display:flex;
    height:90%;
}

.area-conteudo .conteudoBloco1{
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    justify-content:space-between;
}

.conteudoBloco1 .box-tree{
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    height:40%;
}

.conteudoBloco1 .box-tree .box{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: #FDFDFD;
    padding:3%;
    width:30%;
    height:100%;
    font-size:10px;
}

.box:hover{
    transform:scale(1.2);
}

.box img{
    width:40%;
        margin-bottom:5px;

}

.number_saldo{
    color:rgba(2, 102, 44, 1);
    font-weight:600;
}
.number_despesa{
    color:rgba(165, 0, 0, 1);
    font-weight:600;
}
.number_gasto{
    color:rgba(57, 41, 156, 1);
    font-weight:600;
}

.tituloResumo{
    font-weight:700;
    margin-left:7%;
    margin-top:5%;
    bottom:0;
}

.area-conteudo .conteudoBloco2{
    display:flex;
    width:30%;
    justify-content:end;
}

.conteudoBloco2 .container-lista-notificacao{
    display:flex;
    height:100%;
    width:90%;
    flex-direction:column;
    align-items:center;
    border-radius: 20px;
    background: #FDFDFD;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
    padding:13px;
}

.container-lista-notificacao icone{

}

.container-lista-notificacao .tituloLista{
    font-size: 11px;
    font-weight:500;
    margin-bottom:10px;
    
}
.container-lista-notificacao .listaNotificacao{
    display:flex;
    flex-direction:column;
    overflow:auto;

}

.listaNotificacao{
    overflow-y: auto;
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

.listaNotificacao .containers-lista{
    display:flex;
    font-size: 9px;
    height:30px;
    line-height:normal;
    font-weight: 400;
    border-bottom: solid 1px rgba(159, 159, 159, 1);
    margin-right:10px;
    margin-bottom:7px;
}


`



function AcessoRapido() {
    return (
        <>
            <ContainerAcessoRapido>
                <div className="titulo-icone">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="17.1429" rx="8" fill="#2FED42" fill-opacity="0.3" />
                        <path d="M9.90314 11.9496C9.80712 11.9496 9.71111 11.9139 9.6353 11.8375C9.48875 11.6897 9.48875 11.4451 9.6353 11.2973L12.4349 8.47415L9.6353 5.65101C9.48875 5.50322 9.48875 5.25862 9.6353 5.11084C9.78185 4.96305 10.0244 4.96305 10.171 5.11084L13.2384 8.20407C13.385 8.35185 13.385 8.59645 13.2384 8.74424L10.171 11.8375C10.0952 11.9139 9.99915 11.9496 9.90314 11.9496Z" fill="#08632D" />
                        <path d="M12.884 8.85627H4.37901C4.17182 8.85627 4 8.683 4 8.47407C4 8.26514 4.17182 8.09187 4.37901 8.09187H12.884C13.0912 8.09187 13.263 8.26514 13.263 8.47407C13.263 8.683 13.0912 8.85627 12.884 8.85627Z" fill="#08632D" />
                    </svg>
                    Acesso Rápido
                </div>
                <div className="area-conteudo">
                    <div className="conteudoBloco1">
                        <div className="box-tree">
                            <span className="box">
                                <img src={Icon('negativoIcon')} />
                                <span>DESPESAS</span>
                            </span>

                            <span className="box">
                                <img src={Icon('positivoIcon')} />
                                <span>RECEITA</span>
                            </span>

                            <span className="box">
                                <img src={Icon('transferenciaIcon')} />
                                <span>TRANSFERENCIA</span>
                            </span>
                        </div>

                        <div className="tituloResumo">
                            Resumo
                        </div>

                        <div className="box-tree">
                            <span className="box">
                                <span className="number_saldo">R$ 20.000,00</span>
                                <span>Saldo Total</span>
                            </span>

                            <span className="box">
                                <span className="number_despesa">R$ 5.000,00</span>
                                <span>Despesas totais</span>
                            </span>

                            <span className="box">
                                <span className="number_gasto">R$ 10.000,00</span>
                                <span>Gasto cartões</span>
                            </span>
                        </div>

                    </div>
                    <div className="conteudoBloco2">
                        <div className="container-lista-notificacao">
                            <div className="icone">
                                <img src={Icon('notificacaoIcon')} />

                            </div>
                            <div className="tituloLista">
                                Notificações
                            </div>
                            <div className="listaNotificacao">
                                <div className="containers-lista">1 - Fatura fechou</div>
                                <div className="containers-lista">2 - Fatura fechou</div>
                                <div className="containers-lista">3 - Fatura fechou</div>
                                <div className="containers-lista">4 - Fatura fechou</div>
                                <div className="containers-lista">5 - Fatura fechou</div>
                                <div className="containers-lista">6 - Fatura fechou</div>
                                <div className="containers-lista">7 - Fatura fechou</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerAcessoRapido>
        </>
    )
}



export default AcessoRapido;