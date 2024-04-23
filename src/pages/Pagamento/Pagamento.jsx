import React, { useEffect, useState } from 'react';
import LateralHeader from "../visaoGeral/Componentes/LateralHeader";
import "../../assets/css/pages/pagamento.css"
import "../../assets/css/pages/pagamento-modal.css"
import { set } from 'date-fns';
import api from '../../api';

function Teste() {
    const idUser = sessionStorage.getItem('id');
    const nomeUser = sessionStorage.getItem('nome');
    const emailUser = sessionStorage.getItem('email');
    //const cpfUser = sessionStorage.getItem('cpf');

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

    function criarPagamento() {
        api.post(`/pagamentos/pix/${idUser}`, pagamento)
            .then((respostaObtida) => {
                console.log("Dados das contas:", respostaObtida.data);
                set_qr_code_base64(respostaObtida.data.qrcodeBase);
                set_qr_code_copia_cola(respostaObtida.data.copiaCola);
                setCountdown(180);
                tempo();
                setModalOpen(true);
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
                                            <button className='button-free'>Atual</button>
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
                                            <button onClick={handleOpenModal} className='button-premium'>Adquirir</button>
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
                                    <p>{qr_code_copia_cola}</p>
                                </div>
                                <div>
                                    <button>Confirmar pagamento</button>
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