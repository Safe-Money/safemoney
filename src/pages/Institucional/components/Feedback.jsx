import styled from "styled-components";
import estrelinhas from "../../../assets/estrelas.png";
import user from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";

const Container = styled.div`
    height: 150vh;
    margin: auto;
    width: 70%;
`

const Avaliacoes = styled.p`
    color: #08632D;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bolder
`

const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 7% 0;
`

const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
display: flex;
width: 15vw;
height: 90vh;
gap: 35px;
flex-direction: column;
align-items: center;
`

const User = styled.div`
display: flex;
align-items: center;
height: 20vh;

.ocupation{
    margin-left: 10px;  
}

.nomes-desc{
    text-align: left;
}

`

const Opinion = styled.p`
color: #737373;
text-align: center;
font-size: 16px;
font-weight: 400;
`

const Nome = styled.p`
color: #08632D;
font-size: 16px;
font-weight: 700;
margin-left: 10px;
`

function Feedback() {
    const users = [
        {
            nome: 'Francisco Alencar',
            ocupation: 'CEO da Energy Tech',
            img: user,
            opinion: ' "Estou adorando o SafeMoney! Finalmente encontrei uma plataforma simples e eficiente para controlar meus gastos. A interface é intuitiva e as categorias de despesas facilitam muito na hora de analisar para onde está indo o meu dinheiro. Uso e recomendo bastante! "'
        },
        {
            nome: 'Carlos Santos',
            ocupation: 'Contador',
            img: user2,
            opinion: '"O SafeMoney é uma ferramenta muito útil para o controle de gastos. Com ele, consigo acompanhar minhas despesas e receitas, além de ter uma visão clara do meu orçamento. O recurso de alertas é muito útil para me lembrar de pagar as contas em dia. Recomendo!"'
        },
        {
            nome: 'Maria Silva',
            ocupation: 'Cozinheira',
            img: user3,
            opinion: '"Simplesmente sensacional! O SafeMoney tem transformado a forma como administro minhas finanças. A funcionalidade de relatórios é incrível, me permitindo visualizar tendências e identificar áreas onde posso economizar. Muito bom! Recomendo fortemente!"'
        }
    ]

    return (
        <Container className="comece scroll-reveal-element">
            <Text>
                <Avaliacoes>Avaliações</Avaliacoes>
                <Title>Como nossos clientes avaliam o serviço?</Title>
            </Text>

            <ContainerCard>
                {users.map((user) => (
                    <Card>
                        <img src={estrelinhas} style={{ height: '30px' }} alt="avaliacao" />

                        <Opinion>
                            {user.opinion}
                        </Opinion>

                        <User>
                            <img src={user.img} alt="usuario" />
                            <div className="nomes-desc">
                                <Nome>{user.nome}</Nome>
                                <p style={{color: '#252B42', fontWeight: '400', fontSize: '14px'}} className="ocupation">{user.ocupation}</p>
                            </div>
                        </User>
                    </Card>
                ))}
            </ContainerCard>

        </Container>
    )
}

export default Feedback;