import { Button } from "../../../components/ButtonNav";
import styled from "styled-components";
import { Icon } from "../funcoes/Icons";

const Container = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    flex-direction: column
`

const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    padding: 20px;
    align-items: center
`

const Logos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 13vw;
`

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    width: 17vw;
    font-size: 13px;
    color: #404040;
    font-weight: bolder
`

const Copyright = styled.div`
    margin: auto;
    font-size: 16px;
    color: #404040;
`

function Footer() {
    const logos = [
        Icon('facebook'),
        Icon('twitter'),
        Icon('insta'),
        Icon('linkedin')
    ]

    return (
        <Container>
            <FooterDiv>
                <img className="logo" style={{height: '86px'}} src={Icon('logo')} alt="logo" />

                <Logos>
                    {logos.map(logo => (
                        <img src={logo} />
                    ))}
                </Logos>

                <Options>
                    <p>Sobre</p>
                    <p>SAC</p>
                    <p>Ouvidoria</p>
                </Options>

                <Button bg='#08632D' color='white'>
                    Cadastro
                </Button>
            </FooterDiv>

            <Copyright>
                <p>©2023 copyright - todos os direitos reservados</p>
            </Copyright>
        </Container>
    )
}

export default Footer