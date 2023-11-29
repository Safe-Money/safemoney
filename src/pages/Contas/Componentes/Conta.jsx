import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import ModalEditar from "./ModalEditar";
import { useState } from "react";



const ContainerConta = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;
background-color:white;
border-radius:10px;
padding:1% 3%;
flex-direction:column;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

.titulo-removerConta {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 30%;
    width: 100%;
    font-size:18px;
    justify-content:space-between;

  }
  
.titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 85%;
    font-size:18px;

  }

  .titulo-icone img {
    margin-right: 10px;
    width:3%;
  }

  .removerConta{
    display:flex;
    justify-content:center;
    align-items:end;
    width: 11%;
    margin-right: 20px;
    font-size: 10px;
    padding: 10px;
    border-radius:10px;
    background-color:rgba(208, 17, 43, 1);
    color:rgba(253, 253, 253, 1);
    cursor:pointer;

  }

  .removerConta:hover{
    opacity:0.8;
    transition:0.3s ease;
    }

  .removerConta svg{
    margin-right:10px;
    padding: 0 0 1px 0;
  }
`

const Conteudo = styled.div`
height:70%;
width:100%;
display:flex;
`

const TextoNumero = styled.div`
display:flex;
width:20%;
height:100%;
flex-direction:column;
justify-content:space-between;
font-size:16px;

.numeros{
    font-weight:700;
}

.texto{
    margin-top:7%;
    font-weight:500;
}
`

const EditarConta = styled.div`
display:flex;
justify-content:center;
align-items:end;
width: 10%;
font-size: 10px;
padding: 10px;
border-radius:10px;
background-color: #DAA839;
color:white;
cursor:pointer;

&:hover{
    opacity:0.8;
    transition:0.3s ease;
}
`

function Conta(props) {
    const contaAtual = props.conta
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigate = useNavigate();
    const excluirConta = () => {

        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não poderá recuperar essa conta!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim!"
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`/contas/${contaAtual.id}`).then(() => {
                    navigate("/visao-geral")

                    Swal.fire({
                        title: "Deletado!",
                        text: "Conta deletada!",
                        icon: "success"
                    });
                }).catch((error) => {
                    Swal.fire({
                        title: "Erro!",
                        text: "Não foi possível deletar a conta!",
                        icon: "error"
                    });

                    console.log('Houve um erro na exclusão!' + error)
                });


            }
        }).catch((error) => {
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível deletar a conta!",
                icon: "error"
            });

            console.log('Houve um erro na aplicação. Tente novamente!' + error)
        });
    };

    const editarConta = () => {
        setIsModalOpen(true);
        console.log(isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nomeIcone = `${contaAtual.banco}Icon`;

    return (

        <ContainerConta>
            <div className="titulo-removerConta">
                <div className="titulo-icone">
                    <img src={Icon(nomeIcone)} alt="Account Icon" />

                    {contaAtual.nome}
                </div>
                <div className="removerConta" onClick={excluirConta
                }>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 7.28767V3.71228" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    Remover Conta

                </div>

                <EditarConta onClick={editarConta}>

                    Editar Conta

                </EditarConta>

            </div>
            <Conteudo>
                <TextoNumero>
                    <span className="texto">Saldo Geral</span>
                    <span className="numeros">{props.saldo}</span>
                </TextoNumero>
                <TextoNumero>
                    <span className="texto">Despesas</span>
                    <span className="numeros">R$ 10.000,00</span>
                </TextoNumero>
                <TextoNumero>
                    <span className="texto">Receita</span>
                    <span className="numeros">R$ 10.000,00</span>
                </TextoNumero>
            </Conteudo>

            {isModalOpen && <ModalEditar
                isOpen={isModalOpen}
                onClose={closeModal}
                conta={contaAtual}
            />}

        </ContainerConta>




    )
}


export default Conta;

