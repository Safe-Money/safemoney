import React, { useEffect } from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Beneficio from "./components/Beneficios";
import Numbers from "./components/Numbers";
import Sobre from "./components/Sobre";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Icon } from "./funcoes/Icons";
import { Oferecemos } from "./funcoes/Oferecemos";
import { estilo, graficos } from "./funcoes/Graficos";


const Section = styled.section`
    width: 90%;
    margin: auto;

    a {
        color: #08632D;
    }

    .subtitulo {
        color: #5F5F5F;
        margin-left: 3%;
        font-size: 24px;
    }

    .title h1 {
        font-size: 64px;
        margin-left: 3%;
        margin-top: 14%;
    }

    .comece, .graphics {
        margin-top: 10%;
    }

    .comece {
        cursor: pointer;
    }
`

const Vantagem = styled.div`
    display: flex;
    width: 30vw;
    font-weight: bolder;
    align-items: center;
    text-align: center;

    .imagem {
        margin-right: 2%;
        
    }
`

const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: -5px;
    
    p{
        margin: 15px 0;
    }
`

const Bottoms = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 3%;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    justify-content: left;
    height: 350px;
    margin: auto;
    margin-top: 6%;

    .title {
        width: 100%;
        height: 50%;
    }

    .subtitulo {
        height: 30%;
        width: 100%;
        font-size: 20px;
        margin-bottom: 0%;
    }

    .title-access .cabecalho .sub {
        margin-top: -5%;
        font-size: 18px;
    }
`

const TxtAccess = styled.p`
    font-size: 16px;
    color: #08632D;
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 10px;
`

const Icone = styled.img`
    height: 48px;
    width: 48px;
    margin-bottom: 10px;
`

const TitAccess = styled.h1`
    font-size: 36px;
    margin-bottom: 5%;
`

const Charts = styled.div`
    ${estilo}
`

function Index() {
    const vantagens = ['Tenha planos e objetivos claros;', 'Controle seu orçamento;', 'Lide melhor com o seu dinheiro;']
    const navigate = useNavigate();

    useEffect(() => {
        
        const scrollReveal = ScrollReveal();

            scrollReveal.reveal('.scroll-reveal-element', {
            duration: 1000, 
            origin: 'bottom', 
            distance: '20px', 
            delay: 200, 
            easing: 'cubic-bezier(0.5, 0, 0, 1)', 
                });
    }, []);

    return (
        <div className="content">
            <Navbar />

            <Section>
                <Intro>
                    <Text>
                        <div className="title"  >
                            <h1 className="scroll-reveal-element" >Safe<a className="scroll-reveal-element">Money</a></h1>
                        </div>

                        <div className="subtitulo">
                            <span className="scroll-reveal-element" >
                                Equilibre sua vida financeira com nosso apoio <br />descubra a tranquilidade de conquistar suas metas econômicas com facilidade.
                            </span>
                        </div>

                        <Bottoms className="scroll-reveal-element" >
                            <Button bg='#08632D' color='white'className="scroll-reveal-element" onClick={() => navigate("/cadastro")} >
                                Cadastre-se
                            </Button>

                            <Button bg='white' color='#08632D' borda="#08632D"className="scroll-reveal-element" >
                                Saiba mais
                            </Button>
                        </Bottoms>
                    </Text>

                    <div className="imagem">
                        <img style={{ height: '98vh' }} src={Icon('imagemFormas')} alt="Imagem" className="scroll-reveal-element" />
                        
                    </div>
                </Intro>

                <Intro>
                    {Oferecemos().map((beneficio) => (
                        <Beneficio img={Icon(beneficio.nome)}
                            title={beneficio.title}
                            subtitle={beneficio.subtitle}
                            className="scroll-reveal-element" 
                        />
                    ))}
                </Intro>

                <Intro className="graphics">
                    <Text>
                        <Icone src={Icon('access')} alt="icon" className="scroll-reveal-element" />
                        <TxtAccess className="scroll-reveal-element" >Acessibilidade</TxtAccess>

                        <div className="title-access">
                            <div className="cabecalho">
                                <TitAccess className="scroll-reveal-element" >Tudo em um só lugar!</TitAccess>
                                <p className="sub">Organize-se financeiramente:</p>
                            </div>

                            <div className="vantagens">
                                {vantagens.map((vantagem) => (
                                    <Vantagem className="scroll-reveal-element" key={vantagem}>
                                        <img src={Icon('check')} alt="check" />
                                        <p>{vantagem}</p>
                                    </Vantagem>
                                ))}
                            </div>

                            <img className="comece scroll-reveal-element" src={Icon('comece')} alt="comece" />
                        </div>
                    </Text>

                    <Charts>
                        {graficos().map((grafico, index) => (
                            <img className={`scroll-reveal-element ${grafico}`} src={Icon(grafico)} alt={`chart-${index}`} key={grafico} />
                        ))}
                    </Charts>
                </Intro>

                <Numbers cadastros="15K" visitas="150K" clientes="100+"/>
            </Section>

            <Sobre />
            <Feedback />
            <Contact />
            <Footer />
        </div>
    );
}

export default Index;
