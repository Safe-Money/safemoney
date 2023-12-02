import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";
import ContainerCartaoBanco from "./ContainerCartaoBanco";
import Cartoes from "../../visaoGeral/Componentes/CartaoCredito"
import CartaoContainer from "../../visaoGeral/Componentes/CartaoContainer";
import api  from "../../../api";
import React, { useEffect, useState } from 'react';

const ContainerContasAPagar = styled.div`
display:flex;
height:47%;
width:49.5%;
border-radius:10px;
padding:15px 10px 10px 30px;
background-color:#FDFDFD;
flex-direction:column;
margin:0 1% 0 0;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);


.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin-bottom:5%;
    font-size:15px;

}
.titulo-icone svg{
    margin-right:10px;

}

.conteudo-lista{
    display:flex;
    width:100%;
    height:90%;
    flex-direction:column;
}

.titulos-categoria{
    display:flex;
    width:93%;
    height:25px;
    font-size:12px;
    font-weight:700;
}

.titulos-categoria .Vencimento{
    display:flex;
    width:30%;
    justify-content:center;
    font-weight:500;
    font-size:14px;
}

.titulos-categoria .Fatura{
    display:flex;
    width:30%;
    justify-content:start;
    font-weight:500;
    font-size:14px;
}

.container-lista-scroll{
    display:flex;
    width:100%;
    height:100%;
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
    }
}

.titulos-categoria{
    display:flex;
    width:95%;
    height:25px;
    font-size:12px;
    font-weight:500;
    justify-content:flex-end;
}


.container-lista{
    display:flex;
    width:95%;
    height:40%;
    justify-content:center;
    align-items:center;
    font-size:12px;
    border-bottom: solid 1px #D4D4D4;
}

.container-lista .icone-lista{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.icone-lista img{
    border-radius:50%;
    width:20%;
}

.container-lista .valor-lista{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.container-lista .data-lista{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container-lista .conta-lista{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.containerBanco{
    display:flex;
    height:100%;
    width:95%;
    flex-direction:column;
}

.containerBanco .containers{
    display:flex;
    height:45px;
    width:100%;
    align-items:center;
    border-bottom: solid 1px rgba(119, 119, 119, 0.3);
}

.containerBanco .containers .icon{
    display:flex;
    height:70px;
    width:10%;
    align-items:center;
    border-radius:50%;
}

.containers .icon img{
    border-radius:50%;
    width:25px;
    height:35px;
    overflow:hidden;
}

.containerBanco .containers .nomeBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:start;
    justify-content:center;
    font-size:14px;
    flex-direction:column;
}


.containerBanco .containers .vencimentoBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:center;
    font-size:14px;
    justify-content:center;

}


.nomeBanco span{
    font-size: 10px;
    color:rgba(86, 86, 86, 1);
}


.containerBanco .containers .saldoBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:center;
    font-size:14px;

}


`


function ContasAPagar() {
    const [cartoes, setCartoes] = useState([
    ]);

    useEffect(() => {
        listarCartoes();
    }, []);

    const idUser = sessionStorage.getItem('id');

    function listarCartoes() {
        api
            .get(`/cartao-credito/listar-cartoes-conta/${idUser}`)
            .then((respostaObtida) => {
                console.log(respostaObtida);
                console.log(respostaObtida.status);
                console.log(respostaObtida.data);
                setCartoes(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    const cartoesRenderizadas = cartoes.map((cartao, index) => (
        <CartaoContainer 
          key={index} 
          nome={cartao.nome}
          origem={cartao.bancoVinculado} 
          valor={cartao.faturaValor} 
          bandeira={cartao.bandeira} 
          vencimento={cartao.vencimento} 
          
        />
      ));

    return (
        <>
            <ContainerContasAPagar>
                <div className="titulo-icone">
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="27" rx="8" fill="#2FED42" fill-opacity="0.3" />
                        <path d="M20.4767 21H8.61628C7.17209 21 6 19.8279 6 18.3837V6.52326C6 6.23721 6.23721 6 6.52326 6C6.8093 6 7.04651 6.23721 7.04651 6.52326V18.3837C7.04651 19.2488 7.75116 19.9535 8.61628 19.9535H20.4767C20.7628 19.9535 21 20.1907 21 20.4767C21 20.7628 20.7628 21 20.4767 21Z" fill="#08632D" />
                        <path d="M8.61591 17.5115C8.4973 17.5115 8.37172 17.4697 8.27404 17.3859C8.05777 17.1976 8.02986 16.8697 8.21823 16.6464L11.4206 12.9069C11.7694 12.5022 12.2717 12.258 12.8019 12.2371C13.3322 12.2231 13.8554 12.4185 14.2322 12.7952L14.895 13.458C15.0694 13.6325 15.2926 13.7162 15.5438 13.7162C15.788 13.7092 16.0112 13.5976 16.1717 13.4092L19.374 9.66967C19.5624 9.4534 19.8903 9.42549 20.1136 9.61386C20.3298 9.80223 20.3578 10.1301 20.1694 10.3534L16.9671 14.0929C16.6182 14.4976 16.1159 14.7418 15.5857 14.7627C15.0485 14.7766 14.5322 14.5813 14.1554 14.2045L13.4996 13.5418C13.3252 13.3673 13.095 13.2766 12.8508 13.2836C12.6066 13.2906 12.3833 13.4022 12.2229 13.5906L9.02056 17.3301C8.90893 17.4487 8.76242 17.5115 8.61591 17.5115Z" fill="#08632D" />
                    </svg>

                    Cartões da Conta
                </div>

                <div className="conteudo-lista">
                <div className="titulos-categoria">
                    <div className="Vencimento">
                        Vencimento
                    </div>
                    <div className="Fatura">
                        Fatura
                    </div>
                </div>
                    <div className="container-lista-scroll">
                        <div className="containerBanco">
                            {cartoesRenderizadas}
                        </div>


                    </div>

                </div>
            </ContainerContasAPagar>
        </>
    )
}



export default ContasAPagar;