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
import playstation from "./assets/playstation.svg"
import LateralHeader from "../visaoGeral/Componentes/LateralHeader"
import FloatingButton from '../Cartoes/Components/FloatingButton';
import { Icon } from '../visaoGeral/funcoes/icons';


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
    `;

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
    const listaObjetivos = [
        {
            img: null,
            nome: "Viagem para o Caribe",
            saldoAtual: 2000.0,
            custoTotal: 5000.0,
            dtInicio: "01/01/2021",
            dtFim: "01/01/2022",
        }
    ]

    const progresso = (listaObjetivos[0].saldoAtual / listaObjetivos[0].custoTotal) * 100;

    const icones = [
        {
            img: edit,
            alt: "Editar",
            link: "editar"
        },
        {
            img: money,
            alt: "Depositar",
            link: "depositar"
        },
        {
            img: trash,
            alt: "Excluir",
            link: "excluir"
        }
    ]

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

                                <TitleCard>Faltam X meses:</TitleCard>

                                <div className="info-texto">
                                    <span>Para atingir o objetivo</span>
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

                                <TitleCard>Salto Total</TitleCard>

                                <div className="info-texto">
                                    <span>R${props.saldo},00</span>
                                </div>
                            </Info>
                            <div className="imagem">
                                <img class="status" src={up} alt="up" />
                            </div>

                        </Card>
                    </div>

                    <div className="bloco2" id="opt">
                        <ObjDiv>
                           
                            <CardObj>
                                <div className="imagem">
                                    {/* <img src={listaObjetivos[0].img} alt="Imagem Objetivo" /> */}
                                    <img src={playstation} alt="" />
                                </div>

                                <InfoObj>
                                    <TitleObj>Playstation 5 + Valhalla</TitleObj>

                                    <SubInfo>
                                        <div className="saldoObj">
                                            <span>{listaObjetivos[0].saldoAtual},00 / {listaObjetivos[0].custoTotal},00</span>
                                            <h1>{progresso.toFixed(1)}%</h1>
                                        </div>

                                        <progress className="progressBar" value={progresso} max="100"></progress>

                                        <Datas>
                                            <div className="data" id="inicio">
                                                <p className="inicio">Inicio: </p>
                                                <span> {listaObjetivos[0].dtInicio}</span>
                                            </div>

                                            <div className="data" id="fim">
                                                <p className="fim">Término:</p>
                                                <span>{listaObjetivos[0].dtFim}</span>
                                            </div>
                                        </Datas>
                                    </SubInfo>
                                </InfoObj>

                                <Icons>
                                    {icones.map((icone) => (
                                        <div className="border">
                                            <img src={icone.img} alt={icone.alt} />
                                        </div>
                                    ))}
                                </Icons>

                            </CardObj>
                            <CardObj>
                                <div className="imagem">
                                    {/* <img src={listaObjetivos[0].img} alt="Imagem Objetivo" /> */}
                                    <img src={playstation} alt="" />
                                </div>

                                <InfoObj>
                                    <TitleObj>Playstation 5 + Valhalla</TitleObj>

                                    <SubInfo>
                                        <div className="saldoObj">
                                            <span>{listaObjetivos[0].saldoAtual},00 / {listaObjetivos[0].custoTotal},00</span>
                                            <h1>{progresso.toFixed(1)}%</h1>
                                        </div>

                                        <progress className="progressBar" value={progresso} max="100"></progress>

                                        <Datas>
                                            <div className="data" id="inicio">
                                                <p className="inicio">Inicio: </p>
                                                <span> {listaObjetivos[0].dtInicio}</span>
                                            </div>

                                            <div className="data" id="fim">
                                                <p className="fim">Término:</p>
                                                <span>{listaObjetivos[0].dtFim}</span>
                                            </div>
                                        </Datas>
                                    </SubInfo>
                                </InfoObj>

                                <Icons>
                                    {icones.map((icone) => (
                                        <div className="border">
                                            <img src={icone.img} alt={icone.alt} />
                                        </div>
                                    ))}
                                </Icons>

                            </CardObj>
                            <CardObj>
                                <div className="imagem">
                                    {/* <img src={listaObjetivos[0].img} alt="Imagem Objetivo" /> */}
                                    <img src={playstation} alt="" />
                                </div>

                                <InfoObj>
                                    <TitleObj>Playstation 5 + Valhalla</TitleObj>

                                    <SubInfo>
                                        <div className="saldoObj">
                                            <span>{listaObjetivos[0].saldoAtual},00 / {listaObjetivos[0].custoTotal},00</span>
                                            <h1>{progresso.toFixed(1)}%</h1>
                                        </div>

                                        <progress className="progressBar" value={progresso} max="100"></progress>

                                        <Datas>
                                            <div className="data" id="inicio">
                                                <p className="inicio">Inicio: </p>
                                                <span> {listaObjetivos[0].dtInicio}</span>
                                            </div>

                                            <div className="data" id="fim">
                                                <p className="fim">Término:</p>
                                                <span>{listaObjetivos[0].dtFim}</span>
                                            </div>
                                        </Datas>
                                    </SubInfo>
                                </InfoObj>

                                <Icons>
                                    {icones.map((icone) => (
                                        <div className="border">
                                            <img src={icone.img} alt={icone.alt} />
                                        </div>
                                    ))}
                                </Icons>

                            </CardObj>
                       
                            <CardObj>
                                <div className="imagem">
                                    {/* <img src={listaObjetivos[0].img} alt="Imagem Objetivo" /> */}
                                    <img src={playstation} alt="" />
                                </div>

                                <InfoObj>
                                    <TitleObj>Playstation 5 + Valhalla</TitleObj>

                                    <SubInfo>
                                        <div className="saldoObj">
                                            <span>{listaObjetivos[0].saldoAtual},00 / {listaObjetivos[0].custoTotal},00</span>
                                            <h1>{progresso.toFixed(1)}%</h1>
                                        </div>

                                        <progress className="progressBar" value={progresso} max="100"></progress>

                                        <Datas>
                                            <div className="data" id="inicio">
                                                <p className="inicio">Inicio: </p>
                                                <span> {listaObjetivos[0].dtInicio}</span>
                                            </div>

                                            <div className="data" id="fim">
                                                <p className="fim">Término:</p>
                                                <span>{listaObjetivos[0].dtFim}</span>
                                            </div>
                                        </Datas>
                                    </SubInfo>
                                </InfoObj>

                                <Icons>
                                    {icones.map((icone) => (
                                        <div className="border">
                                            <img src={icone.img} alt={icone.alt} />
                                        </div>
                                    ))}
                                </Icons>

                            </CardObj>
                       

                        </ObjDiv>

                        <Meta>
                            <div className="metaCard">
                                <div className="borda">
                                    <img src={add} alt="add" />
                                </div>

                                <p>Nova Meta</p>
                            </div>
                        </Meta>

                    </div>
                </Social>
                <FloatingButton />
            </AllContainers>


        </>
    )
}

export default Objetivos;
