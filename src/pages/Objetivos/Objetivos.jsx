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

const AllContainers = styled.div`
  display: flex;
  margin: 0;
  height:100vh;
  box-sizing: border-box;
  overflow-y:hidden;
  background-color: #DBE7E0;

  *{
    box-sizing: border-box;
  }
`;

const Social = styled.div`
    display: flex;
    width: 86%;
    height: 100%;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: space-between;

    .bloco {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
    }

    #opt {
        height: 70vw;
        width: 99.5%;
        margin-top: 10px;
    }


    `

const Card = styled.div`
    display: flex;
    height: 135px; /* Alterado de height para max-height */
    justify-content: space-between;
    width: 40vw;
    border-radius: 10px;
    margin: 0 7px;
    background-color: #FDFDFD;

    .linha-verde {
        display: flex;
        width: 0.75vw;
        border-radius: 10px;
        height: 100%;
        background-color: #398257;
    }

    .status{
        height: 30px;
        margin: 15px 10px;
    }
    `;

const TitleCard = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
`
const Info = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 15px;

    .icone{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30.911px;
        height: 30.488px;
        border-radius: 50px;
        background-color: #DBE7E0;
    }

    .icone img{
        height: 20px;
    }

    .info-texto{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #DBE7E0;
        font-size: 12px;
        font-weight: 500;
        height: 40px;
        border-radius: 10px;
        width: 90%;
    }

    #card-2{
        width: 40%;
    }
`

const ObjDiv = styled.div`
        margin: 10px 0;
        overflow-y: auto;
        max-height: 450px;
        padding-left: 10px;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }

        &::-webkit-scrollbar-thumb {
            background: black;
            border-radius: 10px;
            background-color: #398257;
        }
    `;

const CardObj = styled.div`
    display: flex;
    padding: 20px;
    width: 40.5vw;
    height: 153px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #FDFDFD;

    .imagem{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        border: solid 5px #398257;
        border-radius: 100px;
        width: 20%;
        background-color: #DBE7E0;
    }
`
const InfoObj = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 70%;
`

const SubInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90vh;
    margin: 15px auto;
    justify-content: space-between;

    .saldoObj{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    .saldoObj span{
        font-size: 14px;
        font-weight: 600;
    }

    h1{
        font-size: 24px;
        font-weight: 600;
    }

    .progressBar{
        background-color: white;
        height: 12px;
        margin: 10px 0;
        width: 100%;
    }

    .progressBar::-webkit-progress-value {
        background-color: #398257; 
        border-radius: 50px;
      }

      .progressBar::-webkit-progress-bar {
        background-color: #DBE7E0; 
        border-radius: 50px;
      }
`

const Datas = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin: 5px 0;
    width: 100%;
    height: 30px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;

    .data{
        display: flex;
        justify-content: space-between;
    }

    .inicio, .fim{
        margin-right:5px;
    }

    #inicio span{
        color: #398257;
    }

    #fim span{
        color: #D03434;
    }
`

const TitleObj = styled.span`
    font-size: 16px;
    font-weight: 600;
`

const Meta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40.5vw;
    border-radius: 10px;
    padding: 22px;
    margin: 5px 0;
    background-color: #FDFDFD;

    .borda{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: #DBE7E0;
        margin-bottom: 10px;
    }

    p{
        font-size: 16px;
        font-weight: 600;
    }
    `
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0px 10px;

    .border{
        cursor: pointer;
        background-color: #398257;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 27px;
        border-radius: 50px;
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
                <LateralHeader selecionado="objetivos"/>

                <Social>
                    <div className="bloco">

                        <Card>
                            <div className="linha-verde"></div>

                            <Info>
                                <div className="icone">
                                    <img src={contas} alt="aaa" />
                                </div>

                                <TitleCard>Faltam X meses</TitleCard>

                                <div className="info-texto">
                                    <span>Para atingir o objetivo</span>
                                </div>
                            </Info>
                            <img class="status" src={up} alt="up" />
                        </Card>

                        <Card>
                            <div className="linha-verde"></div>

                            <Info>
                                <div className="icone">
                                    <img src={contas} alt="aaa" />
                                </div>

                                <TitleCard>Ultimo Depósito:</TitleCard>

                                <div className="info-texto" id="card-2">
                                    <span>{props.data}</span>
                                </div>
                            </Info>
                            <img class="status" src={down} alt="down" />
                        </Card>

                        <Card>
                            <div className="linha-verde"></div>

                            <Info>
                                <div className="icone">
                                    <img src={obj} alt="aaa" />
                                </div>

                                <TitleCard>Objetivos acima de:</TitleCard>

                                <div className="info-texto" id="card-2">
                                    <span>50%</span>
                                </div>
                            </Info>
                            <img class="status" src={up} alt="up" />

                        </Card>

                        <Card>
                            <div className="linha-verde"></div>

                            <Info>
                                <div className="icone">
                                    <img src={saldo} alt="saldo" />
                                </div>

                                <TitleCard>Salto Total</TitleCard>

                                <div className="info-texto">
                                    <span>R${props.saldo},00</span>
                                </div>
                            </Info>
                            <img class="status" src={up} alt="up" />

                        </Card>
                    </div>

                    <div className="bloco" id="opt">
                        <ObjDiv>
                            <CardObj>
                                <div className="imagem">
                                    <img src={listaObjetivos[0].img} alt="img" />
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
                            <div className="borda">
                                <img src={add} alt="add" />
                            </div>

                            <p>Nova Meta</p>
                        </Meta>

                    </div>
                </Social>
            </AllContainers>


        </>
    )
}

export default Objetivos;
