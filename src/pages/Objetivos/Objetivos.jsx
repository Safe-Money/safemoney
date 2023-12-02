import styled from "styled-components"
import contas from "./assets/ContasIcon.svg"
import down from "./assets/down.svg"
import up from "./assets/up.svg"
import obj from "./assets/obj.svg"
import saldo from "./assets/saldo.svg"
import edit from "./assets/edit.svg"
import money from "./assets/money.svg"
import trash from "./assets/trash.svg"
import add from "./assets/add.svg"
import LateralHeader from "../visaoGeral/Componentes/LateralHeader"
import FloatingButton from '../Cartoes/Components/FloatingButton';
import Edita from "./components/Editar"
import { useState, useEffect } from "react";
import Adiciona from "./components/Adiciona"
import api from "../../api"
import { Icon } from '../visaoGeral/funcoes/icons';
import Swal from "sweetalert2"
import { set } from "date-fns"
import Depositar from "./components/Depositar"


const AllContainers = styled.div`
  display: flex;
  margin: 0;
  height:100vh;
  width:100%;
  box-sizing: border-box;
  overflow-y:hidden;
  background-color: #DBE7E0;

  *{
    box-sizing: border-box;
  }
`;

const Social = styled.div`
    display: flex;
    width: 88%;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: space-between;
    

    .bloco1 {
        display: flex;
        width: 100%;
        height: 19%;
        justify-content: space-between;
    }

    .bloco2 {
        padding: 1% 0 0 0;
        display:flex;
        height: 81%;
        width: 100%;
    }


    `

const Card = styled.div`
    display:flex;
    width:24%;
    height:100%;
    background: linear-gradient(to right, #08632D, #08632D 3%, #ffffff 3%, #ffffff);
    border-radius:10px;
    padding:5px 20px 20px 20px;
    font-size: 12px;
    justify-content:space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    .logo-texto-numero{
        display:flex;
        flex-direction:column;
        height:100%;
        width:100%;
        justify-content:space-around;
    }
    
    .logo{
        display:flex;
    }
    .texto{
        display:flex;
        font-weight:700;
        font-size:13px;
        line-height:28px;
    }
    .numero{
        display:flex;
        
        width:60%;
        font-size:14px;
        border-radius:10px;
        padding:1px 1px 1px 10px;
    }
    
    img{
        padding:3px;
        height: 35px;
        border-radius:7px;
        margin-left:-3px;
    }

    .imagem{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 20px 0 0 0;
    }
    

    
    `

const TitleCard = styled.span`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
    line-height: 28px; 
`
const Info = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content:space-around;
    flex-direction: column;

    .icone{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .icone img{
        width:20px;
        height:20px;
        padding: 3px;
        border-radius: 7px;
        background-color: #C1FAC6;
    }

    .info-texto{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 9px;
        font-weight: 500;
    }

    .info-texto span{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color:#C1FAC6;
        height:100%;
        border-radius: 10px;
        padding: 10px;



    }

    #card-2{
        width: 40%;
    }
`

const ObjDiv = styled.div`
        // display:flex; 
        flex-direction:column;
        overflow-y: auto;
        max-height: 100%;
        width:50%;
        padding: 0 0.5% 0 0;
        gap:15px;

        &::-webkit-scrollbar {
            width: 7px;
        }

        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }

        &::-webkit-scrollbar-thumb {
            background: black;
            border-radius: 10px;
            background-color:  #08632D;
        }
    `

const CardObj = styled.div`
    display: flex;
    padding: 2%;
    width: 100%;
     height: 150px; 
    border-radius: 10px;
    background-color: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom:20px;

    .imagem{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30vw;
        width: 20%;
        height:117px;
        // background-color: #DBE7E0;
    }

    .imagem img{
        width:90px;
        height:90px;
        border-radius: 30vw;
        border:solid 2px #08632D;
        stroke-width: 3px;
    }
    .status{
        width:10px;
    }

`
const InfoObj = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 70%;
    height:100%;
`
const TitleObj = styled.span`
    font-size: 14px;
    font-weight: 600;
    height:20%;
    padding: 0 10% 0 0;
`

