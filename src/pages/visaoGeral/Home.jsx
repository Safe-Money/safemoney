import LateralHeader from "./Componentes/LateralHeader";
import "./../../assets/css/pages/home.css"
import { Icon } from "./funcoes/icons"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ModalWrapper from "./Componentes/ModalWrapper"
import ModalCartao from "./Componentes/ModalCartao";
import api from "../../api";
import ContaContainer from "./Componentes/ContaContainer";
import CartaoContainer from "./Componentes/CartaoContainer";
import Notification from "./Componentes/Notification";
import ModalDespesa from "./Componentes/ModalDespesa";
import ModalReceita from "./Componentes/ModalReceita";
import ModalTransferencia from "./Componentes/ModalTransferencia";
import DespesaContainer from "./Componentes/DespesaContainer";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, CartesianGrid } from "recharts";


function Home() {
    const idUser = sessionStorage.getItem('id');

    useEffect(() => {
        listarContas();
        listarCartoes();
        listarGastos();
        listarPrevisao();
    }, []);



    // Contas //

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCartao, setIsModalOpenCartao] = useState(false);
    const [contas, setContas] = useState([]);
    const [cartoes, setCartoes] = useState([]);

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


    const openModalCartao = () => {
        setIsModalOpenCartao(true);
    };


    const closeModalCartao = () => {
        setIsModalOpenCartao(false);
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


    function listarContas() {
        api.get(`/contas/listar-contas/${idUser}`)
            .then((respostaObtida) => {
                console.log("Dados das contas:", respostaObtida.data);
                setContas(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    const navigate = useNavigate();

    const navigateClicked = (conta) => {
        console.log(conta);;
        const contaClicada = conta;
        navigate(`/conta/${contaClicada.id}`)
    };

    const handleSalvarCartao = (novoCartao) => {
        console.log(novoCartao)
        const valorString = novoCartao.valor.toString();
        console.log(valorString)

        const valorNumerico = parseFloat(valorString.replace(/[^\d.-]/g, '')); // Remove caracteres não numéricos
        console.log(valorNumerico)

        novoCartao.valor = parseFloat(valorNumerico);

        setCartoes([...cartoes, novoCartao]);

        setNovoCartao({
            // categoria: '',
            valor: '',
            origem: '',
            bandeira: '',
            vencimento: ''
        });
        closeModal();
    };



    const handleInputChangeC = (event) => {
        const { name, value } = event.target;
        setNovoCartao({
            ...novaCartao,
            [name]: value
        });
    };

    let cartoesRenderizadas = <p>Nenhum cartão cadastrado.</p>;
    if (cartoes.length > 0) {
        cartoesRenderizadas = cartoes.map((cartao, index) => (
            <CartaoContainer
                key={index}
                nome={cartao.nome}
                origem={cartao.bancoVinculado}
                valor={cartao.faturaValor}
                bandeira={cartao.bandeira}
                vencimento={cartao.vencimento}

            />
        ));
    }

    // Cartão de Crédito //


    function listarCartoes() {
        api.get(`/cartao-credito/listar-cartoes/${idUser}`)
            .then((respostaObtida) => {
                console.log("Dados dos cartões:", respostaObtida.data);
                setCartoes(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }


    const [novoCartao, setNovoCartao] = useState({
        // categoria: '',
        valor: '',
        origem: '',
        bandeira: '',
        vencimento: ''
    })

    sessionStorage.setItem('Cartoes', JSON.stringify(cartoes));


    // ACESSO RAPIDO //

    const [gastos, setGastos] = useState([]);

    function listarGastos() {
        api
            .get(`transacoes/listar-gastos/${idUser}`)
            .then((respostaObtida) => {
                console.log("Últimos gastos", respostaObtida.data);
                setGastos(respostaObtida.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    let dados = <p>Nenhuma transação realizada.</p>;

    if (gastos.length > 0) {
        dados = gastos?.map((gasto) => (
            <DespesaContainer
                key={gasto.id}
                nome={gasto.nome}
                valor={gasto.valor}
                data={gasto.data}
                parcelas={gasto.conta == null ? gasto.parcelas : 0}
                parcelaAtual={gasto.conta == null ? gasto.parcelaAtual : 0}
                cartao={gasto.conta == null ? gasto.fatura.fkCartao.nome : gasto.conta.nome}
                id={gasto.id}
                categoria={gasto.categoria.nome}
            />
        ))

    }



    const [isAtivado, setIsAtivado] = useState(true);

    const [selectedModal, setSelectedModal] = useState(null);

    const openModalAcesso = (modalType) => {
        setSelectedModal(modalType);
    };

    const closeModalAcesso = () => {
        setSelectedModal(null);
    };



    // PREVISAO


    const [receita, setReceita] = useState(0);
    const [despesa, setDespesa] = useState(0);
    const [saldo, setSaldo] = useState(0);

    function listarPrevisao() {
        api
            .get(`/graficos/previsto/${idUser}`)
            .then((respostaObtida) => {
                console.log("Dados do gráfico", respostaObtida.data);

                setReceita(respostaObtida.data.receita);
                setDespesa(respostaObtida.data.despesa);
                setSaldo(respostaObtida.data.saldo);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }


    const dadosGrafico = [
        { name: "Receita", valor: receita, cor: "#51D474" },
        { name: "Despesa", valor: despesa, cor: "rgba(252, 1, 1, 1)" },
    ];

    function CustomYAxisLabel(props) {
        const { x, y, width, height, value } = props;
        return (
            <text x={x + width + 10} y={y + height / 2} dy={4} textAnchor="start" fill="#666">
                {value}
            </text>
        );
    }


    return (

        <div className="geral">
            <LateralHeader selecionado="geral" />

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
                                )) : <div className="nao-encontrado">Nenhuma conta cadastrada</div>}
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
                                onChange={handleInputChangeC}
                                listar={listarContas}
                            />
                        </div>



                    </div>


                    <div className="cartao">

                        <div className="titulo-icone">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21" height="20" rx="8" fill="#2FED42" fill-opacity="0.3" />
                                <path d="M12.2704 6.62195H7.07883C6.92485 6.62195 6.78186 6.62745 6.64987 6.63295C5.34647 6.70994 5 7.1884 5 8.6733V8.99227C5 9.29475 5.24748 9.54223 5.54996 9.54223H13.7993C14.1018 9.54223 14.3493 9.29475 14.3493 8.99227V8.6733C14.3493 7.03442 13.9313 6.62195 12.2704 6.62195Z" fill="#08632D" />
                                <path d="M5.54996 10.3664C5.24748 10.3664 5 10.6139 5 10.9164V12.5167C5 14.1556 5.41797 14.5681 7.07883 14.5681H12.2704C13.9038 14.5681 14.3328 14.1721 14.3493 12.6047V10.9164C14.3493 10.6139 14.1018 10.3664 13.7993 10.3664H5.54996ZM7.72778 13.2262H6.78736C6.56188 13.2262 6.37489 13.0392 6.37489 12.8137C6.37489 12.5882 6.56188 12.4012 6.78736 12.4012H7.73328C7.95876 12.4012 8.14575 12.5882 8.14575 12.8137C8.14575 13.0392 7.95876 13.2262 7.72778 13.2262ZM10.802 13.2262H8.91019C8.68471 13.2262 8.49772 13.0392 8.49772 12.8137C8.49772 12.5882 8.68471 12.4012 8.91019 12.4012H10.802C11.0275 12.4012 11.2145 12.5882 11.2145 12.8137C11.2145 13.0392 11.033 13.2262 10.802 13.2262Z" fill="#08632D" />
                                <path d="M15.9998 10.3511V7.4693C15.9998 5.74794 15.0153 5 13.5305 5H8.61933C8.20136 5 7.82739 5.0605 7.49742 5.18699C7.23894 5.28048 7.00796 5.41797 6.82097 5.59945C6.72198 5.69294 6.79897 5.84693 6.94196 5.84693H12.92C14.1574 5.84693 15.1583 6.84785 15.1583 8.08525V12.0285C15.1583 12.1659 15.3068 12.2429 15.4058 12.144C15.7853 11.7425 15.9998 11.154 15.9998 10.3511Z" fill="#08632D" />
                            </svg>
                            Cartão de Crédito
                        </div>
                        {cartoes.length > 0 ? <div className="titulos-categoria">
                            <div className="Vencimento">
                                Vencimento
                            </div>
                            <div className="Fatura">
                                Fatura
                            </div>
                        </div> : null}
                        <div className="containerBancoScroll">

                            <div className="containerBanco">
                                {cartoesRenderizadas}
                            </div>
                        </div>
                        <div className="localAdicionaConta">
                            <div className="adicionaConta" onClick={(event) => { event.preventDefault(); openModalCartao(); }}>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.125 10H12.8758" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.5 13.3754V6.62463" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.96846 18.4385H12.0315C16.2508 18.4385 17.9385 16.7508 17.9385 12.5315V7.46846C17.9385 3.24922 16.2508 1.56152 12.0315 1.56152H6.96846C2.74922 1.56152 1.06152 3.24922 1.06152 7.46846V12.5315C1.06152 16.7508 2.74922 18.4385 6.96846 18.4385Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Novo cartão
                            </div>
                            <ModalCartao
                                isOpen={isModalOpenCartao}
                                onClose={closeModalCartao}
                                onSave={(data) => {
                                    handleSalvarCartao(data);
                                    closeModalCartao();
                                }}
                                formData={novoCartao}
                                onChange={handleInputChange}
                                listar={listarCartoes}
                            />
                        </div>


                    </div>


                </div>




                <div className="container-dois">

                    <div className="acesso-rapido">
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
                                    <span className="box" onClick={() => openModalAcesso('despesa')}>
                                        <img src={Icon('negativoIcon')} />
                                        <span className="action">Nova despesa</span>
                                    </span>
                                    <span className="box" onClick={() => openModalAcesso('receita')}>
                                        <img src={Icon('positivoIcon')} />
                                        <span className="action">Nova receita</span>
                                    </span>
                                    <span className="box" onClick={() => openModalAcesso('transferencia')}>
                                        <img className="imgTransferencia" src={Icon('transferenciaIcon')} />
                                        <span className="action">Transferir</span>
                                    </span>

                                    <span className="box">
                                        <Notification />
                                    </span>
                                </div>
                            </div>

                            {selectedModal === 'despesa' && <ModalDespesa onClose={closeModalAcesso} contas={contas} cartoes={cartoes} listar={listarGastos} listarGrafico={listarPrevisao}/>}
                            {selectedModal === 'receita' && <ModalReceita onClose={closeModalAcesso} contas={contas} cartoes={cartoes} listar={listarGastos} listarGrafico={listarPrevisao}/>}
                            {selectedModal === 'transferencia' && <ModalTransferencia onClose={closeModalAcesso} contas={contas} listar={listarGastos} listarGrafico={listarPrevisao}/>}

                        </div>
                    </div>





                    <div className="ultimo-gasto">
                        <div className="titulo-icone">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="8" fill="#2FED42" fillOpacity="0.3" />
                                <path d="M6 7H14" stroke="#08632D" strokeLinecap="round" />
                                <path d="M6 10H14" stroke="#08632D" strokeLinecap="round" />
                                <path d="M6 13H14" stroke="#08632D" strokeLinecap="round" />
                            </svg>
                            Últimos gastos
                        </div>

                        <div className="conteudo-lista">
                            {dados.length > 0 && <div className="titulos-categoria">
                                <div className="categoria">
                                    Categoria
                                </div>
                                <div className="descricao">
                                    Descrição
                                </div>
                                <div className="valor">
                                    Valor
                                </div>
                                <div className="data">
                                    Data
                                </div>
                                <div className="parcelas">
                                    Parcelas
                                </div>
                                <div className="conta">
                                    Conta
                                </div>

                            </div>}
                            <div className="container-lista-scroll">

                                {dados}

                            </div>

                        </div>
                    </div>


                    <div className="previsao">
                        <div className="titulo-icone">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="20" height="20" rx="8" fill="#2FED42" fillOpacity="0.3" />
                                <path d="M6 7H14" stroke="#08632D" strokeLinecap="round" />
                                <path d="M6 10H14" stroke="#08632D" strokeLinecap="round" />
                                <path d="M6 13H14" stroke="#08632D" strokeLinecap="round" />
                            </svg>
                            Resumo - Saldo Projetado
                        </div>
                        <div className="conteudo">
                            <div className="grafico-container">
                                { <ResponsiveContainer width="100%" height="200%" position="absolute" marginLeft="100px">
                                    <BarChart data={dadosGrafico} margin={{ top: 20, right: 180, bottom: 20, left: 0 }} barCategoryGap={30}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis label={<CustomYAxisLabel />}
                                            tickMargin={20}
                                            axisLine={true} // Remove the axis line
                                        />
                                        {/* <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} /> */}
                                        <Tooltip />
                                        <Bar dataKey="valor">
                                            {dadosGrafico.map((entry, index) => (
                                                <Cell key={index} fill={entry.cor} /> // 
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>}

                            </div>
                            {receita.length > 0 || despesa.length > 0 && <div className="texto-box">
                                <div className="receitaBox"><span>Receita:</span> R$ {receita}</div>
                                <div className="despesaBox"><span>Despesa:</span> R$ {despesa}</div>
                                <div className="saldoBox"><span>Saldo:</span> R$ {saldo}</div>
                            </div>}

                        </div>
                    </div>

                </div>


            </div>
        </div>


    )
}

export default Home;