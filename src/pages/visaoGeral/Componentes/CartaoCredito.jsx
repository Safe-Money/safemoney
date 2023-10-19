import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import React, { useState } from 'react';
import ModalCartao from "./ModalCartao";
import CartaoContainer from "./CartaoContainer";

const ContainerCartaoCredito = styled.div`
display:flex;
height:47%;
width:100%;
border-radius:10px;
padding:22px;
flex-direction:column;
background-color:#FDFDFD;

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

.categoriaSaldo{
    display:flex;
    justify-content: flex-end;
    width:80.5%;
}
.categoriaSaldo span{
    width:30%;
}


.containerBancoScroll{
    overflow:scroll;
    overflow-x:hidden;
    height:70%;
    width:100%;
}

.containerBancoScroll {
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

.containerBanco{
    display:flex;
    height:100%;
    width:83%;
    flex-direction:column;
}



.containerBanco .containers{
    display:flex;
    height:50px;
    width:100%;
    align-items:center;
    border-bottom: solid 1px #777;
    

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
    width:35px;
    height:35px;
    overflow:hidden;
}

.containerBanco .containers .nomeBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:center;
    font-size:20px

}
.containerBanco .containers .vencimentoBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:center;
    font-size:20px;
    justify-content:center;

}
.containerBanco .containers .nomeBanco{
    display:flex;
    height:70px;
    width:30%;
    align-items:start;
    justify-content:center;
    font-size:20px;
    flex-direction:column;

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

}

.localAdicionaConta{
    display:flex;
    justify-content:center;
    align-items:center;
    height:200px;
    width:100%;
    background-color:white;
}

.adicionaConta{
    display:flex;
    justify-content:center;
    background-color:#08632D;
    border-radius:10px;
    padding:10px;
    color:white;
    font-size:14px;
    align-items:center;
    cursor:pointer;
}

.adicionaConta svg{
    margin-right:5px;
}


.titulos-categoria{
    display:flex;
    width:83%;
    height:25px;
    font-size:12px;
    font-weight:500;
    justify-content:flex-end;
}

.titulos-categoria .Vencimento{
    display:flex;
    width:30%;
    justify-content:center;

}

.titulos-categoria .Fatura{
    display:flex;
    width:30%;
    justify-content:start;
}



`

