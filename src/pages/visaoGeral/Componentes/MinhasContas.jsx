import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import React, { useEffect, useState } from 'react';
import ModalWrapper from "./ModalWrapper";
import ContaContainer from './ContaContainer'; 
import { useNavigate } from "react-router-dom";
import api  from "../../../api";

const ContainerMinhasContas = styled.div`
display:flex;
height:50%;
width:100%;
border-radius:10px;
padding:22px;
flex-direction:column;
background-color:#FDFDFD;
fill: #FDFDFD;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin-bottom:10px;
    font-size:15px;

}
.titulo-icone img{
    margin-right:10px;

}
.categoriaSaldo{
    display:flex;
    justify-content: flex-end;
    width:80.5%;
    font-size:14px;
    font-weight:500;
}

.categoriaSaldo span{
    width:20%;
}

.containerBancoScroll{
    overflow:scroll;
    overflow-x:hidden;
    height:100%;
    width:100%;
}

.containerBancoScroll {
    overflow-y: auto;
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

.containerBanco{
    display:flex;
    max-height:200px;
    width:95%;
    flex-direction:column;
}



.containerBanco .containers{
    display:flex;
    height:3rem;
    width:100%;
    align-items:center;
    border-bottom: solid 1px rgba(119, 119, 119, 0.3);    
}

.containers:hover{
    background-color:rgb(214, 214, 214);
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
    height:25px;
    overflow:hidden;
}

.containerBanco .containers .nomeBanco{
    display:flex;
    height:70px;
    width:55%;
    align-items:flex-start;
    font-size:14px;
    justify-content:center;
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
    font-size:14px;

}

.localAdicionaConta{
    display:flex;
    justify-content:center;
    align-items:center;
    height:30%;
    width:100%;
    background-color:white;
}

.adicionaConta{
    display:flex;
    justify-content:center;
    background-color:#08632D;
    border-radius:10px;
    padding:7px 10px;
    color:white;
    font-size:10px;
    align-items:center;
    cursor:pointer;
    transition: ease 0.2s;
}

.adicionaConta:hover{
    opacity:0.8;
}

.adicionaConta svg{
    margin-right:5px;
}

.containers{
    cursor:pointer;
}
`

const NaoEncontrado = styled.div`
    margin: 10% 0 10% 30%;
`






function MinhasContas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contas, setContas] = useState([
    ]);
    const idUser = sessionStorage.getItem('id');

    const [novaConta, setNovaConta] = useState({
        banco: '',
        tipoConta: '',
        saldo: ''
    })
    
    const openModal = () => {
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };
    const navigate = useNavigate();




    const navigateClicked = (conta) => {
        console.log(conta);;
        const contaClicada = conta;
        navigate(`/conta/${contaClicada.id}`)
    };

    const handleSalvarConta = (novaConta) => {
        const saldoString = novaConta.saldo.toString();

        const saldoNumerico = parseFloat(saldoString.replace(/[^\d.-]/g, '')); // Remove caracteres não numéricos


        // Verifica se o saldo é um número válido
        if (!isNaN(saldoNumerico) && saldoNumerico >= 0) {
            novaConta.saldo = saldoNumerico;
            // Adiciona a nova conta ao estado
            novaConta.banco = capitalizeFirstLetter(novaConta.banco); // Capitalizar a primeira letra do banco
            setContas([...contas, novaConta]);
            setNovaConta({
                banco: '',
                tipoConta: '',
                saldo: ''
            });
            closeModal();
        } else {
            // Mostra uma mensagem de erro ou lida com o erro de outra forma
            console.error('Saldo inválido');
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovaConta({
            ...novaConta,
            [name]: value
        });
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        const fetchContas = async () => {
          try {
            const response = await api.get(`/contas/listar-contas/${idUser}`);
            setContas(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchContas();
      }, []);



        return (
            <>
                <ContainerMinhasContas>
                    <div className="titulo-icone">
                        <img src={Icon('contasIcon')} />
                        Minhas Contas
                    </div>

                    <div className="categoriaSaldo">
                        {contas.length > 0 ? <span>Saldo</span> : null}
                    </div>
                    <div className="containerBancoScroll">

                        <div className="containerBanco">
                            {contas.length > 0 ? contas.map((conta, index) => (
                                <ContaContainer key={index} nome={conta.nome} banco={conta.banco} tipoConta={conta.tipo} saldo={conta.saldo} onContainerClick={() => navigateClicked(conta)}
                                />
                            )) : <NaoEncontrado>Nenhuma conta cadastrada</NaoEncontrado>}
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
                        <ModalWrapper
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


                </ContainerMinhasContas >
            </>
        )
    }

export default MinhasContas;