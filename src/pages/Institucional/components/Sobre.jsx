import { Icon } from "../funcoes/Icons";
import styled from "styled-components";

const Content = styled.div`
    background-color: #E5F9F7;
    height: 140vh;
    width: 100%;
`

const Cabecalho = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const TitAccess = styled.p`
    font-size: 40px;
    font-weight: bold;
`

const Subtitle = styled.div`
    margin: auto;
    width: 610px;
    height: 20vh;
    text-align: center;
    color: #737373;
    font-weight: 500;
    font-size: 17px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;

`

const Imagem = styled.div`
    display: flex;
    justify-content: center;
    height: 477px;
    margin: 0 0 0 5%;
    
`

const Topico = styled.div`
    font-size: 16px;
    display: flex;
    font-weight: bolder;
    align-items: center;
    width: 30vw;
    justify-content: space-between;


    p{
        margin-left:3%;
    }
`



const TitSeg = styled.p`
    font-size: 25px;
    font-weight: bolder;
    width: 70%; 
`

const Text = styled.div`
    padding: 70px;

    .text{
        color: #737373;
        font-weight: 500;
     
    }
`

function Sobre() {
    return (
        <Content className="comece scroll-reveal-element" >
            <Cabecalho>
                <TitAccess>Sobre Nós</TitAccess>

                <Subtitle>
                    Desenvolvemos o SafeMoney com uma missão clara: te ajudar a dominar suas finanças. Nosso compromisso com o controle de gastos é incomparável, proporcionando a você a confiança e o poder para alcançar liberdade financeira.
                </Subtitle>
            </Cabecalho>

            <Flex>
                <Imagem>
                    <img src={Icon('sobre')} alt="sobre" />
                </Imagem>

                <Text>
                    <TitSeg>Segurança Financeira: Sua Melhor Escolha!</TitSeg>

                    <p class="text">Nossa dedicação em ajudá-lo a atingir suas metas financeiras é insuperável. Junte-se a nós e experimente a diferença de ter um parceiro confiável ao seu lado, enquanto você trilha o caminho rumo a um futuro financeiro mais seguro e próspero</p>

                    <div className="topicos">
                        <Topico>
                            <img src={Icon('iconSobre')} alt="topico" />
                            <p>A gestão financeira eficiente traz sucesso de forma ágil</p>
                        </Topico>

                        <Topico>
                            <img src={Icon('chat')} alt="topico" />
                            <p>Lide melhor com o seu dinheiro e fuja das dívidas;</p>
                        </Topico>
                    </div>
                </Text>
            </Flex>
        </Content>
    )
}

export default Sobre
