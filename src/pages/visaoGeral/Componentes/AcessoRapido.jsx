import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import Notification from "./Notification";
import Swal from 'sweetalert2';
import React, { useEffect, useState, createContext, useContext } from 'react';
import api from "../../../api";
import ModalDespesa from './ModalDespesa';
import ModalReceita from './ModalReceita';
import ModalTransferencia from "./ModalTransferencia";


const ContainerAcessoRapido = styled.div`
display:flex;
height:20%;
width:100%;
border-radius:10px;
padding:20px 10px 20px 10px;
background-color:#FDFDFD;
flex-direction:column;
fill: #FDFDFD;
// filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.15));
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
.titulo-icone svg{
    margin-left:10px;
    margin-right:10px;

}

.area-conteudo{
    display:flex;
    justify-content: center;
    height:90%;
}

.area-conteudo .conteudoBloco1{
    display:flex;
    width:100%;
    height:100%;
    justify-content:space-between;
}

.conteudoBloco1 .box-tree{
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    height:100%;
    width:100%;
    align-items: center;
}

.conteudoBloco1 .box-tree .box{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:10vh;
    font-size:13px;
    cursor:pointer;
    font-weight:500;
}

.box img{
    width:50%;
    margin: 8px 0;
}

.box .imgTransferencia{
    width:70%;
    margin: 8px 0;
}

.box .imgNotificacao{
    width:45%;
    margin: 8px 0;
}

.box img:hover{
    opacity:0.7;
    transition:0.3s ease;
}


.number_saldo{
    color:rgba(2, 102, 44, 1);
    font-size:13px;
    font-weight: 600;
}
.number_despesa{
    color:rgba(165, 0, 0, 1);
    font-size:13px;
    font-weight:600;
}
.number_gasto{
    color:rgba(57, 41, 156, 1);
    font-size:13px;
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
`

// const UpdateContext = createContext();

function AcessoRapido() {
    const idUser = sessionStorage.getItem('id');

    const [contas, setContas] = useState([]);
    const [cartoes, setCartoes] = useState([]);

  useEffect(() => {
    listarContas();
    listarCartoes();
  }, []);


  function listarContas() {
    api.get(`/contas/listar-contas/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados das contas: ", respostaObtida.data);
        setContas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  function listarCartoes() {
    api.get(`/cartao-credito/listar-cartoes/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados dos cartões: ", respostaObtida.data);
        setCartoes(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

    const [isAtivado, setIsAtivado] = useState(true);
    
    const [selectedModal, setSelectedModal] = useState(null);

    const openModal = (modalType) => {
        setSelectedModal(modalType);
    };

    const closeModal = () => {
        setSelectedModal(null);
    };


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
                            <span className="box" onClick={() => openModal('despesa')}>
                                <img src={Icon('negativoIcon')} />
                                <span className="action">Nova despesa</span>
                            </span>
                            <span className="box" onClick={() => openModal('receita')}>
                                <img src={Icon('positivoIcon')} />
                                <span className="action">Nova receita</span>
                            </span>
                            <span className="box" onClick={() => openModal('transferencia')}>
                                <img className="imgTransferencia" src={Icon('transferenciaIcon')} />
                                <span className="action">Transferir</span>
                            </span>

                            <span className="box">
                                <Notification />
                            </span>
                        </div>
                    </div>

                    
                    
                    {selectedModal === 'despesa' && <ModalDespesa onClose={closeModal} contas={contas} cartoes={cartoes} />}
                    {selectedModal === 'receita' && <ModalReceita onClose={closeModal} contas={contas} cartoes={cartoes}/>}
                    {selectedModal === 'transferencia' && <ModalTransferencia onClose={closeModal} contas={contas}/>}

                </div>
            </ContainerAcessoRapido>
            
        </>
    )
}



export default AcessoRapido;