function CartaoCredito() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contas, setContas] = useState([]);
    const [novaConta, setNovaConta] = useState({
        valor: '',
        categoria: '',
        origem: ''
    })
    const openModal = () => {
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSalvarConta = (novaConta) => {
        novaConta.saldo = parseFloat(novaConta.saldo);
        setContas([...contas, novaConta]);
        setNovaConta({
            valor: '',
            categoria: '',
            origem: ''
        });
        closeModal();
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovaConta({
            ...novaConta,
            [name]: value
        });
    };

    const contasRenderizadas = contas.map((conta, index) => (
        <CartaoContainer key={index} valor={conta.valor} categoria={conta.categoria} origem={conta.origem} />
    ));

    return (
        <>

            <ContainerCartaoCredito>
                <div className="titulo-icone">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="20" rx="8" fill="#2FED42" fill-opacity="0.3" />
                        <path d="M12.2704 6.62195H7.07883C6.92485 6.62195 6.78186 6.62745 6.64987 6.63295C5.34647 6.70994 5 7.1884 5 8.6733V8.99227C5 9.29475 5.24748 9.54223 5.54996 9.54223H13.7993C14.1018 9.54223 14.3493 9.29475 14.3493 8.99227V8.6733C14.3493 7.03442 13.9313 6.62195 12.2704 6.62195Z" fill="#08632D" />
                        <path d="M5.54996 10.3664C5.24748 10.3664 5 10.6139 5 10.9164V12.5167C5 14.1556 5.41797 14.5681 7.07883 14.5681H12.2704C13.9038 14.5681 14.3328 14.1721 14.3493 12.6047V10.9164C14.3493 10.6139 14.1018 10.3664 13.7993 10.3664H5.54996ZM7.72778 13.2262H6.78736C6.56188 13.2262 6.37489 13.0392 6.37489 12.8137C6.37489 12.5882 6.56188 12.4012 6.78736 12.4012H7.73328C7.95876 12.4012 8.14575 12.5882 8.14575 12.8137C8.14575 13.0392 7.95876 13.2262 7.72778 13.2262ZM10.802 13.2262H8.91019C8.68471 13.2262 8.49772 13.0392 8.49772 12.8137C8.49772 12.5882 8.68471 12.4012 8.91019 12.4012H10.802C11.0275 12.4012 11.2145 12.5882 11.2145 12.8137C11.2145 13.0392 11.033 13.2262 10.802 13.2262Z" fill="#08632D" />
                        <path d="M15.9998 10.3511V7.4693C15.9998 5.74794 15.0153 5 13.5305 5H8.61933C8.20136 5 7.82739 5.0605 7.49742 5.18699C7.23894 5.28048 7.00796 5.41797 6.82097 5.59945C6.72198 5.69294 6.79897 5.84693 6.94196 5.84693H12.92C14.1574 5.84693 15.1583 6.84785 15.1583 8.08525V12.0285C15.1583 12.1659 15.3068 12.2429 15.4058 12.144C15.7853 11.7425 15.9998 11.154 15.9998 10.3511Z" fill="#08632D" />
                    </svg>
                    Cartão de Crédito
                </div>
                <div className="titulos-categoria">
                    <div className="Vencimento">
                        Vencimento
                    </div>
                    <div className="Fatura">
                        Fatura
                    </div>
                </div>
                <div className="containerBancoScroll">

                    <div className="containerBanco">
                    {contasRenderizadas}

                        <div className="containers">
                            <div className="icon">
                                <img src={Icon('visaIcon')} />

                            </div>
                            <div className="nomeBanco">
                                Cartão-Brad
                            </div>
                            <div className="vencimentoBanco">
                                01/10
                            </div>
                            <div className="saldoBanco">
                                R$ 1.200,00
                            </div>
                        </div>


                        <div className="containers">
                            <div className="icon">
                                <img src={Icon('masterIcon')} />
                            </div>
                            <div className="nomeBanco">
                                Cartão-Itau
                            </div>
                            <div className="vencimentoBanco">
                                01/10
                            </div>
                            <div className="saldoBanco">
                                R$ 5.000,00
                            </div>
                        </div>

                        <div className="containers">
                            <div className="icon">
                                <img src={Icon('eloIcon')} />
                            </div>
                            <div className="nomeBanco">
                                Cartão-Sant
                            </div>
                            <div className="vencimentoBanco">
                                01/10
                            </div>
                            <div className="saldoBanco">
                                R$ 5.000,00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="localAdicionaConta">
                    <div className="adicionaConta" onClick={openModal}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.125 10H12.8758" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 13.3754V6.62463" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.96846 18.4385H12.0315C16.2508 18.4385 17.9385 16.7508 17.9385 12.5315V7.46846C17.9385 3.24922 16.2508 1.56152 12.0315 1.56152H6.96846C2.74922 1.56152 1.06152 3.24922 1.06152 7.46846V12.5315C1.06152 16.7508 2.74922 18.4385 6.96846 18.4385Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Nova conta
                    </div>
                    <ModalCartao
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onSave={(data) => {
                            handleSalvarConta(data);
                            closeModal();
                        }}
                        formData={novaConta}
                        onChange={handleInputChange}
                    />
                </div>


            </ContainerCartaoCredito >
        </>
    )
}

export default CartaoCredito;


// const ContainerCartaoCredito = styled.div`
// display:flex;
// height:47%;
// width:100%;
// border:solid 1px green;
// border-radius:10px;

// `

