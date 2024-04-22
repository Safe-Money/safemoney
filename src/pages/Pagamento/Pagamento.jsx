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

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        criarPagamento()
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const [qr_code_base64, set_qr_code_base64] = useState("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");
    const [qr_code_copia_cola, set_qr_code_copia_cola] = useState("00020126580014br.gov.bcb.pix0136dccf7564-ffe3-4381-b5dd-2513824c28e052040000530398654044.995802BR5911DANA50175996008So Paulo62240520mpqrinter7674695896663043298");
    
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
                                    <p>Expiração: 3:00</p>
                                </div>
                                <div className='qr-base-64'>
                                    <img src={`data:image/jpeg;base64,${qr_code_base64}`} />
                                </div>
                                <div className='qr-copia-cola'>
                                    <p>{qr_code_copia_cola}</p>
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