import React, { useEffect, useState } from 'react';
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import "../../assets/css/pages/pagamento.css"
import "../../assets/css/pages/pagamento-modal.css"
import { set } from 'date-fns';
import api from '../../api';
import axios from 'axios';
import Swal from 'sweetalert2';

function Teste() {
    const idUser = sessionStorage.getItem('id');
    const nomeUser = sessionStorage.getItem('nome');
    const emailUser = sessionStorage.getItem('email');
    //const cpfUser = sessionStorage.getItem('cpf');
    const planoUser = sessionStorage.getItem('plano');

    var planoState = planoUser == 1 ? true : false;

    const [plano, setPlano] = useState(planoState);


    const [countdown, setCountdown] = useState(0); // 3 minutos em segundos

    const tempo = () => {
        // Atualiza o contador a cada segundo
        const timer = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    return 0; // Garante que o contador não seja negativo
                }
            });
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(timer);
    };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        if (countdown === 0) {
            criarPagamento()
        } else {
            setModalOpen(true);
        }

    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const [qr_code_base64, set_qr_code_base64] = useState(null);
    const [qr_code_copia_cola, set_qr_code_copia_cola] = useState(null);

    const pagamento = {
        firstName: nomeUser,
        email: emailUser,
        cpf: "51761473867"
    };

    const [idPix, setIdPix] = useState();
    const [pagamentoConfirmado, setPagamentoConfirmado] = useState(true);

    function criarPagamento() {
        api.post(`/pagamentos/pix/${idUser}`, pagamento)
            .then((respostaObtida) => {
                console.log("Dados das contas:", respostaObtida.data);
                set_qr_code_base64(respostaObtida.data.qrcodeBase);
                set_qr_code_copia_cola(respostaObtida.data.copiaCola);
                setCountdown(180);
                tempo();
                setModalOpen(true);
                setIdPix(respostaObtida.data.id)
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    function alterarPlano() {
        api.post(`/pagamentos/alterar-plano/${idUser}`)
            .then((respostaObtida) => {
                console.log("Plano alterado com sucesso!", respostaObtida)
                sessionStorage.setItem('plano', 1);
                setPlano(true)
            })
            .catch((erroOcorrido) => {
                console.log("Erro ao alterar plano:", erroOcorrido)
            })
    }

    function confirmarPagamento() {
        axios.get(`https://api.mercadopago.com/v1/payments/${idPix}`, {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_TOKEN_MP}`
            }
        })
            .then((respostaObtida) => {
                console.log("Dados da confirmação de pagamento:", respostaObtida.data);
                console.log(respostaObtida.data.status)
                if (respostaObtida.data.status == "pending") {
                    setPagamentoConfirmado(false);
                } else {
                    setModalOpen(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Pagamento confirmado',
                        text: 'Seu pagamento PIX foi confirmado com sucesso pela SafeMoney!!.',
                    }).then(() => {
                        alterarPlano();
                    })
                }
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }


    return (
        <>
            <div className='geral-pagamento'>
                <LateralHeader selecionado="pagamento" />
                <div className='plano-cards'>
                    <div className='container-pagamento'>
                        <div className='titulo-pagamento'>
                            <h1>Upgrade para Premium</h1>
                        </div>

                        <div className='cards-pagamento'>
                            <div className='container-cards'>

                                <div className='card-free'>
                                    <div className='container-card-free'>

                                        <div className='title-card-free-div'>
                                            <p className='title-card-free'>Free</p>
                                        </div>
                                        <div className='value-free'>
                                            <p>R$ 0,00 / mês</p>
                                        </div>

                                        <div className='list-free-div'>
                                            <ul className='list-free'>
                                                <li>Anúncios ativos</li>
                                                <li>Ações limitadas</li>
                                            </ul>
                                        </div>

                                        <div className='button-free-div'>

                                        </div>


                                    </div>
                                </div>


                                <div className='card-free'>
                                    <div className='container-card-free'>
                                        <div className='title-card-premium-div'>
                                            <p className='title-card-premium'>Premium</p>
                                        </div>

                                        <div className='value-free'>
                                            <p>R$ 4,99 / mês</p>
                                        </div>

                                        <div className='list-premium-div'>
                                            <ul className='list-premium'>
                                                <li>Sem anúncios</li>
                                                <li>Contas ilimitadas</li>
                                                <li>Cartões ilimitados</li>
                                                <li>Planos ilimitados</li>
                                                <li>Objetivos ilimitados</li>
                                            </ul>
                                        </div>

                                        <div className='button-premium-div'>
                                            {plano == false ? (
                                                <button onClick={criarPagamento} className='button-premium'>
                                                    Adquirir
                                                </button>
                                            ) : (
                                                <button className='button-atual'>Atual</button>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {modalOpen && (
                <div className="modal-pagamento">
                    <div className="modal-content-pagamento">
                        <div className='modal-title-pagamento'>
                            <div>
                            </div>
                            <h1>PIX</h1>
                            <div>
                                <span className="close-pagamento" onClick={handleCloseModal}>&times;</span>
                            </div>
                        </div>


                        <div className='modal-qr-pagamento'>
                            <div className='modal-qr-pagamento-container'>
                                <div className='expiration-time'>
                                    <p>{formatTime(countdown)}</p>
                                </div>
                                <div className='qr-base-64'>
                                    <img src={`data:image/jpeg;base64,${qr_code_base64}`} alt="QR Code" />
                                </div>
                                <div className='qr-copia-cola'>
                                    <p className='title-copie'>Ou copie e cole o código a seguir:</p>
                                    <p>{qr_code_copia_cola}</p>
                                </div>
                            </div>
                        </div>

                        <div className='confirmar-pagamento'>
                            <div className='container-confirmar-pagamento'>
                                <button className='botao-confirmar-pagamento' onClick={confirmarPagamento}>Confirmar pagamento</button>
                                <div>
                                    {!pagamentoConfirmado && <p>Pagamento não confirmado!</p>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Teste;