const SubInfo = styled.div`
    display: flex;
    width: 100%;
    padding: 0 5%;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;

    .saldoObj{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top:2%;
    }

    .saldoObj span{
        font-size: 12px;
        font-weight: 600;
    }

    h1{
        font-size: 18px;
        font-weight: 600;
        color:#000;
        margin:none;
    }

    .progressBar{
        background-color: white;
        height: 25%;
        width: 100%;
    }

    .progressBar::-webkit-progress-value {
        background-color: #08632D;
        border-radius: 50px;
      }

      .progressBar::-webkit-progress-bar {
        background-color: #DBE7E0; 
        border-radius: 50px;
      }
`

const Datas = styled.div`
    font-size: 11px;
    font-weight: 600;
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;

    .data{
        display: flex;
        justify-content: space-between;
        font-weight:700;
    }

    .inicio, .fim{
        margin-right:5px;
    }
    
    #inicio span{
        color: #08632D;
    }

    #fim span{
        color:#AD0000;
        
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width:10%;
    margin-top:3%;

    .border{
        cursor: pointer;
        background-color:  #08632D;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 27px;
        border-radius: 50px;
    }
    `

const Meta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-radius: 10px;
    padding:0 0 0 1%;


    .metaCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #FDFDFD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
    }

    .borda{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 50px;
        background-color: #C1FAC6;
        margin-bottom: 10px;
        cursor: pointer;
    }

    img{
        height: 40px;
    }

    p{
        font-size: 15px;
        font-weight: 600;
    }
    `

function Objetivos(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editar, setEditar] = useState(false);
    const [depositar, setDepositar] = useState(false);
    const [objetivoAtual, setObjetivoAtual] = useState({});
    const [objetivoProximo, setObjetivoProximo] = useState({});
    const [listaObjetivos, setListaObjetivos] = useState([]);
    const [saldoTotal, setSaldoTotal] = useState(0);
    const id = sessionStorage.getItem("id");
    const icones = [
        {
            img: edit,
            alt: "Editar",
            link: "editar",
            click: (objetivo) => {setEditar(true), setObjetivoAtual(objetivo)}
        },
        {
            img: money,
            alt: "Depositar",
            link: "depositar",
            click: (objetivo) => {setDepositar(true), setObjetivoAtual(objetivo)}
        },
        {
            img: trash,
            alt: "Excluir",
            link: "excluir",
            click: (objetivo) => excluirObjetivo(objetivo.id)
        }
    ]

    const closeModal = () => {
        if (editar) {
            setEditar(false);
        }

        if(isModalOpen){
            setIsModalOpen(false);
        }

        if(depositar){
            setDepositar(false);
        }
    };

    const formatarMoeda = (saldo) => {
        const saldoNumero = parseFloat(saldo);
    
    if (isNaN(saldoNumero)) {
        // Tratar o caso em que saldo não é um número
        return 'Erro: saldo não é um número válido';
    }

    const formatado = saldoNumero.toFixed(2);
    return formatado;
    };


    const retornarProgresso = (objetivo) => {
        const progresso = (objetivo.valorInvestido / objetivo.valorFinal) * 100;

        return progresso;
    }

    const retornarDataFormatada = (data) => {
        const dataFormatada = data.split("-").reverse().join("/");

        return dataFormatada;
    }

    const excluirObjetivo = (id) => {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não poderá recuperar essa conta!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Não",
            confirmButtonText: "Sim!"
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`/objetivos/${id}`)
                    .then(response => {
                        console.log(response.data);
                        Swal.fire({
                            title: "Excluído!",
                            text: "Objetivo excluído com êxito!",
                            icon: "success"
                        }).then((result) =>{
                            if(result.isConfirmed){
                                window.location.reload();
                            }
                        });
                    }).catch(error => {
                        Swal.fire({
                            title: "Erro!",
                            text: "Não foi possível excluir o objetivo! Tente novamente",
                            icon: "error"
                        })
                        console.log("Erro ao excluir objetivo");
                        console.log(error);
                    })
            }
        })

    }

    useEffect(() => {
        const fetchContas = async () => {
            await api.get(`/objetivos/usuario/${id}`)
                .then(response => {
                    console.log(response.data);
                    setListaObjetivos(response.data);
                }).catch(error => {
                    console.log("Erro ao listar objetivos do usuário");
                    console.log(error);
                })

            await api.get(`/objetivos/proximoObjetivo/${id}`).then(response => {
                console.log(response.data);
                setObjetivoProximo(response.data);
            }).catch(error => {
                console.log("Erro ao listar próximo objetivo");
                console.log(error);
            })

            await api.get(`/objetivos/saldoTotal/${id}`).then(response => {
                setSaldoTotal(response.data);
                console.log(`Saldo total: ${response.data}`)
            }).catch(error => {
                console.log("Erro ao listar saldo total");
                console.log(error);
            })
        };

        fetchContas();
    }, []);


    return (
        <>
            <AllContainers>
                <LateralHeader selecionado="objetivos" />

                <Social>
                    <div className="bloco1">

                        <Card>
                            <div className="linha-verde"></div>

                            <Info>
                                <div className="icone">
                                    <img src={contas} alt="aaa" />
                                </div>

                                <TitleCard>Objetivo mais próximo:</TitleCard>

                                <div className="info-texto">
                                    <span>{objetivoProximo.nome}</span>
                                </div>
                            </Info>

                            <div className="imagem">
                                <img class="status" src={up} alt="up" />
                            </div>
                        </Card>

                        <Card>
                            <Info>
                                <div className="icone">
                                    <img src={contas} alt="aaa" />
                                </div>

                                <TitleCard>Ultimo Depósito:</TitleCard>

                                <div className="info-texto" id="card-2">
                                    <span>{props.data}</span>
                                </div>
                            </Info>
                            <div className="imagem">
                                <img class="status" src={down} alt="down" />
                            </div>
                        </Card>

                        <Card>
                            <Info>
                                <div className="icone">
                                    <img src={obj} alt="aaa" />
                                </div>

                                <TitleCard>Objetivos acima de:</TitleCard>

                                <div className="info-texto" id="card-2">
                                    <span>50%</span>
                                </div>
                            </Info>
                            <div className="imagem">
                                <img class="status" src={up} alt="up" />
                            </div>

                        </Card>

                        <Card>
                            <Info>
                                <div className="icone">
                                    <img src={saldo} alt="saldo" />
                                </div>

                                <TitleCard>Total investido:</TitleCard>

                                <div className="info-texto">
                                    <span>R$ {formatarMoeda(saldoTotal)}</span>
                                </div>
                            </Info>
                            <div className="imagem">
                                <img class="status" src={up} alt="up" />
                            </div>

                        </Card>
                    </div>

                    <div className="bloco2" id="opt">
                        <ObjDiv>
                            {listaObjetivos.length != 0 ? listaObjetivos.map((objetivo) => (
                                <CardObj key={objetivo.id}>
                                    <div className="imagem">
                                        <img src={objetivo.urlImagem} alt="Imagem" />
                                    </div>

                                    <InfoObj>
                                        <TitleObj>{objetivo.nome}</TitleObj>

                                        <SubInfo>
                                            <div className="saldoObj">
                                                <span> R$ {formatarMoeda(objetivo.valorInvestido)} / R$ {formatarMoeda(objetivo.valorFinal)}</span>
                                                <h1>{retornarProgresso(objetivo).toFixed(1)}%</h1>
                                            </div>

                                            <progress className="progressBar" value={retornarProgresso(objetivo)} max="100"></progress>

                                            <Datas>
                                                <div className="data" id="inicio">
                                                    <p className="inicio">Inicio: </p>
                                                    <span>{retornarDataFormatada(objetivo.dataInicio)}</span>
                                                </div>

                                                <div className="data" id="fim">
                                                    <p className="fim">Término:</p>
                                                    <span>{retornarDataFormatada(objetivo.dataTermino)}</span>
                                                </div>
                                            </Datas>
                                        </SubInfo>
                                    </InfoObj>

                                    <Icons>
                                        {icones.map((icone) => (
                                            <div className="border">
                                                <img src={icone.img} alt={icone.alt} onClick={() => icone.click(objetivo)}/>
                                            </div>
                                        ))}
                                    </Icons>

                                </CardObj>
                            )) : <span>Não há objetivos cadastrados</span>}


                        </ObjDiv>

                        <Meta>
                            <div className="metaCard">
                                <div className="borda" onClick={() => setIsModalOpen(true)}>
                                    <img src={add} alt="add" />
                                </div>

                                <p>Nova Meta</p>
                            </div>
                        </Meta>

                    </div>

                    {isModalOpen && <Adiciona onClose={closeModal} />}
                    {editar && <Edita onClose={closeModal} objetivo={objetivoAtual}/>}
                    {depositar && <Depositar onClose={closeModal} objetivo={objetivoAtual}/>}

                </Social>
                <FloatingButton />
            </AllContainers>


        </>
    )
}

export default Objetivos;
