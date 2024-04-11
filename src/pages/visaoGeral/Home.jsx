import styled from "styled-components";
import CartaoCredito from "./Componentes/CartaoCredito";
import AcessoRapido from "./Componentes/AcessoRapido";
import UltimosGastos from "./Componentes/UltimosGastos";
import Previsao from "./Componentes/Previsao";
import LateralHeader from "./Componentes/LateralHeader";
import "./../../assets/css/pages/home.css"
import { Icon } from "./funcoes/icons"
import { MinhasContas } from './funcoes/ContaFunctions'
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    MinhasContas();

    const navigateClicked = (conta) => {
        console.log(conta);;
        const contaClicada = conta;
        navigate(`/conta/${contaClicada.id}`)
    };

    const NaoEncontrado = styled.div`
    margin: 10% 0 10% 30%;
`

    return (

        <div className="geral">
            <LateralHeader selecionado="geral"/>

            <div className="visao-geral">
                
                <div className="container-um">
                    
                    <div className="contas">

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



                    </div>

                    <CartaoCredito/>
                </div>

                <div className="container-dois">
                    <AcessoRapido/>
                    <UltimosGastos/>
                    <Previsao/>

                </div>


            </div>
        </div>


    )
}

export default Home;