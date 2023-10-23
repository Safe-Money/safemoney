import { Button } from '../../../components/Button';
import img from '../../../assets/contact.png'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #E5F9F7;
    height: 65vh;
    padding: 10vh;
    margin: 2% 0;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 35%;
    margin: auto;
`

const Title = styled.p`
    font-size: 30px;
    font-weight: 700;
`
const Subtitle = styled.p`
    color: #737373;
    font-size: 18px;
    font-weight: 400;
    margin: 5% 0;
`

const Imagem = styled.div`
    border-radius: 20px;
    height: 517px;
    margin-top: -10%;
`

const Bottoms = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25vw;
    margin-top: 5%;
`

function Contact() {

    return (
        <Container className="comece scroll-reveal-element">
            <Flex>
                <Imagem>
                    <img src={img} alt="imagem" style={{height: '100%'}}/>
                </Imagem>

                <Column>
                    <Title>ENTRE EM CONTATO</Title>

                    <Subtitle>
                    Estamos aqui para te apoiar em tudo o que você precisar. Assim como a jornada começa com um único passo, estamos prontos para dar esse primeiro passo ao seu lado.
                    </Subtitle>

                    <Bottoms>
                        <Button bg="#08632D" color="white">Fale Conosco</Button>
                        <Button bg="white" color="#08632D"
                        borda="#08632D">Ligue</Button>
                    </Bottoms>
                </Column>
            </Flex>
        </Container>
    )
}

export default Contact