import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";


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
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);

.titulo-removerConta {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 30%;
    width: 100%;
    font-size:24px;
    justify-content:space-between;

  }
  
.titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 85%;
    font-size:24px;

  }

  .titulo-icone img {
    margin-right: 10px;
  }

  .removerConta{
    display:flex;
    justify-content:center;
    align-items:end;
    font-size: 10px;
    padding: 10px;
    border-radius:10px;
    background-color:rgba(208, 17, 43, 1);
    color:rgba(253, 253, 253, 1);
    cursor:pointer;

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
font-size:20px;

.numeros{
    font-weight:700;
}

.texto{
    margin-top:10px;
}
`

function conta() {
    return (

        <ContainerConta>
            <div className="titulo-removerConta">
                <div className="titulo-icone">
                <img src={Icon('contasIcon')} />
                    Conta
                </div>
                <div className="removerConta">
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 7.28767V3.71228" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Remover Conta

                </div>

            </div>
            <Conteudo>
                <TextoNumero>
                    <span className="texto">Saldo Geral</span>
                    <span className="numeros">R$ 10.000,00</span>
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

        </ContainerConta>




    )
}


export default conta;

