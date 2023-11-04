import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import { useState } from "react";

const Header = styled.div`
width: 14.4%;
background-color:#08632D;
padding: 5% 0 0 0;
position:relative;
`
const PerfilNome = styled.div`
display:flex;
height: 20%;
width:100%;
justify-content:center;
align-items:center;
flex-direction:column;
padding:0;
margin-bottom:30%;
color:#FCFEFD;

.bem-vindo{
    display:flex;
    justify-content:center;
    align-items:center;
    height:20%;
    width:100%;  
    font-size:14px;  
}
.nome{
    justify-content:center;
    align-items:center;
    display:flex;
    height:20%;
    width:100%;
    font-weight:700;
    
}

.foto{
    display:flex;
    box-sizing: border-box;
    width:100%;
    height:60%;
    justify-content:center;
    align-items:center;
    margin:0;
}

.foto span{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    height:60px;
    width:60px;
    background-color:white;
}
`

const Selecao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  .selecionado {
    color: #08632D;
    background-color: white;
  }

    .selecoes-icone {
        
        margin-right:10px;
        color: #08632D;
        }

`;

const NavbarLateral = styled.div`
display:flex;
box-sizing: border-box;
height: 50%;
width:100%;
padding: 0 10px;
font-size:14px;
flex-direction:column;
margin-bottom:40%;

.selecoes{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    height:35px;
    width:100%;
    color:white;
    margin-bottom:10px;
}

.selecoes-icone{
    display:flex;
    align-items:center;
    justify-content:center;
    width:20%;
}

.selecoes-texto{
    width:80%;
    font-weight:700;
}

.selecionado{
    color:#08632D;
    background-color:white;
}
`

const Sair = styled.div`
display:flex;
align-items:center;
width:100%;
padding:0 10px;
color:white;
font-weight:700;
position:absolute;
bottom: 5%;

img{
    margin-right:10px;
}
`

function LateralHeader(props) {
    const [selecionado, setSelecionado] = useState(props.selecionado);

const handleClick = (selecionado) => {
    setSelecionado(selecionado);
    props.setSelecionado(selecionado);
    
}

    return (
        <>
            <Header>

                <PerfilNome>
                    <div className="foto">
                        <span>
                            <img src={Icon('logo')} />
                        </span>
                    </div>
                    <div className="bem-vindo">
                        Bem Vindo!
                    </div>
                    <div className="nome">
                        Gabriel
                    </div>

                </PerfilNome>
                <NavbarLateral>
                    <Selecao
                        className={selecionado === "geral" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("geral")
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "geral" ? <img src={Icon("visaoIcon")} /> : <img src={Icon("visaoDesativa")} />}
                        </div>

                        <div className="selecoes-texto">Visão Geral</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "lancamentos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("lancamentos")
                        }
                    }
                    >
                        <div className="selecoes-icone">
                            {selecionado === "lancamentos" ? <img src={Icon("lancamentosAtiva")} /> : <img src={Icon("lancamentosIcon")} />}
                        </div>

                        <div className="selecoes-texto">Lançamentos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "planejamentos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => handleClick("planejamentos")}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "planejamentos" ? <img src={Icon("planejamentosAtiva")} /> : <img src={Icon("planejamentosIcon")} />}
                        </div>
                        <div className="selecoes-texto">Planejamentos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "objetivos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => handleClick("objetivos")}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "objetivos" ? <img src={Icon("objetivosAtiva")} /> : <img src={Icon("objetivosIcon")} />}
                        </div>
                        <div className="selecoes-texto">Objetivos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "config" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("config");
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "config" ? <img src={Icon("configAtiva")} /> : <img src={Icon("configuracoesIcon")} />}
                        </div>
                        <div className="selecoes-texto">Configurações</div>
                    </Selecao>
                </NavbarLateral>


                <Sair>
                    <img src={Icon('sairIcon')} />
                    Sair
                </Sair>
            </Header>
        </>
    )
}
export default LateralHeader;